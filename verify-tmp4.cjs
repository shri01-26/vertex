const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

  const navItems = ['Products', 'Solutions', 'Developers', 'Partners', 'Resources'];
  const dir = 'C:/Users/Dell/AppData/Local/Temp/claude/e--yash-vertex-workspace-yash/bb04ec5c-f1bd-4807-bdba-9d6755a29226/scratchpad';

  for (const item of navItems) {
    const link = page.locator('.synthesia-nav-link', { hasText: item });
    const box = await link.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForTimeout(700);

    // simulate moving mouse down toward the dropdown - straight line through the gap
    const dropdown = page.locator('.synthesia-mega-dropdown.full-width');
    const dbox = await dropdown.boundingBox();
    if (dbox) {
      // move through several intermediate points to simulate real travel
      const steps = 8;
      for (let i = 1; i <= steps; i++) {
        const x = box.x + box.width / 2;
        const y = box.y + box.height / 2 + (dbox.y + 20 - (box.y + box.height / 2)) * (i / steps);
        await page.mouse.move(x, y);
      }
      await page.waitForTimeout(600);
      const stillVisible = await dropdown.isVisible();
      console.log(`${item}: dropdown visible after mouse travel to panel = ${stillVisible}`);
      await page.screenshot({ path: `${dir}/v4-${item}.png` });
    } else {
      console.log(`${item}: NO DROPDOWN FOUND`);
    }

    await page.mouse.move(50, 950);
    await page.waitForTimeout(400);
  }

  console.log('Console/page errors:', errors);
  await browser.close();
})();
