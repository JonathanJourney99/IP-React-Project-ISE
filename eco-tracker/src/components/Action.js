// src/components/Action.js
import React from 'react';

const Action = ({ action, onDelete }) => {
  return (
    <li>
      {action.name} - Total CO2 Reduction: {action.co2Reduction * action.count} kg
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Action;
