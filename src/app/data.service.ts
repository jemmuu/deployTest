import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getObject(){
                       let b = [
                                  {
                                   'name':'jemish',
                                    'bday' : '25 aug',
                                  },
                                  {
                                    'name':'jemmu',
                                     'bday' : '25 aug',
                                   },
                                   {
                                    'name':'jemes',
                                     'bday' : '25 aug',
                                   }


                                ];

    return b;
    
  }

}
