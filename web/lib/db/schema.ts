import {
  pgTableCreator,
  timestamp,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

const createTable = pgTableCreator((name) => `hack_tx_${name}`);

const getCreatedAtColumn = () => timestamp("created_at").defaultNow().notNull();
const getUpdatedAtColumn = () =>
  timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => sql`current_timestamp`)
    .notNull();
