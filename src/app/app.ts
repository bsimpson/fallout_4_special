import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {perkData} from './perk_data';
import {KeywordSearchPipe} from './keyword-search-pipe'
import {Perk} from './perk';
import {Filter} from './filter';

var PERKS: Perk[] = perkData.map(function(data) {
  return new Perk(data);
});

@Component({
    selector: 'perks',
    templateUrl: 'perks.template.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    pipes: [KeywordSearchPipe]
})

class AppComponent {

  public perks = PERKS;
  public filter: Filter = new Filter({
      STR_level: 0,
      PER_level: 0,
      END_level: 0,
      CHA_level: 0,
      INT_level: 0,
      AGI_level: 0,
      LCK_level: 0,
      character_level: 0
  });

  eligiblePerks() {
    var _this = this;
    return this.perks.filter(function(perk) { return perk.isEligible(_this.filter) });
  }

  inEligiblePerks() {
    var _this = this;
    return this.perks.filter(function(perk) { return !perk.isEligible(_this.filter) });
  }
}

bootstrap(AppComponent).then(function() {
  $(document).foundation();
});
