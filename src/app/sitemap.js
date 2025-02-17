export async function GET() {
    const baseUrl = "https://flairtips.com";
    // const apiUrl = "http://localhost:3000";
    
    // const posts = await fetch(`${apiUrl}/api/posts`).then((res) => res.json());
  
    const staticRoutes = [
      { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/all_matches`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/profile`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/contact-us`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/forgot-password`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/privacy-policy`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/pricing`, lastModified: new Date().toISOString() },
    ];
  
    // const dynamicRoutes = posts.map((post) => ({
    //   url: `${baseUrl}/blog/${post.slug}`,
    //   lastModified: post.updatedAt || new Date().toISOString(),
    // }));
  
    const urls = [...staticRoutes];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map(
            ({ url, lastModified }) => `
            <url>
              <loc>${url}</loc>
              <lastmod>${lastModified}</lastmod>
            </url>`
          )
          .join("")}
      </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
  