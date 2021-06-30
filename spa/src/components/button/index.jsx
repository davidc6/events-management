import "./button.css"

export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="App-btn-add">Add New</button>
  )
}
