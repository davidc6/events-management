import { Pool, QueryResult } from "pg"
import "dotenv/config"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  query_timeout: 3000,
})

export const setupDb = () => {
  const query = (
    q: string,
    params?: string[]
  ): Promise<QueryResult> => pool.query(q, params)

  return {
    getAll: async (table: string, limit: string) => {
      const results = await query(
        `SELECT * FROM ${table} ORDER BY date DESC LIMIT $1`,
        [limit]
      )

      return results.rows
    },
    getOne: async (table: string, id: string) => {
      const result = await query(
        `SELECT * FROM ${table} WHERE id = $1`,
        [id]
      )

      return result.rows[0]
    },
    createOne: async (table: string, data: any) => {
      const columns: any[] = []
      const params: any[] = []
      const values: any[] = []

      let i = 1
      for (const [key, value] of data.entries()) {
        columns.push(key)
        params.push(`$${i}`)
        values.push(value)
        i++
      }

      const q = `INSERT INTO ${table} (${columns.join(
        ", "
      )}) VALUES (${params.join(", ")}) RETURNING id`

      const result = await query(q, values)

      return result.rows[0].id
    },
  }
}
