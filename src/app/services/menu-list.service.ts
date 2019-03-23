import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {
  private _jsonURL = 'assets/menu-list.json';
  selectedItems: any = [];
  constructor(private http: HttpClient) {}

  getMenuItems() {
    return this.http.get(this._jsonURL);
  }

  getAddedItems() {
    return this.selectedItems;
  }

  setItems(item) {
    this.selectedItems.push(item);
  }
  setSelectedItems(items) {
    this.selectedItems = items;
  }
}
