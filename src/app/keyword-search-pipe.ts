import {Pipe} from 'angular2/angular2';
import {Perk} from './perk';

@Pipe({
  name: "keywordSearch"
})

export class KeywordSearchPipe {
  transform(perks: Perk[], keyword: string) : any {
    var search = new RegExp(keyword);
    return perks.filter(function(perk) {
      return search.test(perk.name);
    });
  }
}
