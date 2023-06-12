import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearExtension'
})
export class ClearExtensionPipe implements PipeTransform {

  transform(textWExtension: string, ...args: unknown[]): any {

    const regex = /\.(jpg|jpeg|png|gif|bmp)$/i;

    return textWExtension.replace(regex, '');
  }

}
