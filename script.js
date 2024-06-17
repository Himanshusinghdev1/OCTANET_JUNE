document.getElementById('todo-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const taskInput = document.getElementById('task-input');
  const prioritySelect = document.getElementById('priority-select');
  const dueDateInput = document.getElementById('due-date-input');
  const categorySelect = document.getElementById('category-select');

  const task = taskInput.value;
  const priority = prioritySelect.value;
  const dueDate = dueDateInput.value;
  const category = categorySelect.value;

  addTask(task, priority, dueDate, category);

  taskInput.value = '';
  prioritySelect.value = 'Medium';
  dueDateInput.value = '';
  categorySelect.value = 'Work';
});

function addTask(task, priority, dueDate, category) {
  const taskList = document.getElementById('task-list');

  const li = document.createElement('li');
  li.classList.add(`priority-${priority.toLowerCase()}`);

  const taskText = document.createElement('span');
  taskText.textContent = `${task} [${category}] - Due: ${dueDate}`;

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', () => {
      li.classList.toggle('completed');
      moveTask(li);
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
  });

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskText);
  li.appendChild(actions);

  taskList.appendChild(li);
}

function moveTask(taskElement) {
  const taskList = document.getElementById('task-list');
  if (taskElement.classList.contains('completed')) {
      taskList.appendChild(taskElement);
  } else {
      taskList.insertBefore(taskElement, taskList.firstChild);
  }
}
