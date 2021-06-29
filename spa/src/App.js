import { useEffect, useState, Fragment } from 'react'
import FormDialog from './components/modal';
import './App.css';

function App() {
  const [events, setEvents] = useState([])
  const [eventsById, setEventsById] = useState([])
  const [activeEvent, setActiveEvent] = useState(null)
  const [isDialogOpen, setDialogOpen] = useState(false)
  
  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then(data => data.json())
      .then(data => {
        const eventsMap = {}
        const eventsById = data.data.map(event => {
          eventsMap[event.id] = event
          return event.id
        })
        
        setEvents(eventsMap)
        setEventsById(eventsById)
      })
  }, [])
    
  const handleBodyClick = (e) => {    
    const { tagName, dataset } = e.target
        
    if (tagName === 'LI' && dataset && dataset.id) {
      return setActiveEvent(dataset.id)
    }

    setActiveEvent('0')    
  }
  
  const renderHeader = () => {
    return (
      <header className="App-header">
        <p>Event Management</p>
      </header>
    )
  }
  
  const renderDesc = (id) => {
    return (
      <div className="App-li-desc">
        <p>Description: {events[id].description}</p>
        <p>Date: {events[id].date}</p>
      </div>
    )
  }
  
  const handleOnAdd = () => {
    if (isDialogOpen === true) {
      return setDialogOpen(false)
    }
    
    setDialogOpen(true)
  }
  
  const handleSave = (values) => {  
    handleOnAdd()  
  }

  const renderAddButton = () => {
    return (
      <button onClick={handleOnAdd} className="App-btn-add">Add New</button>
    )
  }
  
  return (
    <div className="App" onClick={handleBodyClick}>
      {renderHeader()}
      <div className="App-body">
        {renderAddButton()}
        <ul className="App-ul">
          {
            eventsById.map((id) => {
              return (
                <Fragment key={id}>
                  <li key={id} className="App-li" data-id={id}>{events[id].name}</li>
                  {activeEvent === id ? renderDesc(id) : ''}
                </Fragment>
              )
            })
          }
        </ul>
      </div>
      <FormDialog open={isDialogOpen} handleClose={handleOnAdd} handleSubmit={handleSave} />
    </div>
  );
}

export default App;
