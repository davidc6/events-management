import { Event } from "./types"

const TABLE = "event"

export const EventsService = (db: any) => {
  const getAllEvents = async ({
    limit,
  }: {
    limit: string
  }) => {
    const result = await db.getAll(TABLE, limit)
    return result
  }

  const getEventById = async (id: string) => {
    const result = await db.getOne(TABLE, id)
    return result
  }

  const createEvent = async (data: Event) => {
    const result = await db.createOne(TABLE, data)

    return { id: result.id }
  }

  return {
    getAllEvents,
    getEventById,
    createEvent,
  }
}
