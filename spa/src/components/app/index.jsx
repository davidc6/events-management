import { useState } from 'react'
import FormDialog from '../modal'
import { Header } from '../header'
import { Button } from '../button'
import { List } from '../list'
import { postEvent } from '../services/postEvent'
import './app.css'

const API_URL = 'http://localhost:5000'

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const handleForm = () => {
    return setDialogOpen(!isDialogOpen)
  }

  const handleFormSaveBtnClick = (data) => {  
    handleForm()
    postEvent(`${API_URL}/events`, data)
  }

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Button onClick={handleForm} />
        <List />
      </div>
      <FormDialog
        open={isDialogOpen}
        handleClose={handleForm}
        handleSubmit={handleFormSaveBtnClick}
      />
    </div>
  )
}

export default App
