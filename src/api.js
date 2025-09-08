const BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export async function fetchConfessions({ sort = "latest", offset = 0, limit = 10 } = {}) {
  const url = `${BASE}/api/confessions?sort=${encodeURIComponent(sort)}&offset=${offset}&limit=${limit}`;
  const r = await fetch(url);
  return r.json();
}

export async function postConfession({ text, tone }) {
  const r = await fetch(`${BASE}/api/confessions`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text, tone })
  });
  if (!r.ok) throw new Error((await r.json()).error || "Failed");
  return r.json();
}

export async function likeConfession(id) {
  const r = await fetch(`${BASE}/api/confessions/${id}/like`, { method: "POST" });
  return r.json();
}
