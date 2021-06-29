import { Pool, QueryResult } from "pg"
import "dotenv/config"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  query_timeout: 3000,
})

export type DbType = {
  query: (
    q: string,
    params?: string[]
  ) => Promise<QueryResult>
}

export const setupDb = () => {
  return {
    query: (
      q: string,
      params?: string[]
    ): Promise<QueryResult> => pool.query(q, params),
  }
}
