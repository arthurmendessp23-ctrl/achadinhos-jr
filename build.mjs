import { writeFile } from "node:fs/promises";

const publicUrl = (process.env.SUPABASE_URL || "").trim().replace(/\/$/, "");
const key = (process.env.SUPABASE_PUBLISHABLE_KEY || "").trim();
if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(publicUrl) || !key.startsWith("sb_publishable_")) {
  throw new Error("Configure SUPABASE_URL e SUPABASE_PUBLISHABLE_KEY (sb_publishable_) na Vercel.");
}
await writeFile(new URL("./public/config.json", import.meta.url), JSON.stringify({url: publicUrl, key}));
