import React from 'react';

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

export type PropsType = {
    title: string;
    task: Array<TaskType>;
}

const Todolist = (props: PropsType) => {
    return (
        <div className='todo'>
            <h3>{props.title}</h3>
            <div className="">
                <input type="text" />
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.task[0].isDone}/><span>{props.task[0].title}</span></li>
                <li><input type="checkbox" checked={props.task[1].isDone}/><span>{props.task[1].title}</span></li>
                <li><input type="checkbox" checked={props.task[2].isDone}/><span>{props.task[2].title}</span></li>
            </ul>
        </div>
    );
};

export default Todolist;