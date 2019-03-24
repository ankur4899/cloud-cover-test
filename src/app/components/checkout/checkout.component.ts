import {
  Component,
  OnInit
} from '@angular/core';
import {
  MenuListService
} from 'src/app/services/menu-list.service';
import {
  SuccessDialogComponent
} from '../success-dialog/success-dialog.component';
import {
  MatDialog
} from '@angular/material/dialog';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  selectedMenu: Array < any > = [];;
  displayedColumns: string[] = ['itemName', 'itemCount', 'cross', 'price', 'total'];
  constructor(private menuListService: MenuListService, public dialog: MatDialog) {}

  ngOnInit() {
    this.selectedMenu = this.menuListService.getAddedItems();
  }

  /**
   * Returns order total.
   */
  getTotalCost() {
    return this.selectedMenu.map(t => t.itemCount * t.price).reduce((acc, value) => acc + value, 0);
  }

  /**
   * Shows success pop up to user.
   */
  placeOrder() {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '250px',
      data: 'Order Placed Successfully'
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
