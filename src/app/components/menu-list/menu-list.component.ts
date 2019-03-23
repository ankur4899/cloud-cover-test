import { Component, OnInit } from '@angular/core';
import { MenuListService } from 'src/app/services/menu-list.service';
import { Router } from '@angular/router';

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
    this.addedItems = this.menuListService.getAddedItems()
    this.menuListService.getMenuItems().subscribe((data:any)=>{
      console.log("Data",data);
      this.menuList = data.menuList;
    })
  }

  addMenuItem(item){
    item.itemCount = item.itemCount+1;
    this.checkItemInList(item);
  }
  
  checkItemInList(item){
    let obj = this.filterList(item);
     if(obj && obj.length==0){
       this.menuListService.setItems(item);
     }else{
       obj[0].itemCount = item.itemCount;
     }
  }

  removeItemFromList(item){
    let obj = this.filterList(item);
    if(obj && obj.length>0){
      obj[0].itemCount = item.itemCount;
    }
  }

  filterList(item):Array<any>{
    this.addedItems = this.menuListService.getAddedItems();
    return this.addedItems.filter((element) => element.id === item.id);
  }

  removeData(item){
     this.addedItems = this.addedItems.filter((element) => item.id !==element.id);
      this.menuListService.setSelectedItems(this.addedItems);
  }
  removeMenuItem(item,index){
    item.itemCount = item.itemCount>0?item.itemCount - 1:0;
    item.itemCount>0? this.removeItemFromList(item):this.removeData(item);
   
  }
  
  checkOut(){
    this.router.navigate(['/checkout']);
  }


}
