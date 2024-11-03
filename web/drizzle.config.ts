import { type Config } from "drizzle-kit";
import "@/env"

export default {
  schema: "./lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  tablesFilter: ["uncle_iroh_*"],
} satisfies Config;
