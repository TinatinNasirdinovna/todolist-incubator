import React from "react";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

export type PropsType = {
  title: string;
  task: Array<TaskType>;
  filteredTask: Function;
};

const Todolist = (props: PropsType) => {
  return (
    <div className="todo">
      <h3>{props.title}</h3>
      <div className="">
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        {props.task.map((el) => (
          <li>
            <input type="checkbox" checked={el.isDone} />
            <span>{el.title}</span>
            <button onClick={() => props.filteredTask(el.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
