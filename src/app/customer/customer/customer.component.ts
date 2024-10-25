import { Component } from '@angular/core';
import {data} from '../../shared/data';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  profiles:any=data;

}
