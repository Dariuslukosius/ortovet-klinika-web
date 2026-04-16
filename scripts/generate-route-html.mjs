import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");

const routes = [
  {
    routePath: "/paslaugos",
    outputPath: path.join(distDir, "paslaugos", "index.html"),
    title: "Pagrindinės ir papildomos veterinarinės paslaugos | Ortovet",
    description:
      "Teikiame profesionalią veterinarinę pagalbą įvairiems gyvūnams – nuo profilaktikos ir diagnostikos iki gydymo bei chirurginių procedūrų. Vienoje vietoje rasite visas svarbiausias paslaugas, reikalingas jūsų augintinio sveikatai užtikrinti.",
    canonicalUrl: "https://ortovet.lt/paslaugos",
    imageUrl: "https://ortovet.lt/og-services.jpg",
  },
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`Expected pattern not found: ${pattern}`);
  }

  return html.replace(pattern, replacement);
}

function createRouteHtml(template, route) {
  const description = escapeHtml(route.description);
  const title = escapeHtml(route.title);
  const canonicalUrl = escapeHtml(route.canonicalUrl);
  const imageUrl = escapeHtml(route.imageUrl);

  let html = template;

  html = replaceTag(html, /<title>.*?<\/title>/, `<title>${title}</title>`);
  html = replaceTag(
    html,
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${description}" />`,
  );
  html = replaceTag(
    html,
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );
  html = replaceTag(
    html,
    /<link rel="alternate" href=".*?" hreflang="lt-LT" \/>/,
    `<link rel="alternate" href="${canonicalUrl}" hreflang="lt-LT" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${title}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:image" content=".*?" \/>/,
    `<meta property="og:image" content="${imageUrl}" />`,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${title}" />`,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${description}" />`,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:image" content=".*?" \/>/,
    `<meta name="twitter:image" content="${imageUrl}" />`,
  );

  return html;
}

const template = await readFile(templatePath, "utf8");

for (const route of routes) {
  const routeHtml = createRouteHtml(template, route);
  await mkdir(path.dirname(route.outputPath), { recursive: true });
  await writeFile(route.outputPath, routeHtml);
}
