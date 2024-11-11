// src/components/ActionList.js
import React from 'react';

const ActionList = ({ ecoActions, onAddAction }) => {
  return (
    <div className="action-list">
      <h2>Eco-Friendly Actions</h2>
      {ecoActions.map(action => (
        <div key={action.id} className="action-item">
          <span>{action.name} (Reduces {action.co2Reduction} kg CO₂)</span>
          <button onClick={() => onAddAction(action)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default ActionList;
