const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const filePath = path.join(__dirname, '../tasks.json');

// Helper function to read tasks from the file
const readTasks = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

// Helper function to write tasks to the file
const writeTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

// GET /tasks: Retrieve all tasks
router.get('/', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// GET /tasks/:id: Retrieve a task by ID
router.get('/:id', (req, res) => {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
});

// POST /tasks: Create a new task
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

// PUT /tasks/:id: Update a task by ID
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

// DELETE /tasks/:id: Delete a task by ID
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
