import {  AfterViewInit, Component, ViewChild } from '@angular/core';
import {profileData, Profile} from '../../shared/data';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements AfterViewInit{
  profiles:any=profileData;
  sortedData: Profile[];
  isLoading:boolean=false;

  displayedColumn:string[]=['id','name','email','age'];
  dataSource:any;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(){
    this.sortedData = this.profiles.slice();
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
}