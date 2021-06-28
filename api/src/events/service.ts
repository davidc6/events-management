import { Event, RawData } from "./types"
import { DbType } from "../db/db"

export type EventsServiceType = {
  getAllEvents: () => Promise<RawData[]>
  getEventById: (id: string) => Promise<RawData>
  createEvent: (data: Event) => void
}

export const EventsService = (db: DbType) => {
  const getAllEvents = async (): Promise<RawData[]> => {
    return await db.getAll()
  }

  const getEventById = async (
    id: string
  ): Promise<RawData> => {
    return await db.getById(id)
  }

  const createEvent = async (data: any): Promise<void> => {
    return await db.create(data)
  }

  return {
    getAllEvents,
    getEventById,
    createEvent,
  }
}
