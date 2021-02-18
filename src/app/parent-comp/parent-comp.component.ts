import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  data;
  
  constructor(private service:DataService) {

  this.data = service.getObject();
   }


   
  ngOnInit(): void {

    
  }

}
