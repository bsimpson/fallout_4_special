import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {perkData} from './perk_data';

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

  isApplicable(filter) {
    if (perk.character_level > _this.filter.character_level) {
      return false;
    }

    if (
      (this.attribute_name == 'STR' && this.attribute_level <= _this.filter.STR_level) ||
      (this.attribute_name == 'PER' && this.attribute_level <= _this.filter.PER_level) ||
      (this.attribute_name == 'END' && this.attribute_level <= _this.filter.END_level) ||
      (this.attribute_name == 'CHA' && this.attribute_level <= _this.filter.CHA_level) ||
      (this.attribute_name == 'INT' && this.attribute_level <= _this.filter.INT_level) ||
      (this.attribute_name == 'AGI' && this.attribute_level <= _this.filter.AGI_level) ||
      (this.attribute_name == 'LCK' && this.attribute_level <= _this.filter.LCK_level) ) {
        return true;
      }
    }
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
}

var PERKS: Perk[] = perkData.map(function(data) {
  return new Perk(data);
});

@Component({
    selector: 'perks',
    templateUrl: 'perks.template.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

class AppComponent {

  public perks = PERKS;
  public filter: Filter {
    STR_level: 1;
    PER_level: 0;
    END_level: 0;
    CHA_level: 0;
    INT_level: 0;
    AGI_level: 0;
    LCK_level: 0;
    character_level: 0;
  }
}

bootstrap(AppComponent).then(function() {
  $(document).foundation();
});
