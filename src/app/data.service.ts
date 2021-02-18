import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getObject(){
                       let b = [
                                  {
                                    'id' : 1,
                                   'name':'jemish',
                                    'bday' : '25 aug',
                                  },
                                  {
                                    'id' : 2,
                                    'name':'jemmu',
                                     'bday' : '25 aug',
                                   },
                                   {
                                    'id' : 3,
                                    'name':'jemes',
                                     'bday' : '25 aug',
                                   }


                                ];

    return b;
    
  }

}
