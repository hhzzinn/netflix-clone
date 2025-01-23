import { useState, useEffect } from "react"
import TodoForm from "./TodoForm"

const TodoItem = ({ todo, todos, setTodos }) => {
  // const { todo, todos, setTodos }  = props
  const [edit, setEdit] = useState(false)
  const editHandler = () => {
    setEdit((prev) => !prev)
  }

  useEffect(() => {
    console.log({ edit })
  }, [edit])
  return (
    <li>
      {!edit ? (
        <button onClick={editHandler}>{todo}</button>
      ) : (
        <TodoForm todos={todos} setTodos={setTodos} initialTodo={todo} onCancel={editHandler} />
      )}
    </li>
  )
}

export default TodoItem
