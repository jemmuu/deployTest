import  {Pipe,PipeTransform} from '@angular/core'


@Pipe({
    name:'custPipe'

})




export class testpipe implements PipeTransform
{
    transform(value:string, args?:any)
    {
            return value.toLocaleUpperCase();
    }
}