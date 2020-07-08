import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'try1'
})
export class Try1Pipe implements PipeTransform {

  transform(str: string,end:number): any {
    let finall_string=str.substring(0,end)
    return finall_string;
  }

}
