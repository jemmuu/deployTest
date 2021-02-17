import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { PointAComponent } from './point-a/point-a.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { globalErrorHandler } from './common/global-error-handler';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentCompComponent,
    ChildComponent,
    PointAComponent,
    HttpTestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({

      positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    resetTimeoutOnDuplicate : true,
    countDuplicates : true
    }),
  ],
  providers: [{provide : ErrorHandler , useClass : globalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
