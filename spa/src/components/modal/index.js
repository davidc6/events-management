import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function FormDialog({ open, handleClose, handleSubmit }) {
  const [formValues, setFormValues] = useState({ name: '', description: '', date: new Date('2014-08-18T21:11:54') })
  
  const onNameChange = (e) => {
    setFormValues({
      ...formValues,
      name: e.target.value
    })
  }
  
  const onDescChange = (e) => {
    setFormValues({
      ...formValues,
      description: e.target.value
    })
  }
  
  const onDateChange = (val) => {
    if (val === 'Invalid Date') return
    setFormValues({
      ...formValues,
      date: new Date(val).toJSON()
    })
  }
  
  const handleAdd = () => {
    handleSubmit(formValues)
  }
  
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new event</DialogTitle>
        <DialogContent>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={formValues.date}
            onChange={onDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
          <TextField
            autoFocus
            onChange={onNameChange}
            margin="dense"
            id="name"
            label="Event name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={onDescChange}
            margin="dense"
            id="description"
            label="Event description"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
