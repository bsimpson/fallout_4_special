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
    function Perk(options) {
        this.name = options.name;
        this.rank = options.rank;
        this.attribute_name = options.attribute_name;
        this.attribute_level = options.attribute_level;
        this.character_level = options.character_level;
        this.description = options.description;
    }
    Perk.prototype.isApplicable = function (filter) {
        if (perk.character_level > _this.filter.character_level) {
            return false;
        }
        if ((this.attribute_name == 'STR' && this.attribute_level <= _this.filter.STR_level) ||
            (this.attribute_name == 'PER' && this.attribute_level <= _this.filter.PER_level) ||
            (this.attribute_name == 'END' && this.attribute_level <= _this.filter.END_level) ||
            (this.attribute_name == 'CHA' && this.attribute_level <= _this.filter.CHA_level) ||
            (this.attribute_name == 'INT' && this.attribute_level <= _this.filter.INT_level) ||
            (this.attribute_name == 'AGI' && this.attribute_level <= _this.filter.AGI_level) ||
            (this.attribute_name == 'LCK' && this.attribute_level <= _this.filter.LCK_level)) {
            return true;
        }
    };
    return Perk;
})();
var Filter = (function () {
    function Filter() {
    }
    return Filter;
})();
var PERKS = perk_data_1.perkData.map(function (data) {
    return new Perk(data);
});
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
angular2_1.bootstrap(AppComponent).then(function () {
    $(document).foundation();
});
//# sourceMappingURL=app.js.map