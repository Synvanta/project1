export default async function run(page) {
  await page.goto("http://localhost:4318/modtest.html", { waitUntil: "load" });
  const result = await page.evaluate(async () => {
    const out = { step: "start" };
    try {
      const ns = await import("/assets/index-vVkQUiT2.js");
      out.step = "imported";
      const container = document.createElement("div");
      container.id = "probe-root";
      document.body.appendChild(container);
      out.step = "container added";
      await new Promise((resolve) => setTimeout(resolve, 300));
      out.rootExists = Boolean(document.getElementById("root"));
      out.bodyHtml = document.body.innerHTML.slice(0, 200);
      await import("react-dom/client").then(() => {}).catch(() => {});
    } catch (error) {
      out.error = String(error && (error.stack || error.message));
    }
    return out;
  });
  return result;
}
