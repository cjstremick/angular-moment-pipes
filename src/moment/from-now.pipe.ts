import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'from-now' })
export class FromNowPipe implements PipeTransform {
  transform(input: Date) : any {    
        return moment(input).fromNow();
  }
}
