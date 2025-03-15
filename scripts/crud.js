document.addEventListener("DOMContentLoaded", function () {
    const createBtn = document.getElementById('create-btn');
    const taskInput = document.getElementById('task-input');
    const tasksContainer = document.getElementById('tasks-container');

    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasksContainer.innerHTML = '';
    
    storedTasks.forEach(task => addTaskItem(task));
    
    function addTaskItem (task) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const taskContent = document.createElement('p');
        taskContent.classList.add('task-content');
        taskContent.textContent = task;

        const buttons = document.createElement('div');
        buttons.classList.add('buttons-container');

        const updateBtn = document.createElement('button');
        updateBtn.classList.add('update-btn');
        updateBtn.textContent = 'Update';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        buttons.append(updateBtn, deleteBtn);
        taskItem.append(taskContent, buttons);
        tasksContainer.append(taskItem);
    }

    createBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (taskInput.value.trim() === '') return;

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        tasks.push(taskInput.value);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        addTaskItem(taskInput.value);
        taskInput.value = '';
    });

    tasksContainer.addEventListener('click', e => {
        if (e.target.classList.contains('delete-btn')) {
            const taskItem = e.target.closest('.task-item');
            const taskItems = document.querySelectorAll('.task-item');
            const index = Array.from(taskItems).indexOf(taskItem);

            const tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            taskItem.remove();
        }

        if (e.target.classList.contains('update-btn')) {
            const taskItem = e.target.closest('.task-item');
            const taskItems = document.querySelectorAll('.task-item');
            const index = Array.from(taskItems).indexOf(taskItem);
            const taskContent = taskItem.querySelector('p');

            const updatedTask = prompt("Update your task: ", taskContent.textContent);

            if (updatedTask != null && updatedTask.trim() !== '') {
                const tasks = JSON.parse(localStorage.getItem('tasks'));
                tasks[index] = updatedTask;
                localStorage.setItem('tasks', JSON.stringify(tasks));

                taskContent.textContent = updatedTask;
            }
        }
    });

    let errorTimeout;

    function handleInvalidChar(e) {
        const input = e.target;
        const rx = /^[\w\sÀ-ÖØ-öø-ÿ.,!?'"^*+/=(){|}\[\]\\:;~&@#%\$-]+$/;
        const errorOutput = document.getElementById('error-message');

        if (input.value && !rx.test(input.value)) {
            console.log("error detected");
            const invalidChar = [...input.value].find(char => !new RegExp(rx).test(char));
            
            errorOutput.textContent = `Invalid character '${invalidChar}' detected.`;
            errorOutput.classList.remove('hidden');

            input.value = input.value.replace(invalidChar, '');

            clearTimeout(errorTimeout);

            errorTimeout = setTimeout(() => {
                errorOutput.classList.add('hidden');
            }, 1500);
        }
    }

    taskInput.addEventListener('input', handleInvalidChar);
});
