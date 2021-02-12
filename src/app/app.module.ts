import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { PointAComponent } from './point-a/point-a.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentCompComponent,
    ChildComponent,
    PointAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
