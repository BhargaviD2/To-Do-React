import React from 'react'
import ToDoItem from './ToDoItem';
import { ToDo } from '../types';
interface ToDoListProps{
    todos: ToDo[];
    toggleComplete: (id:number)=>void;
    deleteTodo: (id:number)=>void;

}
const ToDoList: React.FC<ToDoListProps> =  ({todos,toggleComplete,deleteTodo})=>{
    return(
        <ul>
            {todos.map(todo=>(
                <ToDoItem
                  key={todo.id}
                  todo= {todo}
                  toggleComplete={toggleComplete}
                  deleteTodo= {deleteTodo}
                />
            ))}
        </ul>
    );
};
export default ToDoList;

 