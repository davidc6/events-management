import { expect } from "chai"
import sinon from "sinon"

import EventsModel from "../../../../src/domain/events/model"
import { EventsController } from "../../../../src/domain/events/controller"
import rawEvents from "./raw-events.json"

describe("EventsController", () => {
  describe("getAllEvents()", () => {
    let getAllEventsStub: any = null
    let ctx: any = null

    beforeEach(() => {
      getAllEventsStub = sinon.stub().resolves(rawEvents)
      const mockService = {
        getAllEvents: getAllEventsStub,
      }

      ctx = {
        service: mockService,
        model: EventsModel,
      }
    })

    it("sets the default limit if limit is not passed in", async () => {
      const controller = EventsController(ctx)
      await controller.getAll()

      expect(getAllEventsStub.calledOnce).to.be.true
      expect(
        getAllEventsStub.firstCall.firstArg
      ).to.deep.equal({ limit: "5" })
    })

    it("sets the limit if limit is passed in", async () => {
      const controller = EventsController(ctx)
      await controller.getAll({ limit: "1" })

      expect(getAllEventsStub.calledOnce).to.be.true
      expect(
        getAllEventsStub.firstCall.firstArg
      ).to.deep.equal({ limit: "1" })
    })

    it("returns transformed / modelled response by removing not needed data", async () => {
      const getAllEventsOneItemStub = sinon
        .stub()
        .resolves([rawEvents[0]])
      const modifiedCtx = {
        ...ctx,
        service: { getAllEvents: getAllEventsOneItemStub },
      }
      const controller = EventsController(modifiedCtx)
      const res = await controller.getAll()

      expect(res).to.deep.equal({
        data: [
          {
            id: "1",
            name: "One",
            description: "Desc 1",
            date: "21-04-2020",
          },
        ],
      })
    })
  })
})
