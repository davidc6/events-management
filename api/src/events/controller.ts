import { Event } from "./types"
import { EventsCTX } from "./context"
import { Query } from "express-serve-static-core"
import { getLimit, getId } from "../utils/qs"

export const EventsController = (ctx: EventsCTX) => {
  const { service, model } = ctx

  const getAll = async (query: Query) => {
    const limit = getLimit(query)
    const rawEvents = await service.getAllEvents({
      limit,
    })
    const events = model.listAllEvents(rawEvents)

    return {
      data: events,
    }
  }

  const getById = async (id: string) => {
    const eventId = getId(id)
    const rawEvent = await service.getEventById(eventId)
    const event = model.toJSON(rawEvent)

    return {
      data: event,
    }
  }

  const create = async (data: Event) => {
    // TODO: sanitize & validate data
    const newEvent = model.toDb(data)
    await service.createEvent(newEvent)

    return {}
  }

  return {
    getAll,
    getById,
    create,
  }
}
