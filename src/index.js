import './style.css';

const activities = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete the To Do list project',
    completed: true,
    index: 2,
  },
];

function renderTodoList() {
  const todoList = document.querySelector('.full-list');
  activities.sort((a, b) => a.index - b.index);
  todoList.innerHTML = activities
    .map(
      (task) => `<li class="todo-item ${task.completed ? 'completed' : ''}">
          <input type="checkbox" ${task.completed ? 'checked' : ''}>
          <span>${task.description}</span>
          <hr class="todo-hr">
        </li>`,
    )
    .join('');
}

renderTodoList();
