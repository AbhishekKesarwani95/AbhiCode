import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {profileData, Profile} from '../../shared/data';
import { FormControl, FormGroup } from '@angular/forms';
import {MatSort, Sort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddPopupComponent } from '../add-popup/add-popup.component';

@Component({
  selector: 'app-admin',  
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements AfterViewInit{
  profiles:Profile[]=profileData;
  profileForm:FormGroup;
  isLoading:boolean=false;

  editingProfileId: number | null = null;

  isEditing:boolean=false;

  displayedColumn:string[]=['id','name','email','age','actions'];
  dataSource:any;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog){
    this.profileForm=new FormGroup({
      id:new FormControl(''),
      name:new FormControl(''),
      email:new FormControl(''),
      age:new FormControl('')
    });

    
    
  }

  openPopup(){
    const dialogRef=this.dialog.open(AddPopupComponent);
    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.addProfile(res);
      }
    })
  }

  
  

  ngAfterViewInit(){
    this.fetchData();
    
  }

  async fetchData(){
    this.isLoading=true;
    await new Promise(resolve=>{
      setTimeout(resolve,2000)
    });
    this.isLoading=false;
    this.dataSource=new MatTableDataSource<Profile>(profileData);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    
  }

  
  addProfile(res:any){
    let id=this.profiles.length+1;
    res.id=id;    
    this.profiles.push(res);
    this.profileForm.reset();
  }

  editProfile(row:any){    
    const dialogRef=this.dialog.open(AddPopupComponent,{data:row});
    dialogRef.afterClosed().subscribe(res=>{
      if(res){        
        console.log(res);
        const index = this.profiles.findIndex(profile => profile.id === res.id);
        this.profiles[index] = { ...this.profiles[index], ...res };  
        this.dataSource.data=[...this.profiles];      
        
      }
    })
  }

  deleteProfile(row:any){
    this.profiles = this.profiles.filter(profile => profile.id !== row.id);
    this.dataSource.data=[...this.profiles];

  }
  

  




  
}
