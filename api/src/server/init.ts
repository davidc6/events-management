import http from "http"
import app from "../index"
import { normalizePort, onListen, onError } from "./utils"

const init = () => {
  try {
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
