import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { testService } from '../service/test.service';

import { ToastrService } from 'ngx-toastr';

import { allError } from '../common/allError';
import { notfound } from '../common/404-error';
import { badError } from '../common/400-error';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  post: any;


  constructor(private service: testService, private toastr: ToastrService) {

    // http.get(this.url)
    //   .subscribe(response => {

    //       this.post = response;

    //   })
    // should not declare in constructor becouse its heavy operation and constructor should be simple and short
  }

  ngOnInit(): void {

    this.service.getData()
      .subscribe(response => {

        this.post = response;

      }); 
      
  }

  addData(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.service.addData(post)
      .subscribe((response: any) => {
        post.id = response.id;
        this.post.splice(0, 0, post);
        console.log(post.id);
        console.log(response.id);

      });

    input.value = '';


  }

  updateData(data: any) {
    this.service.updateData(data)
      .subscribe(Response => {
        let index = this.post.indexOf(data);
        console.log(index);
        this.post.splice(index, 1, Response);
        console.log(Response);

      }, 
      (error : Response) => {
        if(error instanceof badError)
        {
          this.toastr.error("data is already deleted from th database please reload", 'error');
        }
        else throw error;
      })
  }


  deleteData(data: any) {
    this.service.deleteData(data.id)
      .subscribe(
        
      (response) => {
         let index = this.post.indexOf(data);
        console.log(response);
         this.post.splice(index, 1);
        
      }, 
      (error : allError) => {
        if(error instanceof notfound)
        {
          console.log(error);
          this.toastr.error("data is already deleted from th database please reload", 'error');
        }
        else throw error;
        
      })
  }





}
