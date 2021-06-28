export type Event = {
  id: string
  name: string
  description: string
  date: string
}

export type RawData = Event & { [key: string]: string }
