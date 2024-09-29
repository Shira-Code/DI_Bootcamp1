Instructions
1. App Component:

Create the App component with a count state starting at 0.
Add a setCount function to update the count.
Pass count and setCount as props to child components.
Display Component:

2. Create Display to show the current count.
Inside it, add ShowCounter, which receives count as a prop and displays it.

Action Component:

3. Create Action to hold a Button component.
The Button will have an onClick handler that calls setCount to increase the count.

App - setState
App - setState - count, setCount
 |_ Display
         |_ ShowCouter - count
 |_ Action
         |_Button - => add
