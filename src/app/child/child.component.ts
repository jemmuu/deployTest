import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})




export class ChildComponent implements OnInit {

  data;
  tempData: any;
  pname: any;

  constructor(service: DataService, private route: ActivatedRoute) {

    this.data = service.getObject();
    

  }

  ngOnInit() {

    

  }
  //index;
  onload()
  {
    this.pname = this.route.snapshot.paramMap.get('name');
    console.log(this.pname);

    this.getData();
  }

  interval()
  {


  }
  getData() {
    for (let datak of this.data) {




      if (datak.name == this.pname) {
        this.tempData = datak;

      }
    }



  }
}


