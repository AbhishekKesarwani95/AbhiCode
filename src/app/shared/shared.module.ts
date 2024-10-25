import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent

  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ]
})
export class SharedModule { }
