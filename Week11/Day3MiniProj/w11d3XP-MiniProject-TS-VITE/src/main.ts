import FullList from './model/FullList';
import ListTemplate from './templates/ListTemplate';
import ListItem from './model/ListItem';
import './style.css';

const fullList = FullList.instance;
const listTemplate = ListTemplate.instance;

const form = document.getElementById('itemEntryForm') as HTMLFormElement;
const input = document.getElementById('newItem') as HTMLInputElement;
const clearButton = document.getElementById('clearItemsButton') as HTMLButtonElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const newItem = new ListItem(input.value, input.value, false);
  fullList.addItem(newItem);
  input.value = '';
  listTemplate.renderList(fullList);
});

clearButton.addEventListener('click', () => {
  fullList.clearList();
  listTemplate.renderList(fullList);
});

window.addEventListener('DOMContentLoaded', () => {
  fullList.load();
  listTemplate.renderList(fullList);
});
