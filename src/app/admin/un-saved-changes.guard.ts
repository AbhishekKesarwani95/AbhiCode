import { CanDeactivateFn } from '@angular/router';
import { AddPopupComponent } from './add-popup/add-popup.component';

export const unSavedChangesGuard: CanDeactivateFn<any> = (component:AddPopupComponent) => {

  if(component.profileForm.dirty){
    return confirm("Data is being added. Are you sure want to leave?")
  }
  
  return true;
};
