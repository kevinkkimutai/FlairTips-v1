/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://flairtips.com",
  generateRobotsTxt: true, 
  generateIndexSitemap: false,  // ⚡️ Prevents `sitemap-0.xml`
  sitemapSize: 50000,           // Ensures all URLs are in one file
  additionalPaths: async (config) => [
    { loc: "/", lastmod: new Date().toISOString() },
    { loc: "/all_matches", lastmod: new Date().toISOString() },
    { loc: "/about", lastmod: new Date().toISOString() },
    { loc: "/contact-us", lastmod: new Date().toISOString() },
    { loc: "/forgot-password", lastmod: new Date().toISOString() },
    { loc: "/pricing", lastmod: new Date().toISOString() },
    { loc: "/privacy-policy", lastmod: new Date().toISOString() },
  ],
  transform: async (config, path) => ({
    loc: path, 
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 0.7,
  }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
