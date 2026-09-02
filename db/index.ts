import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL;

// فقط في بيئة الإنتاج نتحقق من وجود DATABASE_URL
if (!databaseUrl && process.env.NODE_ENV === "production") {
  console.warn("DATABASE_URL is not set. Database features will be disabled.");
}

const safeDatabaseUrl = databaseUrl || "postgresql://localhost:5432/naqshat";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

export const pool =
  globalForDb.__arenaNextJsPostgresqlPool ??
  new Pool({
    connectionString: safeDatabaseUrl,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.__arenaNextJsPostgresqlPool = pool;
}

export const db = drizzle(pool);
