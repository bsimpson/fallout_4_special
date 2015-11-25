import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {perkData} from './perk_data';

class Perk {
  name: string;
  rank: number;
  attribute_name: string;
  attribute_level: number;
  character_level: number;
  description: string;
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

var PERKS: Perk[] = perkData;

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

  applicablePerks() {
    _this = this;
    return this.perks.filter(function(perk) {
    if (perk.character_level > _this.filter.character_level) {
      return false;
    }

    if (
      (perk.attribute_name == 'STR' && perk.attribute_level <= _this.filter.STR_level) ||
      (perk.attribute_name == 'PER' && perk.attribute_level <= _this.filter.PER_level) ||
      (perk.attribute_name == 'END' && perk.attribute_level <= _this.filter.END_level) ||
      (perk.attribute_name == 'CHA' && perk.attribute_level <= _this.filter.CHA_level) ||
      (perk.attribute_name == 'INT' && perk.attribute_level <= _this.filter.INT_level) ||
      (perk.attribute_name == 'AGI' && perk.attribute_level <= _this.filter.AGI_level) ||
      (perk.attribute_name == 'LCK' && perk.attribute_level <= _this.filter.LCK_level) ) {
        return true;
      }
    });
  }
}

bootstrap(AppComponent);
