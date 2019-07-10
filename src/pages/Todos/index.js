import React from 'react';
import { FontIcon } from 'react-md';
import AddMissionTextField from '../../components/AddMissionTextField';
import Todos from '../../components/Todos';
import './index.scss';

function TodosPage() {
  return (
    <div className="container-wrapper">
      <div className="container secondary-background three-columes">
        <div className="three-columes__left">
          <div className="text-menu">
            <div className="text-menu__item text-menu__item--active">
              <FontIcon>list</FontIcon>
              <span>TO-DO LIST</span>
            </div>
            <div className="text-menu__item">
              <FontIcon>insert_chart</FontIcon>
              <span>ANALYTICS</span>
            </div>
            <div className="text-menu__item">
              <FontIcon>library_music</FontIcon>
              <span>RINGTONES</span>
            </div>
          </div>
        </div>
        <div className="three-columes__center">
          <AddMissionTextField />
          <div className="todos-block">
            <details className="todos-block__details" open>
              <summary>TO-DOs</summary>
              <Todos className="todo-list--text-white" />
            </details>
          </div>
          <div className="todos-block">
            <details className="todos-block__details">
              <summary>DONEs</summary>
              <Todos className="todos-bloc__contents todo-list--text-white" />
            </details>
          </div>
        </div>
        <div className="bottom">
          <div className="half-clock">
            <div className="half-clock__play-btn">
              <div className="half-clock__play-btn__content">
                <FontIcon>play_arrow</FontIcon>
              </div>
            </div>
            <div className="half-clock__title">25:00</div>
            <p className="half-clock__content">THE FIRST THING TO DO TODAY</p>
          </div>
        </div>
        <div className="three-columes__right">
          <ul className="vertical-menu">
            <li><FontIcon>clear</FontIcon></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodosPage;
