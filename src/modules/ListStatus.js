import DatabaseClass from './Database.js';

class ListStatus {
  static completedStatusChecker = (element) => {
    const allActivities = DatabaseClass.getAllActivities();
    const checkedValue = element.checked;
    const list = element.parentElement;
    const todoList = document.getElementById('full-list');
    const id = Array.prototype.indexOf.call(todoList.children, list);

    allActivities.forEach((activity) => {
      if (activity.index === id) {
        activity.completed = checkedValue;
        list.childNodes[1].classList.toggle('completed');
      }
    });

    localStorage.setItem('todoTask', JSON.stringify(allActivities));
  };

  static DeleteCompletedActivities = () => {
    let allActivities = DatabaseClass.getAllActivities();
    allActivities = allActivities.filter((item) => !item.completed);
    localStorage.setItem('todoTask', JSON.stringify(allActivities));
  };
}
export default ListStatus;
