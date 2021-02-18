import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})




export class ChildComponent {

   data : any;
  tempData: any;
  pname: any;

  constructor(private service: DataService, private route: ActivatedRoute) {

    


  }

  ngOnInit() {

    
    this.route.paramMap
      .subscribe(param => {
        let id: number = Number(param.get('id'));
        console.log(id);
        this.data = this.service.getObject();
        for (let datak of this.data) {
          if (datak.id == id) {
            this.tempData = datak;
            console.log(this.tempData);

          }};
        });





  }
  //index;



  getData(id: number) {
    for (let datak of this.data) {




      if (datak.id == id) {
        this.tempData = datak;

      }
    }



  }
}


