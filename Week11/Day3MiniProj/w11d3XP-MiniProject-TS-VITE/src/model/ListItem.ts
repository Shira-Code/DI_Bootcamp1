import { v4 as uuidv4 } from 'uuid';

export interface IListItem {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements IListItem {
  constructor(
    public id: string = uuidv4(),
    public item: string,
    public checked: boolean = false
  ) {}
}

