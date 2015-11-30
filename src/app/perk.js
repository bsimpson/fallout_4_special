var Perk = (function () {
    function Perk(options) {
        this.name = options.name;
        this.rank = options.rank;
        this.attribute_name = options.attribute_name;
        this.attribute_level = options.attribute_level;
        this.character_level = options.character_level;
        this.description = options.description;
    }
    Perk.prototype.isEligibleCharacterLevel = function (filter) {
        if (this.character_level > filter.character_level) {
            return false;
        }
        return true;
    };
    Perk.prototype.isEligibleAttributeLevel = function (filter) {
        if ((this.attribute_name == 'STR' && this.attribute_level <= filter.STR_level) ||
            (this.attribute_name == 'PER' && this.attribute_level <= filter.PER_level) ||
            (this.attribute_name == 'END' && this.attribute_level <= filter.END_level) ||
            (this.attribute_name == 'CHA' && this.attribute_level <= filter.CHA_level) ||
            (this.attribute_name == 'INT' && this.attribute_level <= filter.INT_level) ||
            (this.attribute_name == 'AGI' && this.attribute_level <= filter.AGI_level) ||
            (this.attribute_name == 'LCK' && this.attribute_level <= filter.LCK_level)) {
            return true;
        }
        return false;
    };
    Perk.prototype.isEligible = function (filter) {
        return this.isEligibleCharacterLevel(filter) && this.isEligibleAttributeLevel(filter);
    };
    return Perk;
})();
exports.Perk = Perk;
//# sourceMappingURL=perk.js.map