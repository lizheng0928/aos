import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".webp": "image/webp", ".ico": "image/x-icon", ".woff2": "font/woff2" };
http.createServer(async (req, res) => {
  try {
    const url = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (prefix && !(url === prefix || url.startsWith(prefix + "/"))) throw new Error("Not found");
    let file = path.resolve(root, "." + (url.slice(prefix.length) || "/"));
    if (file !== root && !file.startsWith(root + path.sep)) throw new Error("Not found");
    if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-cache" });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
}).listen(Number(process.env.PORT || 3001), "127.0.0.1", () => console.log(`Preview: http://localhost:${process.env.PORT || 3001}${prefix}/`));
