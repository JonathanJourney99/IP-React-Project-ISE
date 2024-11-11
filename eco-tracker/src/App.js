import React, { useState, useEffect } from 'react';
import './App.css';
import ActionList from './components/ActionList';  // Import ActionList
import ImpactSummary from './components/ImpactSummary'; // Import ImpactSummary
import ThemeToggle from './components/ThemeToggle'; // Import ThemeToggle for theme switching

// Eco Actions available
const ecoActions = [
  { id: 1, name: "Use a reusable water bottle", co2Reduction: 0.5 },
  { id: 2, name: "Take public transport", co2Reduction: 2.6 },
  { id: 3, name: "Eat a plant-based meal", co2Reduction: 0.8 },
  { id: 4, name: "Use energy-efficient light bulbs", co2Reduction: 0.1 },
  { id: 5, name: "Recycle paper", co2Reduction: 0.2 },
];

// App Component
function App() {
  const [actions, setActions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to add action
  const addAction = (action) => {
    setActions(prevActions => {
      const existingAction = prevActions.find(a => a.id === action.id);
      
      if (existingAction) {
        return prevActions.map(a =>
          a.id === action.id ? { ...a, count: a.count + 1 } : a
        );
      } else {
        return [...prevActions, { ...action, count: 1 }];
      }
    });
  };

  // Function to remove action
  const removeAction = (id) => {
    setActions(prevActions => prevActions.filter(action => action.id !== id));
  };

  // Function to clear all actions
  const clearActions = () => {
    setActions([]);
  };

  // Toggle dark mode and save preference to localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <header>
        <ThemeToggle 
          toggleTheme={toggleTheme} 
          isDarkMode={isDarkMode} 
          modeText={isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'} // Pass the mode text
        />
        <h1 className="app-header">Eco Tracker</h1>
      </header>

      {/* ActionList component to display available eco actions */}
      <ActionList ecoActions={ecoActions} onAddAction={addAction} />

      {/* ImpactSummary component to display the total CO2 reduction and trees planted */}
      <ImpactSummary
        actions={actions}
        onClearActions={clearActions}
        onRemoveAction={removeAction}
      />
    </div>
  );
}

export default App;
