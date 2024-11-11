# Create React App

User Story: As an eco-conscious user, I want to track my daily eco-friendly actions and
visualize their impact on reducing carbon emissions.
Acceptance Criteria:
● App Component:
○ Maintains a list of eco-friendly actions with name, carbon reduction, and
count.
○ Renders ActionList and ImpactSummary components.
○ Passes necessary data and event handlers to child components as props.
● ActionList Component:
○ Displays a list of predefined eco-friendly actions with "Add" buttons.
○ Sends action details to the App component when an "Add" button is clicked.
○ Includes a list of actions with their estimated CO2 reduction value per action.
● ImpactSummary Component:
○ Displays the total carbon reduction achieved.
○ Lists each tracked action with its count and total CO2 reduction.
○ Includes a "Clear" button to clear all actions.
○ Uses props to receive the list of actions and total carbon reduction
calculation(think array of objects).

● Action Component:
○ Displays each tracked action with its name, and total CO2 reduction.
○ Includes “Delete” buttons.
● Conditional Rendering:
○ Displays a default message if no actions are tracked.
● Functional Requirements:
○ Track Action: Adds a new action to the list
○ Clear: Resets all tracked actions.
○ Remove Action: Removes a tracked action.
● Bonus:
○ Data Persistence: Saves tracked actions using localStorage.
○ Additional Info: Displays a message about the environmental impact of the
total CO2 reduction. (e.g., "You've saved the equivalent of X trees planted!",
consider 10kg of CO2 saved = 1 tree planted).
○ Highlight the impact message in different colours based on the CO2 saved as:
Red if CO2 saved is < 0.5kg
Orange if CO2 saved is > 0.5kg AND < 1kg
Green if CO2 saved is > 1kg

Example Data :
const ecoActions = [
{ id: 1, name: "Use a reusable water bottle", co2Reduction: 0.5 },
{ id: 2, name: "Take public transport", co2Reduction: 2.6 },
{ id: 3, name: "Eat a plant-based meal", co2Reduction: 0.8 },
{ id: 4, name: "Use energy-efficient light bulbs", co2Reduction: 0.1 },
{ id: 5, name: "Recycle paper", co2Reduction: 0.2 },
]