import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/drizzle/migratetion",

  schema: "./src/drizzle/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    // url: "postgersql://postgres:123@localhost:5432/pharmacy",
    url:"postgresql://neondb_owner:npg_bsNkzHr8wF0o@ep-wispy-waterfall-a12xjuo5-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
  },
});
