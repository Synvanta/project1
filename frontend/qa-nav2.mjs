export default async function run(page, ui) {
  await page.waitForSelector(".site-header");
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "n1-hero.png", clip: { x: 0, y: 0, width: 1440, height: 220 } });

  // Dropdown -> click a link -> should scroll to the target
  await page.getByRole("button", { name: "Solutions" }).hover();
  await page.waitForTimeout(400);
  await page.getByRole("link", { name: "AI-powered automation" }).click();
  await page.waitForTimeout(1200);
  const afterNav = await page.evaluate(() => ({
    hash: window.location.hash,
    aiTop: Math.round(document.querySelector("#ai").getBoundingClientRect().top),
    headerSolid: document.querySelector(".site-header").classList.contains("site-header--solid"),
  }));
  await page.screenshot({ path: "n2-scrolled-solid.png", clip: { x: 0, y: 0, width: 1440, height: 200 } });

  // Mobile, header without overlay impact
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:4318/", { waitUntil: "load" });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "n3-mobile-closed.png", clip: { x: 0, y: 0, width: 390, height: 160 } });
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: "Industries" }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: "n4-mobile-open.png" });

  return afterNav;
}
