import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { SharedRoutingModule } from './shared-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    PageNotFoundComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    PageNotFoundComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
