// Mini Project : Task Management API #1
// Last Updated: September 22nd, 2023

// Create a Task Management API with Express.js and JSON File Storage


// Instructions
// 1. Set up a new Express.js application.
// 2. Implement the following routes using express.Router:

// GET /tasks: Retrieve a list of all tasks from a JSON file.
// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
// POST /tasks: Create a new task and store it in the JSON file.
// PUT /tasks/:id: Update a task by ID in the JSON file.
// DELETE /tasks/:id: Delete a task by ID from the JSON file.
// 3. Create a JSON file (e.g., tasks.json) to store task data. Initialize it with an empty array [].
// 4. Use appropriate validation to ensure the user provides necessary data when creating or updating tasks.
// 5. Implement error handling for file read/write operations and route validation.
// 6. Test your API using tools like Postman or curl.

//tasks.js code below

const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const filePath = path.join(__dirname, '../tasks.json');

const readTasks = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

const writeTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

router.get('/', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

router.get('/:id', (req, res) => {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
});

router.post('/', (req, res) => {
    const tasks = readTasks();
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        completed: false
    };

    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    const { title, description, completed } = req.body;
    if (!title || !description || typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'Invalid data' });
    }

    tasks[taskIndex] = { ...tasks[taskIndex], title, description, completed };
    writeTasks(tasks);
    res.json(tasks[taskIndex]);
});

router.delete('/:id', (req, res) => {
    const tasks = readTasks();
    const filteredTasks = tasks.filter(t => t.id !== parseInt(req.params.id));

    if (tasks.length === filteredTasks.length) {
        return res.status(404).json({ message: 'Task not found' });
    }

    writeTasks(filteredTasks);
    res.json({ message: 'Task deleted' });
});

module.exports = router;

//SERVER.JS code for express server below

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const router = require('./routes/tasks'); 

app.use(express.json()); 
app.use('/tasks', router); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


//TASKS.JSON file w/updates from postman from testing/verification
[
  {
    "id": 1,
    "title": "Complete project documentation",
    "description": "Finish writing the technical documentation for the project",
    "completed": false
  },
  {
    "id": 2,
    "title": "Fix bug in login page",
    "description": "Resolve the issue with user authentication on the login page",
    "completed": false
  },
  {
    "id": 3,
    "title": "Update database schema",
    "description": "Add new fields to the user table in the database",
    "completed": false
  },
  {
    "id": 4,
    "title": "Design new homepage layout",
    "description": "Create a new layout for the homepage based on the latest design guidelines",
    "completed": false
  },
  {
    "id": 5,
    "title": "Title PUT  VIA PostmanSchedule team meeting",
    "description": "DESCRIPTION PUT Via Postman Organize a meeting with the project team to discuss milestones",
    "status": "to-do",
    "completed": false
  },
  {
    "id": 6,
    "title": "TITLE NEW TASK VIA POSTMAN POST",
    "description": "DESCRIPTION NEW TASK VIA POSTMAN POSt",
    "completed": false
  }
]
