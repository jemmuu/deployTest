import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-a',
  templateUrl: './point-a.component.html',
  styleUrls: ['./point-a.component.css']
})
export class PointAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


    year:number= 0;
  // program to check leap year
    checkLeapYear() {

    //three conditions to find out the leap year
    if ((0 == this.year % 4) && (0 != this.year % 100) || (0 == this.year % 400)) {
        console.log(this.year + ' is a leap year');
    } else {
        console.log(this.year + ' is not a leap year');
    }
}



}
