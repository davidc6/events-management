import { expect } from "chai"
import EventsModel from "../../../../src/domain/events/model"

describe("Events model", () => {
  describe("toJSON()", () => {
    it("returns transformed response by removing unneeded properties from event object", () => {
      const actual = EventsModel.toJSON({
        id: "1",
        name: "One",
        description: "Tihs is one",
        date: "2020-04-21T00:05:04.600Z",
        someOtherProp: "some other prop",
      })
      const expected = {
        id: "1",
        name: "One",
        description: "Tihs is one",
        date: "21-04-2020",
      }
      expect(actual).to.deep.equal(expected)
    })

    it("returns null if nothing gets passed in", () => {
      const actual = EventsModel.toJSON(undefined)
      expect(actual).to.be.null
    })
  })
})
