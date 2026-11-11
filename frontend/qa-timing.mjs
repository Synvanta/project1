export default async function run(page, ui) {
  const before = await page.evaluate(() => ({
    root: Boolean(document.getElementById("root")),
    readyState: document.readyState,
  }));
  const imported = await page.evaluate(async () => {
    try {
      await import("/assets/index-vVkQUiT2.js");
      return "imported";
    } catch (error) {
      return String(error && (error.stack || error.message || error)).slice(
        0,
        400,
      );
    }
  });
  const after = await page.evaluate(() => ({
    root: Boolean(document.getElementById("root")),
    rootHtml: document.getElementById("root")?.innerHTML.length,
    header: Boolean(document.querySelector(".site-header")),
  }));
  return { before, imported, after };
}
