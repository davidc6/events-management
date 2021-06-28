import { Event } from "./types"
import { EventsCTX } from "./context"

export const EventsController = (ctx: EventsCTX) => {
  const { service, model } = ctx

  const getAll = async () => {
    const rawEvents = await service.getAllEvents()
    const events = model.listAllEvents(rawEvents)

    return {
      data: events,
    }
  }

  const getById = async (id: string) => {
    // TODO: validate id
    const rawEvent = await service.getEventById(id)
    const event = model.toJSON(rawEvent)

    return {
      data: event,
    }
  }

  const create = (data: Event) => {
    // TODO: validate data
    const newEvent = model.toJSON(data)
    service.createEvent(newEvent)

    return {}
  }

  return {
    getAll,
    getById,
    create,
  }
}
