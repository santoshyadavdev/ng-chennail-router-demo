import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'products', component: ProductsComponent,
    canActivate: [ AuthGuard ],
    canActivateChild: [AuthGuard],
    data: {
      title: 'Product List'
    },
    children: [
      {
        path: ':id', component : ProductDetailsComponent
      }
    ]
  },

  {
    path: 'employee',
    canLoad: [AuthGuard],
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing : true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
