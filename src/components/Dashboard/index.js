import React from 'react';
import { Button, FontIcon } from 'react-md';
import './index.scss';

function Dashboard() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="dashboard-left">
          <div className="add-mission-field">
            <input className="add-mission-field--input md-paper md-paper--0 md-paper--0-hover" placeholder="ADD A NEW MISSION..." />
            <FontIcon className="add-mission-field--icon">add</FontIcon>
          </div>
          <div className="working-block">
            <div className="circle working-block--circle" />
            <p className="working-block--text">
              <p className="working-block--text--title">THE FIRST THING TO DO TODAY</p>
              <p className="working-block--text--timing"><div className="circle"></div></p>
            </p>
          </div>
          <h1 className="timer">25:00</h1>
          <div className="todo-block">
            <div className="todo-list">
              <div className="todo-item">
                <span className="todo-item--circle circle"></span>
                <span className="todo-item--text">THE SECOND THING TO DO TODAY</span>
                <FontIcon className="todo-item--play-icon">play_circle_outline</FontIcon>
              </div>
              <div className="todo-item">
                <span className="todo-item--circle circle"></span>
                <span className="todo-item--text">THE THIRD THING TO DO TODAY</span>
                <FontIcon className="todo-item--play-icon">play_circle_outline</FontIcon>
              </div>
              <div className="todo-item">
                <span className="todo-item--circle circle"></span>
                <span className="todo-item--text">THE THIRD THING TO DO TODAY</span>
                <FontIcon className="todo-item--play-icon">play_circle_outline</FontIcon>
              </div>
            </div>
            <Button flat className="todo-block--more-btn">MORE</Button>
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

export default Dashboard;
