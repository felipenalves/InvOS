# Fetch assets (subdoc de instagram-carrossel)

**Não é skill separada.** Carregar só se precisar stock/screenshot/arquivo do user nos slides.

## When to use

Assets visuais: busca web, screenshot (Playwright **ou** Chrome se existir), arquivos do user.  
**Opcional** no carrossel — a maioria das runs só precisa de HTML tipográfico + `marca/`.

## When to use (detail)

Three modes: web image search, live website screenshots, user-provided files. Save under squad `output/` or `conteudo/carrosseis/$SLUG/assets/`.

## Instructions

### Capabilities

1. **Web Image Search** -- Use the native web_search tool to find images by keyword. Evaluate results and download the best match.

2. **Live Screenshot** -- Use Playwright MCP to navigate to a URL, set viewport dimensions, and capture a screenshot.

3. **Asset Organization** -- Save all acquired assets with descriptive filenames in the squad's reference/ or output/ folder.

### Screenshot Modes

- **viewport** -- Capture only the visible viewport area (default)
- **full_page** -- Capture the entire scrollable page
- **selector** -- Capture a specific CSS selector element

### Screenshot Workflow

When taking a screenshot:
1. Navigate to the URL with `browser_navigate`
2. Set viewport: `browser_resize` with width/height for target format
   - Instagram post: 1080x1080
   - Instagram carousel: 1080x1440
   - Story/Reel: 1080x1920
   - Generic: 1280x720
3. Wait for page load (`browser_wait_for` if needed)
4. Capture: `browser_take_screenshot`
5. Save to reference folder with descriptive filename

### Asset Metadata

After acquiring each asset, document in your output:
- `path`: local file path
- `width/height`: image dimensions
- `source_type`: "web_search" | "screenshot" | "user_provided"
- `original_url`: source URL (if applicable)

### Cache Policy

Before fetching an asset:
- Check if the reference folder already has a matching file
- Use deterministic filenames based on source (e.g., URL slug + viewport)
- Reuse existing assets to avoid redundant fetches

### Safety

- Timeout: max 30s per screenshot, skip and warn if exceeded
- Maximum screenshot dimensions: 1920x1920px
- Block `file://` protocol URLs
- Block localhost and private IP ranges (127.0.0.1, 10.x, 192.168.x)

### Best Practices

- Prefer screenshots over web search for product/tool pages (images are often outdated)
- Save with descriptive names: `gemini-benchmark-chart.png` not `image1.png`
- Normalize URLs before caching (strip tracking params)
- Document all acquired assets with metadata for downstream tools

## Available operations

- **Web Image Search** -- Find and download images by keyword from the web
- **Live Screenshot** -- Capture viewport, full-page, or element screenshots of any URL
- **Asset Organization** -- Save and catalog assets with descriptive filenames and metadata
- **Cache Check** -- Detect and reuse previously fetched assets to avoid redundant downloads
