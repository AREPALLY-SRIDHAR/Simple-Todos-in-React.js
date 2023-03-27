import './index.css'

const TodoItem = props => {
  const {TodoList, deletetodo} = props

  const {unique, title} = TodoList

  const Sub = () => {
    deletetodo(unique)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={Sub}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
