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
  const todoList = document.querySelector('.list_container');
  activities.sort((a, b) => a.index - b.index);
  todoList.innerHTML = ` <div class="main-list">
  <div class="item-container">
      <div>
          <div class="today-content white-height">
              <span class="heading">Today's To Do list</span>
              <i class="fas fa-sync"></i>
          </div>
          <form class="add-new white-height">
              <input class="no-outline" maxlength="128" id="new-item" type="text"
                  placeholder="Add to your list ..." />
              <i class="fas fa-level-down-alt"></i>
          </form>
          <div class="full-list">
${activities
    .map(
      (task) => `<li class="todo-item ${task.completed ? 'completed' : ''}">
          <input type="checkbox" ${task.completed ? 'checked' : ''}>
          <span>${task.description}</span>
          <hr class="todo-hr">
        </li>`,
    )
    .join('')}
          </div>
      </div>
  </div>
  <div class="clear">
      <a href="#" title="clear all" id="clear-text">Clear all completed</a>
  </div>
</div>`;
}

renderTodoList();
