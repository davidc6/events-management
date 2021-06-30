import request from "supertest"
import createApp from "../src/index"
import sinon from "sinon"
import { expect } from "chai"

describe("App integration", () => {
  let queryStub: any;
  let db: any;
  let app: any;
  
  const setUp = (rows: any) => {
    queryStub = sinon.stub().resolves({ rows })
    db = {
      query: queryStub,
    }
    app = createApp(db)
  }
  
  describe("GET /events", () => {
    it('returns 200', async () => {
      setUp([])
      await request(app).get("/events").expect(200)
    })
    
    it('dispatches valid SQL', async () => {
      setUp([])
      await request(app).get("/events")
      
      expect(queryStub.calledOnce).to.be.true
      expect(queryStub.firstCall.args).to.deep.equal(['SELECT * FROM event ORDER BY date DESC LIMIT $1', [ '5' ]])
    })
  })

  describe("GET /events/:id", () => {
    it("returns 200", async () => {
      setUp([{ id: "1", name: "One", date: "01-01-2020" }])
      await request(app).get("/events/1").expect(200)
    })
    
    it("dispatches valid SQL", async () => {
      setUp([{ id: "1", name: "One", date: "01-01-2020" }])
      await request(app).get("/events/1")
  
      expect(queryStub.calledOnce).to.be.true
      expect(queryStub.firstCall.args).to.deep.equal(['SELECT * FROM event WHERE id = $1', [ '1' ]])
    })
  })
  
  describe("POST /events", () => {
    const data = { name: 'Event two', description: 'This is second event', date: '2020-04-21T00:05:04.600Z' }

    it("returns 201", async () => {
      setUp([])
      await request(app)
        .post("/events")
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
    })
    
    it("dispatches valid SQL", async () => {
      setUp([])
      await request(app)
        .post("/events")
        .send(data)
        .set('Accept', 'application/json')
        
      expect(queryStub.calledOnce).to.be.true
      expect(queryStub.firstCall.args)
        .to
        .deep
        .equal([
          'INSERT INTO event (name, description, date) VALUES ($1, $2, $3)',
          [ 'Event two', 'This is second event', '2020-04-21T00:05:04.600Z' ]
        ])
    })
  })
})
