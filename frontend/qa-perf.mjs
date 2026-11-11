export default async function run(page) {
  await page.goto("http://localhost:4318/", { waitUntil: "load", timeout: 120000 });
  const perf = await page.evaluate(() => {
    const nav = performance.getEntriesByType("navigation")[0];
    const resources = performance.getEntriesByType("resource");
    return {
      domContentLoaded: Math.round(nav.domContentLoadedEventEnd),
      loadEvent: Math.round(nav.loadEventEnd),
      responseEnd: Math.round(nav.responseEnd),
      resourceCount: resources.length,
      slowest: resources
        .map((r) => ({ n: r.name.split("/").pop().slice(0, 50), dur: Math.round(r.duration) }))
        .sort((a, b) => b.dur - a.dur)
        .slice(0, 6),
      rootHtml: document.getElementById("root").innerHTML.length,
    };
  });
  return perf;
}
