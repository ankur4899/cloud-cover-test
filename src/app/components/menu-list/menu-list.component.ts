import { Component, OnInit } from '@angular/core';
import { MenuListService } from 'src/app/services/menu-list.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  
  menuList:any = [];
  displayedColumns: string[] = ['id', 'itemName', 'price', 'action'];
  isItemSelected = false;
  addedItems: any = [];
  constructor(private menuListService:MenuListService,
    private router: Router) { }

  ngOnInit() {
    this.addedItems = this.menuListService.getAddedItems();
    let menuList = localStorage.getItem('menuList');
    if(!isNullOrUndefined(menuList)){
          this.menuList = JSON.parse(menuList);
          this.updateMenuList(this.addedItems);
    }else{
      this.getMenuList();
    }
    
  }
  
  /**
   * Get menu list
   */
  getMenuList(){
    this.menuListService.getMenuItems().subscribe((data:any)=>{
      this.menuList = data.menuList;
      this.updateMenuList(this.addedItems);
    });
  }

  /**
   * Update menulist as per selected items
   * @param addedItemList 
   */
  updateMenuList(addedItemList){
    if(addedItemList && addedItemList.length>0){
      for(let i=0;i<this.menuList.length;i++){
         for(let j=0;j<addedItemList.length;j++){
           if(this.menuList[i].id === addedItemList[j].id){
             this.menuList[i].itemCount = addedItemList[j].itemCount;
           }
         }
      }
    }
  }

  /**
   * Increase count of item in bucket by 1
   * @param item 
   */
  addMenuItem(item){
    item.itemCount = item.itemCount+1;
    this.checkItemInList(item);
  }
  
  /**
   * Add or update item in list
   * @param item 
   */
  checkItemInList(item){
    let obj = this.filterList(item);
     if(obj && obj.length==0){
       this.menuListService.setItems(item);
     }else{
       obj[0].itemCount = item.itemCount;
     }
  }
  
  /**
   * Set item count for selected item
   * @param item 
   */
  setItemCount(item){
    let obj = this.filterList(item);
    if(obj && obj.length>0){
      obj[0].itemCount = item.itemCount;
    }
  }

  /**
   * Getting selected item data
   * @param item 
   */
  filterList(item):Array<any>{
    this.addedItems = this.menuListService.getAddedItems();
    return this.addedItems.filter((element) => element.id === item.id);
  }
 
  /**
   * Remove item from bucket
   * @param item 
   */
  removeData(item){
      this.addedItems = this.addedItems.filter((element) => item.id !==element.id);
      this.menuListService.setSelectedItems(this.addedItems);
  }

  /**
   * Decrease count of item in bucket by 1
   * @param item 
   */
  removeMenuItem(item,index){
    item.itemCount = item.itemCount>0?item.itemCount - 1:0;
    item.itemCount>0? this.setItemCount(item):this.removeData(item);
   
  }
  
  /**
   * Navigate to checkout page
   */
  checkOut(){
    this.router.navigate(['/checkout']);
  }


}
