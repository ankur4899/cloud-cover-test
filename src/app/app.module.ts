import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    HeaderComponent,
    CheckoutComponent,
    SuccessDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[SuccessDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
