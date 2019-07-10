import React from 'react';
import cn from 'classnames';
import { FontIcon } from 'react-md';
import './index.scss';

function Todos({ className }) {

  return (
    <div className={cn('todo-list', className)}>
      <div className="todo-list__item">
        <span className="todo-list__item__circle circle"></span>
        <span className="todo-list__item__text">THE SECOND THING TO DO TODAY</span>
        <FontIcon className="todo-list__item__play-icon">play_circle_outline</FontIcon>
      </div>
      <div className="todo-list__item">
        <span className="todo-list__item__circle circle"></span>
        <span className="todo-list__item__text">THE THIRD THING TO DO TODAY</span>
        <FontIcon className="todo-list__item__play-icon">play_circle_outline</FontIcon>
      </div>
      <div className="todo-list__item">
        <span className="todo-list__item__circle circle"></span>
        <span className="todo-list__item__text">THE THIRD THING TO DO TODAY</span>
        <FontIcon className="todo-list__item__play-icon">play_circle_outline</FontIcon>
      </div>
    </div>
  )
}

export default Todos;
