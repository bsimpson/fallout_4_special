export class Perk {
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

