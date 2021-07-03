import { RawData, Event } from "./types"
import { DbType } from "../../db/db"

export type EventsServiceType = {
  getAllEvents: (params: { limit: string }) => Promise<any>
  getEventById: (id: string) => Promise<RawData>
  createEvent: (data: Event) => Promise<any>
}

export const EventsService = (db: DbType) => {
  const getAllEvents = async ({
    limit,
  }: {
    limit: string
  }) => {
    const result = await db.query(
      "SELECT * FROM event ORDER BY date DESC LIMIT $1",
      [limit]
    )
    return result.rows
  }

  const getEventById = async (id: string) => {
    const result = await db.query(
      "SELECT * FROM event WHERE id = $1",
      [id]
    )

    return result.rows[0]
  }

  const createEvent = async (data: any) => {
    const q =
      "INSERT INTO event (name, description, date) VALUES ($1, $2, $3) RETURNING id"

    const result = await db.query(q, [
      data.name,
      data.description,
      data.date,
    ])

    return result.rows[0]
  }

  return {
    getAllEvents,
    getEventById,
    createEvent,
  }
}
