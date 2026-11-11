export default async function run(page) {
  await page.goto("http://localhost:4318/", { waitUntil: "load", timeout: 120000 });
  const timeline = [];
  for (let i = 0; i < 8; i += 1) {
    const snap = await page.evaluate(() => ({
      root: document.getElementById("root")?.innerHTML.length ?? -1,
      header: Boolean(document.querySelector(".site-header")),
      frames: performance.getEntriesByType("resource").filter((e) => e.name.includes("jpg")).length,
      vis: document.visibilityState,
    }));
    timeline.push(snap);
    if (snap.header) break;
    await page.waitForTimeout(1500);
  }
  return timeline;
}
