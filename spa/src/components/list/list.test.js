import { render, screen } from '@testing-library/react';
import { List } from './'

describe('<List />', () => {
  const events = {
    "1": { id: '1', name: 'Event One', description: 'This is event one' },
    "2": { id: '2', name: 'Event Two', description: 'This is event two' }
  }
  const eventsIds = ['1', '2']

  test('gets rendered', () => {
    render(<List events={events} eventIds={eventsIds} />)

    const listComponent = screen.getByRole('list')
    expect(listComponent).toBeInTheDocument()
  })
  
  test('description gets rendered when activeElementId is the same as event id', () => {
    render(<List events={events} eventIds={eventsIds} activeEventId={"2"} />)

    const listComponent = screen.getByText(/Description: This is event two/)
    expect(listComponent).toBeInTheDocument()
  })
})
