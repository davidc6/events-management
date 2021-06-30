import { useEffect, useState } from 'react'
import FormDialog from '../modal';
import { Header } from '../header';
import { Button } from '../button';
import { List } from '../list';
import './app.css';

const API_URL = 'http://localhost:5000'

function App() {
  const [events, setEvents] = useState({})
  const [eventsById, setEventsById] = useState([])
  const [activeEventId, setActiveEventId] = useState(null)
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    fetch(`${API_URL}/events?limit=100`)
      .then(data => data.json())
      .then(data => {        
        if (data.data) {          
          const eventsMap = {}
          const eventsById = data.data.map(event => {
            eventsMap[event.id] = event
            return event.id
          })
          
          setEvents(eventsMap)
          setEventsById(eventsById)
        }
      })

    return () => { setEvents({}) }
  }, [isSaving])
    
  const handleClick = (e) => {    
    const { tagName, dataset } = e.target

    if (tagName === 'LI' && dataset && dataset.id) {
      return setActiveEventId(dataset.id)
    }

    return setActiveEventId('0')    
  }
  
  const handleFormBtnClick = () => {
    if (isDialogOpen === true) {
      return setDialogOpen(false)
    }
    
    setDialogOpen(true)
  }
  
  const handleFormSaveBtnClick = (values) => {  
    handleFormBtnClick()
    setIsSaving(true)  
      
    fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    .then(res => res.json())
    .then(data => {
      setIsSaving(false)
    })
    .catch((error) => {
      console.log(error)
      setIsSaving(false)
    });
  }
  
  return (
    <div className="App" onClick={handleClick}>
      <Header />
      <div className="App-body">
        <Button onClick={handleFormBtnClick} />
        <List eventIds={eventsById} events={events} activeEventId={activeEventId} />
      </div>
      <FormDialog open={isDialogOpen} handleClose={handleFormBtnClick} handleSubmit={handleFormSaveBtnClick} />
    </div>
  );
}

export default App;
