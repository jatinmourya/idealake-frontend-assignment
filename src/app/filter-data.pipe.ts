import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData',
})
export class FilterDataPipe implements PipeTransform {
  transform(value: any[], title: string): any {
    if (!title || !value.length) return value;
    return value.filter((item: any) => {
      // console.log(item.title.toLowerCase().includes(title.toLowerCase()));
      return item.title.toLowerCase().includes(title.toLowerCase());
    });
  }
}
