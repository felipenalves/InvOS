---
name: image-creator
description: >
  Renders HTML/CSS into production-ready images via Playwright.
  Accepts complete HTML content, opens it in a headless browser at
  the specified viewport, and captures a pixel-perfect screenshot.
  Generic engine -- any visual format is defined by the HTML template.
description_pt-BR: >
  Renderiza HTML/CSS em imagens prontas para produção via Playwright.
  Aceita conteúdo HTML completo, abre em um navegador headless na
  viewport especificada e captura uma screenshot pixel-perfect.
  Motor genérico -- qualquer formato visual é definido pelo template HTML.
description_es: >
  Renderiza HTML/CSS en imágenes listas para producción vía Playwright.
  Acepta contenido HTML completo, lo abre en un navegador headless en
  el viewport especificado y captura una screenshot pixel-perfect.
  Motor genérico -- cualquier formato visual se define por el template HTML.
type: hybrid
version: "1.1.0-invos"
# INVOS: Playwright MCP opcional; Chrome headless é o fallback padrão
categories: [design, automation, images]
---

# Image Creator (INVOS)

Renderiza HTML/CSS em PNG. Usado pelo squad **instagram-carrossel**.

## Quando usar

Gerar slides de carrossel, gráficos sociais, qualquer HTML self-contained → PNG.

## Ordem de render (obrigatória)

1. **Chrome/Chromium headless** (padrão INVOS — sem MCP)  
2. Playwright MCP se o harness tiver  
3. Se nada existir: deixe HTML + instrução “abrir no browser / print” e **não** finja PNG

### Core Workflow

1. **Generate HTML** — arquivo self-contained (CSS inline, Google Fonts via `@import` ok).

2. **Save HTML** — ex.:  
   `.agents/squads/instagram-carrossel/output/slides/slide-01.html`  
   e espelho em `conteudo/carrosseis/$SLUG/slides/`.

3. **Start HTTP server** na pasta dos HTML:
   ```bash
   python3 -m http.server 8765 --directory "OUTPUT_DIR" &
   for i in $(seq 1 30); do curl -s http://localhost:8765 >/dev/null 2>&1 && break || sleep 0.1; done
   ```

4. **Render com Chrome headless** (macOS path padrão):
   ```bash
   CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
   # Linux: google-chrome || chromium
   W=1080 H=1350   # INVOS default 4:5; squad legado pode pedir 1440
   "$CHROME" --headless=new --no-sandbox --disable-gpu --hide-scrollbars \
     --window-size=${W},${H} \
     --screenshot="OUTPUT_DIR/rendered/slide-01.png" \
     --virtual-time-budget=4000 \
     "http://localhost:8765/slide-01.html"
   ```

5. **Verify** — inspecionar PNG; re-render se quebrar.

6. **Stop server**:
   ```bash
   pkill -f "http.server 8765" 2>/dev/null || true
   ```

### Viewport Presets (width x height)

Use these standard dimensions:
- Instagram Post: 1080 x 1080
- Instagram Carousel: 1080 x 1440
- Instagram Story/Reel: 1080 x 1920
- Facebook Post: 1200 x 630
- Twitter/X Post: 1200 x 675
- LinkedIn Post: 1200 x 627
- YouTube Thumbnail: 1280 x 720
- Custom: as specified by the squad

### HTML Template Guidelines

The HTML you generate MUST:
- Be self-contained (inline CSS, no external dependencies)
- Use web-safe fonts OR Google Fonts via `@import`
- Embed images as absolute paths or base64 data URIs
- Set exact body dimensions matching the viewport
- Use `margin: 0; padding: 0; overflow: hidden` on body
- Account for device pixel ratio if high-res needed

Example minimal structure:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; height: 1440px; overflow: hidden; }
    /* ... your design ... */
  </style>
</head>
<body>
  <!-- Your content -->
</body>
</html>
```

### Batch Rendering (Carousels/Multi-slide)

For multi-image outputs like carousels:
1. Generate one HTML file per slide
2. Start the HTTP server **once** before the batch (step 3 of Core Workflow)
3. Render each slide sequentially (step 4 repeated per slide)
4. Stop the HTTP server **once** after all slides are done (step 6 of Core Workflow)
5. Name output files with zero-padded numbers: slide-01.png, slide-02.png, slide-03.png
6. Keep all slides at the same viewport dimensions

### Best Practices

- Always verify the first rendered image before batch rendering
- Use CSS Grid/Flexbox for layout -- most reliable across renderers
- Avoid animations/transitions (static screenshot only)
- For rounded corners on images, use CSS `border-radius` + `overflow`
- For emoji rendering, rely on system fonts (Windows: Segoe UI Emoji)
- Test text overflow -- ensure no content is clipped unexpectedly
- Keep HTML files alongside output PNGs for easy re-rendering

### Typography & Readability Rules

Text must be legible in the target platform's smallest viewing context (mobile feed for social platforms). Text inside linked or embedded image files (JPG, PNG, base64 assets) is decorative and exempt. All HTML text nodes and inline SVG text are subject to these rules.

These are HARD minimums -- never go below them for readable text.

#### Minimum Font Sizes by Platform

| Text Role        | Instagram Post/Carousel | Instagram Story/Reel | LinkedIn/Facebook | YouTube Thumb |
|------------------|------------------------|----------------------|-------------------|---------------|
| Hero / Display   | 58px                   | 56px                 | 40px              | 60px          |
| Heading          | 43px                   | 42px                 | 32px              | 36px          |
| Body / Bullets   | 34px                   | 32px                 | 24px              | 36px          |
| Caption / Footer | 24px                   | 20px                 | 20px              | 32px          |

**Universal rule**: No text element meant to be read may use a font size smaller than 20px, on any platform.

#### Font Weight

- Body text and above: use font-weight 500+ (medium/semibold/bold)
- Caption text: font-weight 500+ strongly recommended; 400 only with explicit high-contrast background (4.5:1 ratio minimum)
- Avoid thin/light weights (100-300) for any readable text

#### Verification Checklist

Before calling `browser_take_screenshot`, scan your HTML and confirm:
- All text elements use explicit px sizes (not em/rem that could resolve smaller)
- No heading is below the Heading minimum for the target platform
- No body/bullet text is below the Body minimum
- No footer or metadata text is below the Caption minimum
- No readable text uses font-weight below 500 (caption at 400 only with 4.5:1 contrast background)

## Available operations

- **Render HTML to PNG** -- Convert self-contained HTML/CSS into a pixel-perfect screenshot
- **Batch Render** -- Render multiple slides/pages sequentially for carousels and multi-image content
- **Viewport Resize** -- Set precise viewport dimensions for any target platform
- **Quality Verification** -- Visually inspect rendered output and re-render if needed
