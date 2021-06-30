import { Fragment } from "react"
import "./list.css"

export const List = ({ eventIds, events, activeEventId }) => {
  const renderDesc = (id) => {
    return (
      <div className="App-li-desc">
        <p>Description: {events[id].description}</p>
        <p>Date: {events[id].date}</p>
      </div>
    )
  }
  
  return (
    <ul className="App-ul">
    {
      eventIds.map((id) => {
        return (
          <Fragment key={id}>
            <li key={id} className="App-li" data-id={id}>{events[id].name}</li>
            {activeEventId === id ? renderDesc(id) : ''}
          </Fragment>
        )
      })
    }
  </ul>
  )
}
