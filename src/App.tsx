import React, { useState } from 'react';
import './App.css';
import Todolist, { TaskType } from './components/Todolist';

function App() {
  const task1:Array<TaskType> = [
    {id: 1, title: 'CSS && HTML', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'React', isDone: false},
  ]

  const [filter, setFilter] = useState(task1)

  const filteredTask = (id:number) => {
    const deletedtask = task1.filter(el => el.id !== id)
    setFilter(deletedtask)
  }

  return (
    <div className="App">
      <Todolist title={'What to learn'} task={task1} filteredTask={filteredTask}/>
      
    </div>
  );
}

export default App;
