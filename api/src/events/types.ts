export type Event = {
  id: string
  name: string
  date: string
}

export type RawData = Event & { [key: string]: string }
