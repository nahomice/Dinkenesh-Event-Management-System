import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTE_SEO_MAP, SITE_URL } from "../src/seo/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function buildUrl(pathname) {
  if (pathname === "/") {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${pathname}`;
}

function formatPriority(priority) {
  return Number(priority).toFixed(1);
}

function generateSitemapXml() {
  const routes = Object.entries(ROUTE_SEO_MAP)
    .filter(([, meta]) => meta.sitemap)
    .map(([pathname, meta]) => ({
      pathname,
      changefreq: meta.sitemap.changefreq,
      priority: meta.sitemap.priority,
    }))
    .sort((a, b) => b.priority - a.priority || a.pathname.localeCompare(b.pathname));

  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
  ];

  for (const route of routes) {
    lines.push("  <url>");
    lines.push(`    <loc>${buildUrl(route.pathname)}</loc>`);
    lines.push(`    <changefreq>${route.changefreq}</changefreq>`);
    lines.push(`    <priority>${formatPriority(route.priority)}</priority>`);
    lines.push("  </url>");
  }

  lines.push("</urlset>");

  return `${lines.join("\n")}\n`;
}

async function main() {
  const outputPath = path.resolve(__dirname, "../public/sitemap.xml");
  const sitemapXml = generateSitemapXml();

  await writeFile(outputPath, sitemapXml, "utf8");
  console.log(`Generated sitemap at ${outputPath}`);
}

main().catch((error) => {
  console.error("Failed to generate sitemap:", error);
  process.exit(1);
});
