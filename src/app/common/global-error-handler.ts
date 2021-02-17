import { Injectable } from "@angular/core";
import { ErrorHandler } from "@angular/core";

@Injectable(
   
)

export class globalErrorHandler implements ErrorHandler
{       constructor( ){}
        

handleError(error: any)
        {
            alert("something went wrong");
        }
    
}