export default async function run(page, ui) {
  await page.route("**/jpg%20sequence/**", (route) => route.abort());
  await page.goto("http://localhost:4318/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(5000);
  const state = await page.evaluate(() => ({
    root: document.getElementById("root").innerHTML.length,
    header: !!document.querySelector(".site-header"),
  }));
  await page.screenshot({ path: "n6-no-frames.png", clip: { x: 0, y: 0, width: 1440, height: 300 } });
  return state;
}
