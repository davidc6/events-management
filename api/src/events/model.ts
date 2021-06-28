import { Event, RawData } from "./types"

export const toJSON = (data: RawData): Event => {
  return {
    id: data.id,
    name: data.name,
    date: data.date,
  }
}

export const listAllEvents = (data: RawData[]): Event[] => {
  return data.map((rawEvent) => {
    return toJSON(rawEvent)
  })
}

export default { toJSON, listAllEvents }
