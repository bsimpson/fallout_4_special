import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {perkData} from './perk_data';
import {KeywordSearchPipe} from './keyword-search-pipe'

class Perk {
  name:             string;
  rank:             number;
  attribute_name:   string;
  attribute_level:  number;
  character_level:  number;
  description:      string;

  constructor(options) {
    this.name            = options.name;
    this.rank            = options.rank;
    this.attribute_name  = options.attribute_name;
    this.attribute_level = options.attribute_level;
    this.character_level = options.character_level;
    this.description     = options.description;
  }

  isEligibleCharacterLevel(filter) {
    if (this.character_level > filter.character_level) {
      return false;
    }
    return true;
  }

  isEligibleAttributeLevel(filter) {

    if (
      (this.attribute_name == 'STR' && this.attribute_level <= filter.STR_level) ||
      (this.attribute_name == 'PER' && this.attribute_level <= filter.PER_level) ||
      (this.attribute_name == 'END' && this.attribute_level <= filter.END_level) ||
      (this.attribute_name == 'CHA' && this.attribute_level <= filter.CHA_level) ||
      (this.attribute_name == 'INT' && this.attribute_level <= filter.INT_level) ||
      (this.attribute_name == 'AGI' && this.attribute_level <= filter.AGI_level) ||
      (this.attribute_name == 'LCK' && this.attribute_level <= filter.LCK_level)
      ) {
        return true;
      }

    return false;
  }

  isEligible(filter) {
    return this.isEligibleCharacterLevel(filter) && this.isEligibleAttributeLevel(filter);
  }
}

class Filter {
  STR_level: number;
  PER_level: number;
  END_level: number;
  CHA_level: number;
  INT_level: number;
  AGI_level: number;
  LCK_level: number;
  character_level: number;
  keyword: string;
}

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
  public filter: Filter {
    STR_level: 0;
    PER_level: 0;
    END_level: 0;
    CHA_level: 0;
    INT_level: 0;
    AGI_level: 0;
    LCK_level: 0;
    character_level: 0;
  }

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
