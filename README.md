# TrustLab Showcase

An independent, English-language homepage for **TrustLab**, Zhejiang Gongshang University. It explores a refined visual direction while the existing academic website remains available at <https://trustlab-zjsu.github.io/TrustLab/>.

## Run locally

No build, package installation, third-party fonts, or API keys are required. Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Homepage content and original research illustrations |
| `styles.css` | Typography, navy palette, responsive layout, and motion preferences |
| `app.js` | Mobile navigation and expandable project overviews |
| `favicon.svg` | TrustLab monogram |
| `404.html` | A branded fallback for missing pages |
| `.nojekyll` | Serve the source directly through GitHub Pages |

## Content

The homepage covers LLM safety, trustworthy multi-agent systems, and smart contract security. It highlights RECAST, HalluProp, and LARA, followed by news and a recruitment section.

Advisor, People, full publication lists, and project details link to the existing TrustLab academic website. The homepage does not include an advisor biography. Missing contact information remains `XXX` until confirmed.

All research diagrams are conceptual illustrations, not experimental measurements. Existing research status and news are retained; no performance metrics or credentials are invented.

## Deployment

GitHub Pages serves the `main` branch from `/ (root)`. Relative asset paths work both locally and under a project repository URL. Changes committed to `main` are deployed automatically by GitHub Pages.

## Design and accessibility

The site uses system fonts and locally stored assets, includes keyboard focus indicators and labelled controls, supports mobile layouts, and respects `prefers-reduced-motion`. JavaScript enhances navigation and disclosure controls; the main content remains readable without it.

This is a separate homepage project. It does not replace the `TrustLab` repository or access the private `TrustLab-assets` repository.
