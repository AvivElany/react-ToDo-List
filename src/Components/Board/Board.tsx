import RenderTask from '../RenderTask/RenderTask'
import { tasks } from '../../data/Tasks'
import './Board.css'
import TextBox from '../TextBox/TextBox'
import { useState } from 'react'
import ITasks from '../../data/Tasks'

export default function Board() {

    const[tasksList, setTasksList] = useState(tasks);

    function addTask(taskTitle: string):void{
        const newTask: ITasks = {
            id:String(tasksList.length + 1),
            title:taskTitle,
            done: false,
        }
        setTasksList([...tasksList, newTask]);
    }

    return (
        <div className='Board'>
            <h1 className='title'>ToDo List</h1>
            <RenderTask tasksArrey={tasksList} />
            <TextBox fnAddTask={addTask}/>
        </div>
    )
}
