let taskList = document.getElementById('task-list');

function addTask() {
    let newTask = document.getElementById('new-task').value;
    if (newTask) {
        let li = document.createElement('li');
        let taskText = document.createElement('input');
        taskText.type = 'text';
        taskText.value = newTask;
        taskText.setAttribute('readonly', true);
        taskText.addEventListener('dblclick', function() {
            taskText.removeAttribute('readonly');
        });
        taskText.addEventListener('blur', function() {
            taskText.setAttribute('readonly', true);
        });

        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.onclick = function() {
            taskText.removeAttribute('readonly');
            taskText.focus();
        };

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        let completeButton = document.createElement('button');
        completeButton.innerText = 'Complete';
        completeButton.onclick = function() {
            li.classList.toggle('completed');
            if (li.classList.contains('completed')) {
                startConfetti();
                setTimeout(stopConfetti, 3000);
            }
        };

        li.appendChild(taskText);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(completeButton);

        taskList.appendChild(li);
        document.getElementById('new-task').value = '';
    }
}

// Confetti code
const confettiSettings = { target: 'confetti' };
const confetti = new ConfettiGenerator(confettiSettings);

function startConfetti() {
    confetti.render();
}

function stopConfetti() {
    confetti.clear();
}
