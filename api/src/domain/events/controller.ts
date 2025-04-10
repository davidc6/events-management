import { eventsContext } from "./context"
import { Query } from "express-serve-static-core"
import { getLimit, getId } from "../../utils/qs"
import { validateBody } from "../../utils/body"
import { Request } from "express"

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

  const create = async (body: Request["body"]) => {
    validateBody(body)

    const event = model.toDb(body)
    const newEvent = await service.createEvent(event)

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
