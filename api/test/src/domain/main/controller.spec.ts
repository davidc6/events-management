import { expect } from "chai"
import { MainController } from "../../../../src/domain/main/controller"

describe("MainController", () => {
  describe("getAll()", () => {
    it("returns available endpoints", () => {
      const c = MainController()
      const res = c.getAll()

      const expected = {
        all_events: "/events",
        event: "/events/{id}",
      }

      expect(res).to.deep.equal(expected)
    })
  })
})
