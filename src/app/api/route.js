export async function POST(req) {
  return handler(req);
}

async function handler(req) {
  const apiPath = req.nextUrl.pathname.replace("/api/proxy", "").replace(/^\/+/, "");
  const apiUrl = `https://api.flairtips.com/api/v1/${apiPath}`;

  console.log("Proxying request to:", apiUrl);

  try {
    const response = await fetch(apiUrl, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.get("authorization") || "",
      },
      body: req.method !== "GET" ? JSON.stringify(await req.json()) : undefined,
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Request failed", status: response.status }), {
        status: response.status,
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: response.status });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Proxy error", details: error.message }), { status: 500 });
  }
}
