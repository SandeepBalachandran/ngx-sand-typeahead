import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {
  public transform(array: any[], itemsCount: number, startIndex: number = 0): any {
    /**
     * Check the input is array.
     * If limit is 0 return the original array.
     */
    if (!Array.isArray(array) || itemsCount === 0) {
      return array;
    }
    /**
     * Slice the array with the limit and return the modified array.
     */
    return array.slice(startIndex, startIndex + itemsCount);
  }
}
