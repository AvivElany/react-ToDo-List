import './RenderTask.css'
import ITasks from '../../data/Tasks'
import Task from '../Task/Task'

interface IRenderTaskProps {
    tasksArrey: ITasks[]
}
export default function RenderTask(props: IRenderTaskProps ) {
    return (
        <ul className='RenderTask'>
            {props.tasksArrey.map((task, index) => 
            <Task task={task} key={index} />
            )
            }
        </ul>
            
    )
}
