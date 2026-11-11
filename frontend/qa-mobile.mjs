export default async function run(page, ui) {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:4318/", { waitUntil: "load" });
  await page.waitForSelector(".site-header");
  await page.waitForTimeout(1200);
  await page.screenshot({ path: "m1-closed.png" });

  const info = await page.evaluate(() => {
    const header = document.querySelector(".site-header");
    const burger = document.querySelector(".site-header__burger");
    const mobile = document.querySelector(".mobile-nav");
    const r = burger.getBoundingClientRect();
    return {
      headerZ: getComputedStyle(header).zIndex,
      headerBg: getComputedStyle(header).backgroundColor,
      burgerDisplay: getComputedStyle(burger).display,
      burgerRect: [
        Math.round(r.x),
        Math.round(r.y),
        Math.round(r.width),
        Math.round(r.height),
      ],
      mobileVisibility: getComputedStyle(mobile).visibility,
      mobileZ: getComputedStyle(mobile).zIndex,
      topElement:
        document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2)
          ?.className || "none",
    };
  });

  await page.getByRole("button", { name: "Open menu" }).click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: "m2-open.png" });

  return info;
}
