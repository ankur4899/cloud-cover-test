import { Component, OnInit } from '@angular/core';
import { MenuListService } from 'src/app/services/menu-list.service';
import { Router } from '@angular/router';
import { UpdatePriceComponent } from '../update-price/update-price.component';
import { MatDialog } from '@angular/material/dialog';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  menuList: any = [];
  displayedColumns: string[] = ['id', 'itemName', 'price', 'action'];
  constructor(private menuListService: MenuListService, private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    let menuList = localStorage.getItem('menuList');
    if (!isNullOrUndefined(menuList)) {
      this.menuList = JSON.parse(menuList);
    } else {
      this.getMenuList();
    }
  }

/**
 * Get menu list
 */
  getMenuList() {
    this.menuListService.getMenuItems().subscribe((data: any) => {
      this.menuList = data.menuList;
    });
  }

  /**
   * 
   * @param item Update price of item
   */
  updatePrice(item) {
    const dialogRef = this.dialog.open(UpdatePriceComponent, {
      width: '250px',
      data: { item: item }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!isNullOrUndefined(result)) {
        item.price = result;
        localStorage.setItem('menuList', JSON.stringify(this.menuList));
      }
    });
  }

  /**
   * Navigate to menu list
   */
  goToMenuList() {
    this.router.navigate(['/']);
  }
}
