import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (!value) {
      return 'cv.jfif';
    }
    return value;
  }

}
