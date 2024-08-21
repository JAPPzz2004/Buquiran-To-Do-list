// Select necessary DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearAllButton = document.getElementById('clearAllButton');

// Function to create a new task item
function createTaskItem(taskText) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteButton">Delete</button>
    `;

    // Add event listener for toggling completion
    taskItem.addEventListener('click', function () {
        taskItem.classList.toggle('completed');
    });

    // Add event listener for deleting task
    taskItem.querySelector('.deleteButton').addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click event from triggering completion toggle
        taskItem.remove();
    });

    return taskItem;
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const newTaskItem = createTaskItem(taskText);
    taskList.appendChild(newTaskItem);
    taskInput.value = ''; // Clear the input field
}

// Event listener for Add button
addTaskButton.addEventListener('click', addTask);

// Event listener for Enter key
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Event listener for Clear All button
clearAllButton.addEventListener('click', function () {
    taskList.innerHTML = '';
});
