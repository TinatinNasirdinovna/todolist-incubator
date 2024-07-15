import React from 'react';
import './App.css';
import Todolist, { TaskType } from './components/Todolist';

function App() {
  const task1:Array<TaskType> = [
    {id: 1, title: 'CSS && HTML', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'React', isDone: false},
  ]

  const task2 = [
    {id: 1, title: 'Terminator', isDone: true},
    {id: 2, title: 'XXX', isDone: true},
    {id: 3, title: 'Jentlmens of fortuna', isDone: false},
  ]

  return (
    <div className="App">
      <Todolist title={'What to learn'} task={task1}/>
      <Todolist title={'Movie'} task={task2}/>
    </div>
  );
}

export default App;
