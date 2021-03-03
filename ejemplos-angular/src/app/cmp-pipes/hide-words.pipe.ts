import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {
  transform(value: string, words: Array<string>): string {

    const res = words.reduce((acc, word) => {
      const regExp = new RegExp(word, 'gi');
      return acc.replace(regExp, '*'.repeat(word.length));
    }, value);
    return res;

  }
}
