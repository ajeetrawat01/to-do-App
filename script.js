 const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if(taskText === '') {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        li.addEventListener('click', () => {
            li.classList.toggle('done');
        });

        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }