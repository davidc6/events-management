export type Event = {
  id?: string // optional since we don't send on POST
  name: string
  description: string
  date: string
}

export type RawData = Event & { [key: string]: string }
