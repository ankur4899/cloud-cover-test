import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.css']
})
export class UpdatePriceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpdatePriceComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {}
}
