import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { allError } from '../common/allError';
import { notfound } from '../common/404-error';
import { badError } from '../common/400-error';

@Injectable()



export class testService{

    url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http : HttpClient){

    }

    testFun(){
    return ["l1","l2","l3"];
    }


    getData()
    {
        return this.http.get(this.url);
       
    }

    addData(data : any)
    {
        return this.http.post(this.url, JSON.stringify(data));
        
        
    }

    updateData(data : any)
    {
      return  this.http.patch(this.url + '/' + data.id,{title : 'updated' })
      .pipe(catchError((error : Response) => {

        if(error.status === 400)
        {
          return  throwError(new badError(error.json()));
        }
        return throwError(new allError(error.json()));
         
       })
       
       );
      
    }

    deleteData(data : any)
        {
           return this.http.delete(this.url + '/' + data)
           .pipe(catchError((error : Response) => {

            if(error.status === 404)
            {
              return  throwError(new notfound());
            }
            return throwError(new allError(error.json()));
             
           })
           
           );
        }

}