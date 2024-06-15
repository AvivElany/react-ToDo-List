import { ChangeEvent, FormEvent, useState } from 'react'
import "./TextBox.css"

interface ITextBoxProps {
  fnAddTask: (newTask: string) => void
}

export default function TextBox(props:ITextBoxProps) {

  const [taskInput, setTaskInput] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // // Form submit will refresh the page by default - so if we want to prevent the default behavior we need to do
    // "preventDefault"
    event.preventDefault();
    props.fnAddTask(taskInput);
    setTaskInput("");
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskInput(event.target.value);
  }
  
  return (
    // Form submit will refresh the page by default
    <form className="submitForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add New Task" onChange={handleInputChange} value={taskInput}/><br></br><br></br>
      <button type="submit" disabled={taskInput.length === 0}>Add</button>
      
    </form>
  )

}

