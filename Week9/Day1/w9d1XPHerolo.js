Daily Challenge: Enhanced Task Manager
Last Updated: September 22nd, 2023

Objective: Enhance the Task Manager application by adding new features, including the ability to edit tasks and filter tasks by completion status, using useContext, useReducer, and useRef.

Instructions
Set up a new React project using create-react-app or your preferred method.

Extend the existing Task Manager application (from the previous exercise) by adding the following features:

Edit Tasks: Allow users to edit existing tasks by clicking on them.

Filter Tasks: Implement buttons to filter tasks by completion status (e.g., show all, show completed, show active).

Use useRef to enable task editing and update the task text when the user makes changes.

Implement actions in the reducer for editing tasks and filtering tasks.

Hints:

To enable task editing, you can add an “Edit” button next to each task that, when clicked, activates an input field for editing the task text.

Use a state variable or a ref to track the edited task text before saving.

Implement actions like EDIT_TASK and FILTER_TASKS in the reducer to handle task editing and filtering.

Use conditional rendering to display tasks based on the selected filter.

Example Starter Code:

You can start with the Task Manager code provided in the previous exercise and extend it to include the new features described above.

Feel free to adapt and customize the example code to create your enhanced Task Manager application. This daily challenge will help you practice combining multiple React concepts to build a more complex application.