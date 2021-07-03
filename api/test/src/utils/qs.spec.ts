import { expect } from "chai"
import { getLimit, getId } from "../../../src/utils/qs"

describe("qs util", () => {
  describe("getLimit()", () => {
    it("returns valid limit if valid limit is passed in", () => {
      const res = getLimit({ limit: "4" })
      expect(res).to.equal("4")
    })

    it("returns default limit if incorrect format is passed in", () => {
      const res = getLimit({ limit: ["4"] })
      expect(res).to.equal("5")
    })

    it("returns default limit if negative number is passed in", () => {
      const res = getLimit({ limit: "-1" })
      expect(res).to.equal("5")
    })
  })

  describe("getId()", () => {
    it("returns value if valid id is passed in", () => {
      const res = getId("1")
      expect(res).to.equal("1")
    })

    it("throws error if invalid id is passed in", () => {
      try {
        getId(["1"] as any) // for testing purposes only
      } catch (e) {
        expect(e.message).to.equal(
          "You must provide a valid event id"
        )
      }
    })
  })
})
