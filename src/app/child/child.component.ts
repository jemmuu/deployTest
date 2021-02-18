import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  combineLatest, Observable } from 'rxjs';
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

    // this.route.queryParamMap
    // .subscribe(param => {
    //   // let page: number = Number(param.get('page'));
    //   // let order = param.get('order');
      
    //   //   console.log(order)
    //     });

    
    // this.route.paramMap
    //   .subscribe(param => {
    //    // let id: number = Number(param.get('id'));
                
    //     });
              


       combineLatest([
         this.route.paramMap,
          this.route.queryParamMap,
          (paramMap : any, queryParamMap : any) => ({                
            paramMap, queryParamMap})
          ])
        .subscribe( ([params , queryParams]) => {

          let id = Number(params.get('id'));
          console.log(id);
          this.getData(id);

          let page: number = Number(queryParams.get('page'));
          let order = queryParams.get('order');
          console.log(page);
          console.log(order)


        }


        )





  }
  //index;



  getData(id: number) {
    this.data = this.service.getObject();
        for (let datak of this.data) {
          if (datak.id == id) {
            this.tempData = datak;
            console.log(this.tempData);

          }};



  }
}


