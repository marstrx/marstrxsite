import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const urls = [
  { url: "/", changefreq: "weekly", priority: 1.0 ,lastmodISO: new Date().toISOString()}
];

const sitemap = new SitemapStream({ hostname: "https://marstrx.com" });

urls.forEach((u) => sitemap.write(u));
sitemap.end();

streamToPromise(sitemap).then((sm) => {
  writeFileSync("./public/sitemap.xml", sm.toString());
});