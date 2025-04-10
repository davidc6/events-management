import { Fragment, useState } from "react"
import { EventsProvider } from "./context"
import { useFetch } from "../../hooks/useFetch"
import "./list.css"

export const List = () => {    
  const [activeEventId, setActiveEventId] = useState(null)

  const response = useFetch("http://localhost:5000/events?limit=100")
  const events = response && response.data
    ? response.data.reduce((total, prev) => ({ ...total, [prev.id]: prev }), {})
    : {}
  const eventIds = Object.keys(events)

  const renderDesc = (id) => {
    return (
      <div className="App-li-desc">
        <p>Description: {events[id].description}</p>
        <p>Date: {events[id].date}</p>
      </div>
    )
  }

  const handleListItemClick = (e) => {    
    const { tagName, dataset } = e.target

    if (tagName === 'LI' && dataset && dataset.id) {
      return setActiveEventId(dataset.id)
    }

    return setActiveEventId('0')    
  }
  
  const shouldRender = () => {
    if (eventIds && eventIds.length) return true
    return false
  }

  if (shouldRender()) {
    return (
      <EventsProvider>
        <ul className="App-ul" onClick={handleListItemClick}>
          {
            eventIds.map((id) => {
              return (
                <Fragment key={id}>
                  <li key={id} className="App-li" data-id={id}>{events[id].name}</li>
                  { activeEventId === id ? renderDesc(id) : '' }
                </Fragment>
              )
            })
          }
      </ul>
    </EventsProvider>
    )
  }

  return null
}
