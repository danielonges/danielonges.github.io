// Screenshot a page with headless Chromium (dev tool — not part of the build).
// Usage:  npm run shot -- [url] [out] [width] [height]
//   FULL=1    capture the full page (scrolls first so lazy content loads)
//   SETTLE=ms extra wait after load/scroll (default 1200)
// One-time setup: npx playwright-core install chromium
import { chromium } from "playwright-core";

const [url = "http://localhost:4321/", out = "shot.png", width = "1280", height = "900"] =
  process.argv.slice(2);
const settle = Number(process.env.SETTLE ?? 1200);
const fullPage = process.env.FULL === "1";

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: Number(width), height: Number(height) },
});
await page.goto(url, { waitUntil: "networkidle" });
if (fullPage) {
  // walk the page so IntersectionObserver-gated content (e.g. the music
  // player) initialises before capture
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 80));
    }
    window.scrollTo(0, 0);
  });
}
await page.waitForTimeout(settle);
await page.screenshot({ path: out, fullPage });
await browser.close();
console.log(out);
