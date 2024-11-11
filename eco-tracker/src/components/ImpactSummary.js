import React from 'react';

const ImpactSummary = ({ actions, onClearActions, onRemoveAction }) => {
  const totalCo2Reduction = actions.reduce((total, action) => total + (action.co2Reduction * action.count), 0);
  const totalTreesPlanted = Math.round(totalCo2Reduction / 5.3); // Assuming 1 tree reduces 5.3kg of CO2

  return (
    <div className="impact-summary">
      <h2>Impact Summary</h2>
      <ul>
        {actions.map(action => (
          <li key={action.id}>
            {action.name} - {action.count}x ({(action.co2Reduction * action.count).toFixed(2)} kg CO2 reduced)
            <button onClick={() => onRemoveAction(action.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Total CO2 Reduction: {totalCo2Reduction.toFixed(2)} kg</p>
        <p>Equivalent Trees Planted: {totalTreesPlanted} 🌳</p>
      </div>
      <button className="clear-button" onClick={onClearActions}>Clear All Actions</button>
    </div>
  );
};

export default ImpactSummary;
