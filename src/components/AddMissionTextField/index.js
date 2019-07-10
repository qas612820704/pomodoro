import React from 'react';
import { FontIcon } from 'react-md';
import './index.scss';

function AddMissionTextField() {
  return (
    <div className="add-mission-text-field">
      <input
        className="add-mission-text-field__input md-paper md-paper--0 md-paper--0-hover"
        placeholder="ADD A NEW MISSION..."
      />
      <FontIcon className="add-mission-text-field__icon">add</FontIcon>
    </div>
  );
}

export default AddMissionTextField;
