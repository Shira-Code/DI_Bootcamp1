Daily Challenge : Form Container
Last Updated: September 22nd, 2023

What You will learn :
JSX
Components
React State
Forms


Instructions : React Form Container
image

Check the demo

In this challenge you will process Form data as the user enters or selects any option of the given form.

In the App.js You will create a stateful component with props.

Create a function named handleChange:
that retrieves the event.target of the inputs.
and checks the status of the checkboxes (ie. “checked” or not). Use a ternary operator.

Render a FormComponent that displays the form, and the value of the inputs.

Expected Output:





4. On submit you will pass the entered data in the URL. This should be the output in the url:

http://localhost:3000/?firstName=John&lastName=Doe&age=25&gender=male&destination=Japan&lactoseFree=on 