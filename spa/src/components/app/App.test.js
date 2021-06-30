import { render, screen, fireEvent, waitFor, findByTestId, act } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import App from './';

describe('<Heading />', () => {
  test('gets rendered', () => {
    render(<App />);
    const headingElement = screen.getByText(/Events Management/i);
    expect(headingElement).toBeInTheDocument();
  })
})

describe('<App />', () => {
  const server = setupServer(
    rest.get('http://localhost:5000/events', (req, res, ctx) => {
      return res(ctx.json({ 
        data: [
            { id: '1', name: 'Event One', description: 'This is the first event', date: '01-01-2021' },
            { id: '2', name: 'Event Two', description: 'This is the second event', date: '02-01-2021' },
            { id: '3', name: 'Event Three', description: 'This is the third event', date: '03-01-2021' },
          ]
      }))
    })
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  
  test('renders the list', async () => {
    render(<App />)
    
    await waitFor(() => screen.getByRole('list'))

    const list = screen.getByRole('list')
    
    expect(list).toBeInTheDocument()
    expect(list.children).toHaveLength(3)
  })
  
  test('expands a list item and provides a description', async () => {
    render(<App />)
    
    await waitFor(() => screen.getByRole('list'))

    const list = screen.getByRole('list')
    list.firstChild.click()

    const desc = screen.getByText(/This is the first event/)
    
    expect(desc).toBeInTheDocument()
  })
  
  test('opens a modal', async () => {
    render(<App />)

    const addBtn = screen.getByRole('button')
    addBtn.click()

    const modal = screen.getByRole('presentation')

    expect(modal).toBeInTheDocument()
  })
})
