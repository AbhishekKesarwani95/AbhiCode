import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { unSavedChangesGuard } from './un-saved-changes.guard';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    canDeactivate:[unSavedChangesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
