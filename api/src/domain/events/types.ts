export type Event = {
  id?: string // optional since we don't send / generate ids on POST
  name: string
  description: string
  date: string
}

export type RawData = Event & { [key: string]: string }
