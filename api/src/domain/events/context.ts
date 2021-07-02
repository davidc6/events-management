import Logger from "../../logger/logger"
import {
  EventsService,
  EventsServiceType,
} from "../events/service"
import EventsModel from "../events/model"
import { EventsController } from "../events/controller"
import { MainController } from "../../domain/main/controller"
import { DbType } from "../../db/db"

export type EventsCTX = {
  service: EventsServiceType
  model: typeof EventsModel
  logger?: typeof Logger
}

export const buildCtx = (db: DbType) => {
  const forEvents = () => {
    return EventsController({
      service: EventsService(db),
      model: EventsModel,
      logger: Logger,
    })
  }

  const forMain = () => {
    return MainController()
  }

  return {
    forEvents,
    forMain,
  }
}
