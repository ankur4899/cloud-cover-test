import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: MenuListComponent
  }, {
    path: 'checkout',
    component: CheckoutComponent
  }, 
  {
    path: 'admin',
    component: AdminComponent
  }, 
  {
    path: '**',
    component: AppComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }