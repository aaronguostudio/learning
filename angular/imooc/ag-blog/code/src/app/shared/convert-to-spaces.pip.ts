import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpaces implements PipeTransform {
  transform(value: string, character: string): string {
    if (!value) {
      return '';
    }
    return value.replace(new RegExp(character, 'g'), ' ');
  }
}
