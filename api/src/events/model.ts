import { Event, RawData } from "./types"
import format from "date-fns/format"

export const toJSON = (data: RawData): Event => {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    date: format(new Date(data.date), "dd-MM-yyyy"),
  }
}

export const listAllEvents = (data: RawData[]): Event[] => {
  return data.map((rawEvent) => {
    return toJSON(rawEvent)
  })
}

export default { toJSON, listAllEvents }
