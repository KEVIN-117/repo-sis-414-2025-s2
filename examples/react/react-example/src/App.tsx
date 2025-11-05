import React from 'react';
import './App.css'
import type { TaskItemProps } from './components/TaskItem'
import { TaskList } from './components/TaskList'
const TASKS: Array<TaskItemProps> = [
  {
    text: 'Task 1',
    isCompleted: false,
    onComplete: () => { console.log('Task 1 completed') }
  },
  {
    text: 'Task 2',
    isCompleted: true,
    onComplete: () => { console.log('Task 2 completed') }
  },
  {
    text: 'Task 3',
    isCompleted: false,
    onComplete: () => {
      console.log('Task 3 completed')
    }
  }
];

function App() {

  const [tasks, setTasks] = React.useState<Array<TaskItemProps>>(TASKS);

  const onTaskComplete = (index: number) => {
    tasks[index].isCompleted = !tasks[index].isCompleted;
    tasks[index].onComplete();
    setTasks([...tasks]);
  }

  const onTaskAdd = () => {
    const input = document.getElementById('task') as HTMLInputElement;
    const text = input.value;
    if (text === '') return;
    const newTask: TaskItemProps = {
      text,
      isCompleted: false,
      onComplete: () => { console.log(`${text} completed`) }
    };
    setTasks([...tasks, newTask]);
    input.value = '';
  }

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center align-center p-4 mx-auto'>
        <h1 className='text-8xl font-bold text-center mt-20 mb-10'>
          Task Manager Application
        </h1>
        <div className='mb-10 flex justify-center w-full'>
          <input className='flex-1 border-2 border-slate-900' type="text" name="task" id="task" />
          <button className='bg-blue-600 text-white p-2 ml-2 rounded-md' onClick={onTaskAdd} >Add Task</button>
        </div>
        <TaskList tasks={tasks} onTaskComplete={onTaskComplete} />
      </div>
    </div>
  )
}

export default App
