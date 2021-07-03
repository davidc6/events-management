import Logger from "../../logger/logger"
import { EventsService } from "../events/service"
import EventsModel from "../events/model"
import { EventsController } from "../events/controller"
import { MainController } from "../../domain/main/controller"
import { setupDb } from "../../db/db"

export const eventsContext = (
  db: ReturnType<typeof setupDb>
) => ({
  service: EventsService(db),
  model: EventsModel,
  logger: Logger,
})

const buildEventsController = (
  db: ReturnType<typeof setupDb>
) => {
  return EventsController(eventsContext(db))
}

export const buildCtx = (
  db: ReturnType<typeof setupDb>
) => {
  const forEvents = () => {
    return buildEventsController(db)
  }

  const forMain = () => {
    return MainController()
  }

  return {
    forEvents,
    forMain,
  }
}
