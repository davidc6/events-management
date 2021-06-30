import http from "http"
import { normalizePort, onListen, onError } from "./utils"
import createApp from "../index"
import { setupDb } from "../db/db"

const init = () => {
  try {
    const db = setupDb()
    const app = createApp(db)
    const PORT = normalizePort(process.env.PORT || "5000")

    const server = http.createServer(app)
    server.listen(PORT)
    server.on("listening", onListen(server))
    server.on("error", onError(PORT))
  } catch (e) {
    console.log(e.message)
  }
}

init()
