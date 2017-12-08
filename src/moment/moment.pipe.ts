import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'moment' })
export class MomentPipe implements PipeTransform {
  transform(input: Date, format: string): any {
    if (format !== null) {
      return moment(input).format(format);
    }
    return moment(input);
  }
}
