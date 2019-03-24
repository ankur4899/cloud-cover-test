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

  /**
   * Fetch Menu items
   */
  getMenuItems() {
    return this.http.get(this._jsonURL);
  }
 
  /**
   * Get item added in bucket
   */
  getAddedItems() {
    return this.selectedItems;
  }
 
  /**
   * Set items in bucket
   * @param item 
   */
  setItems(item) {
    this.selectedItems.push(item);
  }
  
  /**
   * Update items in bucket
   * @param items 
   */
  setSelectedItems(items) {
    this.selectedItems = items;
  }
}
