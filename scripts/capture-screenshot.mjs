import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'report', 'report.html');
const outPath = path.join(root, 'assets', 'report-screenshot.png');

if (!process.env.PLAYWRIGHT_BROWSERS_PATH) {
  process.env.PLAYWRIGHT_BROWSERS_PATH = path.join(root, '.playwright-browsers');
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1040, height: 1100 } });
await page.goto(`file://${htmlPath}`);
await page.waitForTimeout(500);
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
console.log('Screenshot saved:', outPath);
