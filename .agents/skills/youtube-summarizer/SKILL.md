---
name: youtube-summarizer
description: >
  Extrai transcrição e resume vídeos do YouTube. Use quando chegar link de vídeo
  com pedido de resumo, pontos principais, insights ou entendimento sem assistir.
  Dispare para: 'o que esse vídeo diz?', 'extrai os insights desse vídeo',
  'resume esse canal'. Pré-requisito para fluxos de vídeo para conteúdo.
---

## Purpose

This skill extracts transcripts from YouTube videos and generates comprehensive, verbose summaries using the STAR + R-I-S-E framework. It validates video availability, extracts transcripts using the youtube-transcript-api Python library, and produces detailed documentation capturing all insights, arguments, and key points.

The skill is designed for users who need thorough content analysis and reference documentation from educational videos, lectures, tutorials, or informational content.

## When to Use This Skill

This skill should be used when:

- User provides a YouTube video URL and wants a detailed summary
- User needs to document video content for reference without rewatching
- User wants to extract insights, key points, and arguments from educational content
- User needs transcripts from YouTube videos for analysis
- User asks to "summarize", "resume", or "extract content" from YouTube videos
- User wants comprehensive documentation prioritizing completeness over brevity

## Step 0: Discovery & Setup

Before processing videos, validate the environment and dependencies:

```bash
# Check if youtube-transcript-api is installed
~/.venvs/youtube-summarizer/bin/python3 -c "import youtube_transcript_api" 2>/dev/null
if [ $? -ne 0 ]; then
 echo "⚠️ youtube-transcript-api not found"
 # Offer to install
fi

# Check Python availability
if ! command -v python3 &>/dev/null; then
 echo "❌ Python 3 is required but not installed"
 exit 1
fi

# Check Groq key (resumo sem tokens Claude)
if [ -z "$GROQ_API_KEY" ]; then
  echo "⚠️ GROQ_API_KEY não definido — resumo usará Claude (gasta tokens)"
fi

# Check faster-whisper (fallback para vídeos sem legenda)
python3 -c "import faster_whisper" 2>/dev/null || echo "⚠️ faster-whisper não instalado (necessário só para vídeos sem legenda)"
```

### Fallback: Vídeo sem legenda → faster-whisper tiny

Se o Step 2 retornar `TranscriptsDisabled` ou `NoTranscriptFound`, usar áudio local:

```bash
# Baixar áudio do vídeo
python3 -m yt_dlp -x --audio-format mp3 -o /tmp/yt_audio_$VIDEO_ID.mp3 "$URL" 2>/dev/null

# Transcrever localmente com Whisper tiny (~300MB RAM, libera logo)
python3 -c "
from faster_whisper import WhisperModel
model = WhisperModel('tiny', device='cpu', compute_type='int8')
segments, info = model.transcribe('/tmp/yt_audio_$VIDEO_ID.mp3', language='pt')
text = ' '.join(s.text for s in segments)
with open('/tmp/transcript_$VIDEO_ID.txt', 'w') as f:
    f.write(text)
print(f'✅ Transcrição local: {len(text)} chars')
"
# Continuar para Step 4 normalmente
```

## Main Workflow

### Step 1: Validate YouTube URL

Objective: Extract video ID and validate URL format.

```bash
URL="$USER_PROVIDED_URL"

VIDEO_ID=$(echo "$URL" | cut -d 'v' -f 2 | cut -d '=' -f 2)

echo "📹 Video ID extracted: $VIDEO_ID"
```

### Step 2: Check Video & Transcript Availability

Objective: Verify video exists and transcript is accessible.

