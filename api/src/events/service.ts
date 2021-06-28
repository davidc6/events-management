import { Event, RawData } from "./types"
import { DbType } from "../db/db"

export type EventsServiceType = {
  getAllEvents: () => any
  getEventById: (id: string) => Promise<RawData>
  createEvent: (data: Event) => void
}

export const EventsService = (db: DbType) => {
  const getAllEvents = async () => {
    // TODO: swap 5 with a param
    const result = await db.query(
      "SELECT * FROM event LIMIT 5"
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

  const createEvent = async (data: any): Promise<void> => {
    const q = `INSERT INTO event (name, description, date) VALUES ($1, $2, $3)`

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
