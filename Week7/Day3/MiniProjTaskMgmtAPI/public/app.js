document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    // Fetch all tasks on page load
    fetchTasks();

    // Handle form submission to add a new task
    taskForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-desc').value;

        if (title && description) {
            await createTask({ title, description });

            taskForm.reset(); // Clear the form
            fetchTasks(); // Refresh the task list
        }
    });

    // Fetch all tasks from the API
    async function fetchTasks() {
        const response = await fetch('/tasks');
        const tasks = await response.json();
        renderTasks(tasks);
    }

    // Render tasks in the list
    function renderTasks(tasks) {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span><strong>${task.title}</strong>: ${task.description}</span>
                <div class="task-actions">
                    <button onclick="deleteTask(${task.id})">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }

    // Create a new task
    async function createTask(task) {
        await fetch('/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
        });
    }

    // Delete a task by ID
    window.deleteTask = async function (id) {
        await fetch(`/tasks/${id}`, {
            method: 'DELETE',
        });
        fetchTasks(); // Refresh the task list
    };
});
