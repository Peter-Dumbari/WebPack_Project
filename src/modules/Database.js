class DatabaseClass {
  static getAllActivities = () => {
    let ActivityList;
    if (localStorage.getItem('todoTask') === null) {
      ActivityList = [];
    } else {
      ActivityList = JSON.parse(localStorage.getItem('todoTask'));
    }

    return ActivityList;
  };

  static UpdateActivity = (activity) => {
    const currentUpdate = activity.value;
    const allActivities = DatabaseClass.getAllActivities();
    const list = activity.parentElement.parentElement.parentElement;
    const todoList = document.getElementById('full-list');
    const id = Array.prototype.indexOf.call(todoList.children, list);

    allActivities.forEach((activity) => {
      if (activity.index === id) {
        activity.description = currentUpdate;
      }
    });

    localStorage.setItem('todoTask', JSON.stringify(allActivities));
  };

  static AddToDB = (activity) => {
    const newTask = DatabaseClass.getAllActivities();
    activity.index = newTask.length + 1;
    newTask.push(activity);
    localStorage.setItem('todoTask', JSON.stringify(newTask));
  };

  static RemoveActivity = (activity) => {
    const allActivities = DatabaseClass.getAllActivities();
    const list = activity.parentElement.parentElement;
    const todoList = document.getElementById('full-list');
    const id = Array.prototype.indexOf.call(todoList.children, list);

    allActivities.forEach((todo, i) => {
      if (todo.index === id && activity.classList.contains('bi-trash3-fill')) {
        allActivities.splice(i, 1);
      }
    });

    allActivities.forEach((todo, i) => {
      todo.index = i + 1;
    });

    localStorage.setItem('todoTask', JSON.stringify(allActivities));
  };
}

export default DatabaseClass;
