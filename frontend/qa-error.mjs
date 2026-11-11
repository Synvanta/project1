export default async function run(page, ui) {
  const errors = [];
  page.on("pageerror", (error) => errors.push(String(error)));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`[console] ${message.text()}`);
  });
  await page.goto("http://localhost:4318/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(6000);
  const state = await page.evaluate(() => ({
    rootHtml: document.getElementById("root")?.innerHTML.length ?? -1,
    moduleScript: document.querySelector("script[type=module]")?.src ?? null,
  }));
  return { errors, state };
}
