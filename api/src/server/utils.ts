import http from "http"

const normalizePort = (port: string): number => {
  const parsedPort = parseInt(port, 10)

  if (parsedPort >= 0) {
    return parsedPort
  }

  throw new Error("Port has to be a valid number")
}

const onListen = (server: http.Server) => (): void => {
  const addr = server.address()
  const bind =
    addr !== null
      ? typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port
      : ""

  console.log("Server running on " + bind)
}

const onError =
  (port: number) =>
  (e: NodeJS.ErrnoException): void => {
    if (e.syscall !== "listen") {
      throw e
    }

    const bind =
      typeof port === "string"
        ? "Pipe " + port
        : "Port " + port

    switch (e.code) {
      case "EACCES":
        console.error(
          `${bind} requires elevated privileges`
        )
        process.exit(1)
      case "EADDRINUSE":
        console.error(`${bind} is already in use`)
        process.exit(1)
      default:
        throw e
    }
  }

export { normalizePort, onListen, onError }
