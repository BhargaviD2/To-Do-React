import React,{ useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./types";
import './App.css';
const App: React.FC = ()=>{
    const[todos,setTodos]=useState<ToDo[]>([]);
    const addToDo = (text:string)=>{
      const newTodo:ToDo={
        id:Date.now(),text,completed:false

      }
      setTodos([...todos,newTodo]);
    }
    const toggleComplete= (id:number)=>{
      setTodos(
        todos.map(
          todo=>todo.id===id?{...todo,completed: !todo.completed}:todo
        )
        
      );
    };
    const deleteTodo= (id:number)=>{
        setTodos(todos.filter(todo => todo.id !== id));
    };
    return(
      <div>
        <h1>To - DO List</h1>
        <ToDoForm addToDo={addToDo} />
        <ToDoList todos= {todos} toggleComplete = {toggleComplete} deleteTodo={deleteTodo} />

      </div>
    );

};
export default App;