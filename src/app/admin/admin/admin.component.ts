import { Component } from '@angular/core';
import {data, Profile} from '../../shared/data';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin',  
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  profiles:Profile[]=data;
  profileForm:FormGroup;
  editingProfileId: number | null = null;
  constructor(){
    this.profileForm=new FormGroup({
      id:new FormControl(''),
      name:new FormControl(''),
      email:new FormControl(''),
      age:new FormControl(''),
      Intermediate:new FormControl('')
    })
  }
  
  addProfile(){
    let id=this.profiles.length+1;
    this.profileForm.value.id=id;
    const newProfile: Profile = {      
      ...this.profileForm.value
    };
    this.profiles.push(newProfile);
    this.profileForm.reset();
  }

  editProfile(id:number){
    const profile = this.profiles.find(p => p.id === id);
    if (profile) {
      this.editingProfileId = id;
      this.profileForm.patchValue({
        name: profile.name,
        age: profile.age,
        email: profile.email
      });
    }
  }

  updateProfile(){
    if (this.editingProfileId !== null) {
      const index = this.profiles.findIndex(profile => profile.id === this.editingProfileId);
      if (index !== -1) {
        if(this.profileForm.value.id=="" || this.profileForm.value.id==null){
          this.profileForm.value.id=this.editingProfileId;
        }
        this.profiles[index] = { ...this.profiles[index], ...this.profileForm.value };        
        this.profileForm.reset();
      }
    }
  }

  deleteProfile(id:number){
    this.profiles = this.profiles.filter(profile => profile.id !== id);
  }




  
}
