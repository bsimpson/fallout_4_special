var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var perk_data_1 = require('./perk_data');
var Perk = (function () {
    function Perk() {
    }
    return Perk;
})();
var Filter = (function () {
    function Filter() {
    }
    return Filter;
})();
var PERKS = perk_data_1.perkData;
var AppComponent = (function () {
    function AppComponent() {
        this.perks = PERKS;
        this.filter = {
            STR_level: 1,
            PER_level: 0,
            END_level: 0,
            CHA_level: 0,
            INT_level: 0,
            AGI_level: 0,
            LCK_level: 0,
            character_level: 0
        };
    }
    AppComponent.prototype.applicablePerks = function () {
        _this = this;
        return this.perks.filter(function (perk) {
            if (perk.character_level > _this.filter.character_level) {
                return false;
            }
            if ((perk.attribute_name == 'STR' && perk.attribute_level <= _this.filter.STR_level) ||
                (perk.attribute_name == 'PER' && perk.attribute_level <= _this.filter.PER_level) ||
                (perk.attribute_name == 'END' && perk.attribute_level <= _this.filter.END_level) ||
                (perk.attribute_name == 'CHA' && perk.attribute_level <= _this.filter.CHA_level) ||
                (perk.attribute_name == 'INT' && perk.attribute_level <= _this.filter.INT_level) ||
                (perk.attribute_name == 'AGI' && perk.attribute_level <= _this.filter.AGI_level) ||
                (perk.attribute_name == 'LCK' && perk.attribute_level <= _this.filter.LCK_level)) {
                return true;
            }
        });
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'perks',
            templateUrl: 'perks.template.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map