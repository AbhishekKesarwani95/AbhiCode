import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    
      {
        path:'admin',
        loadChildren:()=>import('../admin/admin.module').then(m=>m.AdminModule)
      },
      {
        path:'customer',
        loadChildren:()=>import('../customer/customer.module').then(m=>m.CustomerModule)
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
