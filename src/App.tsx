import React, { useState } from 'react';
import './App.css';
import Todolist, { TaskType } from './components/Todolist';

function App() {
 

  let [filter, setFilter] = useState<Array<TaskType>>([
    {id: 1, title: 'CSS && HTML', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'React', isDone: false},
  ])

  const filteredTask = (id:number) => {
    filter = filter.filter(el => el.id !== id)
    setFilter(filter)
  }

  return (
    <div className="App">
      <Todolist title={'What to learn'} task={filter} filteredTask={filteredTask}/>
      
    </div>
  );
}

export default App;
