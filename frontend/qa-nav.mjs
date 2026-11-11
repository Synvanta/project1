export default async function run(page, ui) {
  await page.waitForSelector(".site-header");
  await page.waitForTimeout(800);

  // Open the Solutions dropdown
  await page.getByRole("button", { name: "Solutions" }).hover();
  await page.waitForTimeout(450);
  await page.screenshot({ path: "nav-dropdown.png", clip: { x: 0, y: 0, width: 1440, height: 620 } });
  const panelVisible = await page.evaluate(() => {
    const panel = document.querySelector("#nav-panel-solutions");
    return panel ? getComputedStyle(panel).visibility + " / " + getComputedStyle(panel).opacity : "missing";
  });

  // Scrolled / solid state
  await page.mouse.move(700, 900);
  await page.evaluate(() => window.scrollTo(0, 1700));
  await page.waitForTimeout(700);
  await page.screenshot({ path: "nav-scrolled.png", clip: { x: 0, y: 0, width: 1440, height: 300 } });

  // Mobile menu
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.waitForTimeout(400);
  await page.getByRole("button", { name: "Solutions" }).click();
  await page.waitForTimeout(450);
  await page.screenshot({ path: "nav-mobile.png" });

  return { panelVisible, solutionsBtn: (await ui.snapshot()).slice(0, 400) };
}
