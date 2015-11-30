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
var keyword_search_pipe_1 = require('./keyword-search-pipe');
var perk_1 = require('./perk');
var filter_1 = require('./filter');
var PERKS = perk_data_1.perkData.map(function (data) {
    return new perk_1.Perk(data);
});
var AppComponent = (function () {
    function AppComponent() {
        this.perks = PERKS;
        this.filter = new filter_1.Filter({
            STR_level: 0,
            PER_level: 0,
            END_level: 0,
            CHA_level: 0,
            INT_level: 0,
            AGI_level: 0,
            LCK_level: 0,
            character_level: 0
        });
    }
    AppComponent.prototype.eligiblePerks = function () {
        var _this = this;
        return this.perks.filter(function (perk) { return perk.isEligible(_this.filter); });
    };
    AppComponent.prototype.inEligiblePerks = function () {
        var _this = this;
        return this.perks.filter(function (perk) { return !perk.isEligible(_this.filter); });
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'perks',
            templateUrl: 'perks.template.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            pipes: [keyword_search_pipe_1.KeywordSearchPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent).then(function () {
    $(document).foundation();
});
//# sourceMappingURL=app.js.map