import { Event } from "./types"
import { eventsContext } from "./context"
import { Query } from "express-serve-static-core"
import { getLimit, getId } from "../../utils/qs"
import { validateBody } from "../../utils/body"

export const EventsController = (
  ctx: ReturnType<typeof eventsContext>
) => {
  const { service, model } = ctx

  const getAll = async (query?: Query) => {
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
    validateBody(data)

    const newEventToSave = model.toDb(data)
    const newEvent = await service.createEvent(
      newEventToSave
    )

    return {
      data: { id: newEvent.id },
    }
  }

  return {
    getAll,
    getById,
    create,
  }
}
