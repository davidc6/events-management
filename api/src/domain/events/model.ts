import { Event, RawData } from "./types"
import format from "date-fns/format"

const toJSON = (
  data: RawData | undefined
): Event | null => {
  if (!data) return null
  if (!Object.keys(data).length) return null

  return {
    id: data && data.id ? String(data.id) : "",
    name: data?.name ?? "",
    description: data?.description ?? "",
    date:
      data && data.date
        ? format(new Date(data.date), "dd-MM-yyyy")
        : "",
  }
}

const toDb = (data: Event) => {
  // id is currently auto-generated by the database
  return {
    name: data?.name ?? "",
    description: data?.description ?? "",
    date: data?.date ?? "",
  }
}

const listAllEvents = (data: RawData[]) => {
  return data
    .map((rawEvent) => {
      return toJSON(rawEvent)
    })
    .filter((item) => item !== null) as Event[]
}

export default { toJSON, listAllEvents, toDb }
