document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

const taskItem = document.createElement('li');
taskItem.innerHTML = `
    <span>${taskInput.value} - ${new Date(taskDate.value).toLocaleString()}</span>
    <button onclick="editTask(this)">Edit</button>
    <button onclick="completeTask(this)">✔️</button> <!-- Tick mark button -->
    <button onclick="removeTask(this)">❌</button>
`;

    document.getElementById('taskList').appendChild(taskItem);
    taskInput.value = "";
    taskDate.value = "";
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed'); // Toggle the 'completed' class
}


function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('span').innerText.split(' - ')[0];
    const newTask = prompt("Edit task:", taskText);
    
    if (newTask) {
        taskItem.querySelector('span').innerText = newTask + ' - ' + taskItem.querySelector('span').innerText.split(' - ')[1];
    }
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
