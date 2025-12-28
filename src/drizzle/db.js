import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema.js";
export const db = drizzle("postgresql://neondb_owner:npg_bsNkzHr8wF0o@ep-wispy-waterfall-a12xjuo5-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require", {
  schema: schema,
});

// npx drizzle-kit generate
// npx drizzle-kit migrate
