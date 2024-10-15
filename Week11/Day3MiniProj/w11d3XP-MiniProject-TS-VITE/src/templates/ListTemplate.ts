import FullList from '../model/FullList';

export default class ListTemplate {
  static instance: ListTemplate = new ListTemplate();

  private ul: HTMLUListElement;

  private constructor() {
    this.ul = document.getElementById('listItems') as HTMLUListElement;
  }

  renderList(fullList: FullList) {
    this.ul.innerHTML = '';
    fullList.getList().forEach(item => {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = item.checked;
      checkbox.addEventListener('change', () => {
        item.checked = checkbox.checked;
        fullList.save();
      });

      const label = document.createElement('label');
      label.textContent = item.item;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click', () => {
        fullList.removeItem(item.id);
        this.renderList(fullList);
      });

      li.append(checkbox, label, deleteButton);
      this.ul.append(li);
    });
  }
}
