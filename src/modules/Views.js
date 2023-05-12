import DatabaseClass from './Database.js';
import Todoclass from './Todoclass.js';

class Views {
  static DisplayAllActivities = () => {
    const tasks = DatabaseClass.getAllActivities();
    tasks.forEach((activity) => Views.AddToList(activity));
  };

  static AddNewActivity = () => {
    const inputActivity = document.querySelector('#input-list').value;

    if (inputActivity !== '') {
      const newActivity = new Todoclass(inputActivity);

      Views.AddToList(newActivity);

      DatabaseClass.AddToDB(newActivity);

      Views.clearFields();
    }
  };

  static AddToList = (activity) => {
    const list = document.querySelector('#full-list');

    const l1 = document.createElement('li');

    const checkedBok = document.createElement('input');
    checkedBok.type = 'checkbox';
    checkedBok.classList.add('checkbox');
    if (activity.completed) {
      checkedBok.checked = true;
    }

    const spanelement = document.createElement('span');
    spanelement.textContent = activity.description;

    const editButton = document.createElement('span');
    editButton.classList.add('editIcon');
    editButton.innerHTML = '<i class="bi bi-pencil-square"></i>';

    const deleteButton = document.createElement('span');
    deleteButton.classList.add('deleteIcon');
    deleteButton.innerHTML = '<i class="bi bi-trash3-fill"></i>';

    l1.appendChild(checkedBok);
    l1.appendChild(spanelement);
    l1.appendChild(editButton);
    l1.appendChild(deleteButton);

    if (activity.completed) {
      l1.childNodes[1].classList.add('completed');
    }

    list.appendChild(l1);
  };

  static EdithActivity = (element) => {
    const mainValue = element.parentElement.parentElement.childNodes[1].textContent;
    const editForm = document.createElement('form');
    editForm.id = 'todo-form';
    element.parentElement.parentElement.childNodes[1].innerHTML = `

    <form id="edit-form">
        <input type="text" class="edit-list no-outline" value="${mainValue}">
    </form>

    `;

    element.parentElement.parentElement.classList.add('highlight');

    if (element.classList.contains('bi-trash3-fill')) {
      element.parentElement.parentElement.remove();
    }
  };

  static RemoveActivity = (element) => {
    if (element.classList.contains('bi-trash3-fill')) {
      element.parentElement.parentElement.remove();
    }
  };

  // clear all function
  static clearFields = () => {
    document.querySelector('#input-list').value = '';
  };
}
export default Views;
