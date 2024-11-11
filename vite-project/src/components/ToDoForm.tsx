import React, {useState} from 'react';
interface ToDoFormProps{
    addToDo: (text:string)=>void;
}
const ToDoForm: React.FC<ToDoFormProps> = ({ addToDo }) => {
    const [text, setText] = useState<string>('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!text.trim()) return;
      addToDo(text);
      setText('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a new task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};
export default ToDoForm;
    