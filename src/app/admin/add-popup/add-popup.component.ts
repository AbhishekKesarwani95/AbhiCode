import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA,MatDialogActions,MatDialogContent, } from '@angular/material/dialog';
import { profileData, Profile } from 'src/app/shared/data';
@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrl: './add-popup.component.css'
})
export class AddPopupComponent  implements OnInit{
  profiles:Profile[]=profileData;
  profileForm:FormGroup;
  isEditMode:boolean=false;
  constructor(public dialogRef:MatDialogRef<AddPopupComponent>, @Inject(MAT_DIALOG_DATA) public data:any){

    this.profileForm=new FormGroup({
      id:new FormControl([data?.id ||'']),
      name:new FormControl([data?.name ||'']),
      email:new FormControl([data?.email ||'']),
      age:new FormControl([data?.age ||''])     
    });
  }
  ngOnInit(): void {
      this.isEditMode=!!this.data;
      this.profileForm.valueChanges.subscribe(()=>{
        this.profileForm.markAsDirty();
      });

      if(this.isEditMode){
        this.profileForm.patchValue(this.data);
      }
  }
  onSaveorUpdate(){
    if(this.profileForm.valid){
      if(this.isEditMode){
        
        this.dialogRef.close(this.profileForm.value);
      }
      else{
        this.dialogRef.close(this.profileForm.value);
      }
      
    }
    
  }

  

  onCancel(){
    this.dialogRef.close();
  }

}
