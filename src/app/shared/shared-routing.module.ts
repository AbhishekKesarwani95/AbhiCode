import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    
      {
        path:'admin',
        loadChildren:()=>import('../admin/admin.module').then(m=>m.AdminModule)
      },
      {
        path:'customer',
        loadChildren:()=>import('../customer/customer.module').then(m=>m.CustomerModule)
      },
      {
        path:'**',
        component:PageNotFoundComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
