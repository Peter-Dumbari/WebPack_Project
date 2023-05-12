import Views from './modules/Views.js';
import Database from './modules/Database.js';
import './style.css';

document.addEventListener('DOMContentLoaded', Views.DisplayAllActivities);

document.querySelector('#todo-form').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    Views.AddNewActivity();
  }
});

document.querySelector('#full-list').addEventListener('click', (event) => {
  Database.RemoveActivity(event.target);
  Views.RemoveActivity(event.target);
});

document.querySelector('#full-list').addEventListener('click', (event) => {
  if (event.target.classList.contains('bi-pencil-square')) {
    Views.EdithActivity(event.target);
  }
});

document.querySelector('#full-list').addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && event.target.classList.contains('edit-list')) {
    event.preventDefault();
    Database.UpdateActivity(event.target);
    window.location.reload();
  }
});