```bash
~/.venvs/youtube-summarizer/bin/python3 -c "
from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled, NoTranscriptFound
import sys

video_id = '$VIDEO_ID'

try:
    ytt_api = YouTubeTranscriptApi()
    transcript_list = ytt_api.list(video_id)
    print(f'✅ Video accessible: {video_id}')
    print('📝 Available transcripts:')
    for transcript in transcript_list:
        lang = transcript.language
        lang_code = transcript.language_code
        is_generated = ' (auto-generated)' if transcript.is_generated else ''
        print(f' - {lang} ({lang_code}){is_generated}')
except TranscriptsDisabled:
    print(f'❌ Transcripts are disabled for video {video_id}')
    sys.exit(1)
except NoTranscriptFound:
    print(f'❌ No transcript found for video {video_id}')
    sys.exit(1)
except Exception as e:
    print(f'❌ Error accessing video: {e}')
    sys.exit(1)
"
```

### Step 3: Extract Transcript

Objective: Retrieve transcript in preferred language.

```bash
~/.venvs/youtube-summarizer/bin/python3 -c "
from youtube_transcript_api import YouTubeTranscriptApi
import sys

video_id = '$VIDEO_ID'

try:
    ytt_api = YouTubeTranscriptApi()
    transcript_list = ytt_api.list(video_id)
    transcript_obj = transcript_list.find_transcript(['en'])
    
    # Fetch the actual transcript data
    transcript_data = transcript_obj.fetch()

    full_text = ' '.join([entry.text for entry in transcript_data])
    
    with open(f'/tmp/transcript_{video_id}.txt', 'w') as f:
        f.write(full_text)
    
    print(f'✅ Transcript extracted successfully. Length: {len(full_text)} characters.')
    
except Exception as e:
    print(f'❌ Error extracting transcript: {e}')
    sys.exit(1)
"
```

### Step 4: Generate Comprehensive Summary

Objective: Resumir transcript via Groq (zero tokens Claude). Fallback para Claude Haiku se Groq falhar.

```bash
TRANSCRIPT=$(cat /tmp/transcript_$VIDEO_ID.txt)
CHAR_COUNT=${#TRANSCRIPT}

PROMPT="Você é um assistente de análise de conteúdo. Resuma o seguinte transcript de vídeo em português, usando o framework STAR+RISE:

**SITUAÇÃO:** contexto e cenário apresentado
**TAREFA/PROBLEMA:** o que o autor está resolvendo
**AÇÃO:** métodos, argumentos e pontos principais
**RESULTADO:** conclusões e aprendizados

**INSIGHTS:** 3-5 insights acionáveis
**IMPLICAÇÕES:** impacto prático
**SÍNTESE:** 1 parágrafo resumindo tudo
**EXTRAPOLAÇÃO:** como aplicar isso

Transcript:
$TRANSCRIPT"

# Groq: zero tokens Claude, free tier generoso (500k tokens/dia)
GROQ_RESPONSE=$(curl -s https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"model\": \"llama-3.3-70b-versatile\",
    \"messages\": [{\"role\": \"user\", \"content\": $(echo "$PROMPT" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')}],
    \"max_tokens\": 2048
  }" 2>/dev/null)

GROQ_CONTENT=$(echo "$GROQ_RESPONSE" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d['choices'][0]['message']['content'])
except:
    print('')
" 2>/dev/null)

if [ -n "$GROQ_CONTENT" ]; then
  echo "$GROQ_CONTENT" > /tmp/summary_$VIDEO_ID.txt
  echo "✅ Resumo gerado via Groq (zero tokens Claude)"
else
  # Fallback: Claude lê o arquivo diretamente
  echo "⚠️ Groq indisponível — passando transcript para Claude"
  echo "Leia /tmp/transcript_$VIDEO_ID.txt e gere resumo STAR+RISE em PT-BR"
fi
```

**Routing:**
- Groq disponível → resumo local, zero tokens Claude
- Groq falhar (sem key, quota, erro) → Claude lê transcript e resume
- Transcript > 12k chars → Claude Haiku preferível para contexto longo

### Step 5: Format and Present Output

Objective: Deliver the summary in clean, well-structured Markdown.

```markdown
# [Video Title]

**Canal:** [Channel Name]
**URL:** [https://youtube.com/watch?v=VIDEO_ID]

## 📝 Detailed Summary
[...Summary goes here...]
```
