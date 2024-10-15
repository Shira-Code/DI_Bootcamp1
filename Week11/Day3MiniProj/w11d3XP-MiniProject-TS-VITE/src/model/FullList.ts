import ListItem from './ListItem';

export default class FullList {
  static instance: FullList = new FullList();

  private constructor(
    private list: ListItem[] = []
  ) {}

  addItem(item: ListItem) {
    this.list.push(item);
    this.save();
  }

  removeItem(id: string) {
    this.list = this.list.filter(item => item.id !== id);
    this.save();
  }

  getList(): ListItem[] {
    return this.list;
  }

  clearList() {
    this.list = [];
    this.save();
  }

  save() {
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  load() {
    const storedList = localStorage.getItem('todoList');
    if (storedList) {
      this.list = JSON.parse(storedList) as ListItem[];
    }
  }
}
