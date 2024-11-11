import React from 'react'
import { ToDo } from '../types'
interface ToDoItemProps{
   todo: ToDo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const  ToDoItem: React.FC<ToDoItemProps>   = ({todo,toggleComplete,deleteTodo}) => {
  return (
   <li>
       <span
       style={{
         textDecoration: todo.completed ? 'line-through' : 'none'
       }}
       onClick={() => toggleComplete(todo.id)}>
     
       {todo.text}
     </span>
     <button onClick={() => deleteTodo(todo.id)}>Delete</button>
   
   </li>
  )
}

export default ToDoItem;   