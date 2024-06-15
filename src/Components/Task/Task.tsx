import './Task.css'
import ITasks from '../../data/Tasks'
import { useState } from 'react'

interface ITask {
    task: ITasks
}

export default function Task(props: ITask) {

    const [isDone, setIsDone] = useState(props.task.done)


    return (
        <li className="Task">
            <div className={isDone ? "done" : ""} onClick={() => setIsDone(!isDone)} key={props.task.id}>
                {props.task.title}
            </div>
        </li>
    )
}

// אינפוט שבו ניתן לכתוב משימה וע"י לחיצה על הפלוס המשימה תתווסף לרשימה ובלחיצה על המשימה נשנה לה את הסטטוס (והצבע)
