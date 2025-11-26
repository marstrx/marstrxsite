import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const urls = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: "https://marstrx.com" });

urls.forEach((u) => sitemap.write(u));
sitemap.end();

streamToPromise(sitemap).then((sm) => {
  writeFileSync("./public/sitemap.xml", sm.toString());
});