import React from 'react';
import { Button, FontIcon } from 'react-md';
import AddMissionTextField from '../../components/AddMissionTextField';
import Todos from '../../components/Todos';
import './index.scss';

function DashboardPage() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="dashboard-left">
          <AddMissionTextField />
          <div className="working-block">
            <div className="circle working-block--circle" />
            <p className="working-block--text">
              <p className="working-block--text--title">THE FIRST THING TO DO TODAY</p>
              <p className="working-block--text--timing"><div className="circle"></div></p>
            </p>
          </div>
          <h1 className="timer">25:00</h1>
          <div className="todo-block">
            <Todos />
            <Button flat className="todo-block__more-btn">MORE</Button>
          </div>
        </div>
        <div className="dashboard-center">
          <div className="clock">
            <div className="clock--outline"></div>
            <div className="clock--progess-ring"></div>
            <div className="clock--content">
              <FontIcon className="clock--content--play-btn">play_circle_filled</FontIcon>
            </div>
          </div>
        </div>
        <div className="dashboard-right">
          <div className="right-menu">
            <FontIcon>list</FontIcon>
            <FontIcon>insert_chart</FontIcon>
            <FontIcon>library_music</FontIcon>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;
