import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';

const routes: Routes = [

{path:''  , component:HomeComponent},
{
    path:'parent'  , 
    component:ParentCompComponent,
    children:[

      {path:':name',component:ChildComponent   },

    ]
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
