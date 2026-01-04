import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle("postgres://postgres:admin@localhost:5432/my_first_pg_crud");

export default db;
