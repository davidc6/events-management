import { MainCTX } from "../events/context"

export const MainController = (ctx: MainCTX) => {
  const { logger } = ctx

  const getAll = (): any => {
    logger.log("Main controller - getAll()")

    return {
      all_events: "/events",
      event: "/events/{id}",
    }
  }

  return {
    getAll,
  }
}
