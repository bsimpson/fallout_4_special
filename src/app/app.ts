import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

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

@Component({
    selector: 'perks',
    template: `
    <form>
      <div class="column small-6 small-left">
        <div class="row">
          <div class="column small-12">
            <label>Character Level
              <input type="number" [(ng-model)]="filter.character_level" />
            </label>
          </div>
        </div>
        <div class="row small-up-1 medium-up-3">
          <div class="column">
            <div class="perk">
              <div id="strength"></div>
            </div>
            <label>Strength (STR)
              <input type="number" [(ng-model)]="filter.STR_level" />
            </label>
          </div>

          <div class="column">
            <div class="perk">
              <div id="perception"></div>
            </div>
            <label>Perception (PER)
              <input type="number" [(ng-model)]="filter.PER_level" />
            </label>
          </div>

          <div class="column">
            <div class="perk">
              <div id="endurance"></div>
            </div>
            <label>Endurance (END)
              <input type="number" [(ng-model)]="filter.END_level" />
            </label>
          </div>

          <div class="column">
            <div class="perk">
              <div id="charisma"></div>
            </div>
            <label>Charisma (CHA)
              <input type="number" [(ng-model)]="filter.CHA_level" />
            </label>
          </div>

          <div class="column">
            <div class="perk">
              <div id="intelligence"></div>
            </div>
            <label>Intelligence (INT)
              <input type="number" [(ng-model)]="filter.INT_level" />
            </label>
          </div>

          <div class="column">
            <div class="perk">
              <div id="agility"></div>
            </div>
            <label>Agility (AGI)
              <input type="number" [(ng-model)]="filter.AGI_level" />
            </label>
          </div>

          <div class="column">
            <div class="perk">
              <div id="luck"></div>
            </div>
            <label>Luck (LCK)
              <input type="number" [(ng-model)]="filter.LCK_level" />
            </label>
          </div>
        </div>
      </div>

      <div class="column small-6 small-right">
        <div *ng-if="applicablePerks().length > 0">
          <ul class="perks">
            <li *ng-for="#perk of applicablePerks()">
              <div>
                <strong>{{perk.name}} (Level {{perk.rank}})</strong>
              </div>
              <div>
                <em>
                  Requires {{perk.attribute_name}} >= {{perk.attribute_level}},
                  Character level {{perk.character_level}}
                </em>
              </div>
              <div>
                <blockquote>{{perk.description}}</blockquote>
              </div>
            </li>
          </ul>
        </div>
        <div *ng-if="applicablePerks().length <= 0">
          <em>No perks match your filter. Try expanding your search...</em>
        </div>
      </div>
    </form>
    `,
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
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

var PERKS: Perk[] = [
  { "name": "Iron Fist",                 "rank": 1,  "attribute_name": "STR",  "attribute_level": 1,   "character_level":0,   "description": "Channel your chi to unleash devastating fury! Punching attacks do 20% more damage to your opponent." },
  { "name": "Iron Fist",                 "rank": 2,  "attribute_name": "STR",  "attribute_level": 1,   "character_level":9,   "description": "Punching attacks now do 40% more damage and can disarm your opponent." },
  { "name": "Iron Fist",                 "rank": 3,  "attribute_name": "STR",  "attribute_level": 1,   "character_level":18,  "description": "Punching attacks now do 60% more damage. Unarmed Power Attacks have a chance to cripple one of your opponent's limbs." },
  { "name": "Iron Fist",                 "rank": 4,  "attribute_name": "STR",  "attribute_level": 1,   "character_level":31,  "description": "Punching attacks now do 80% more damage. Unarmed Power Attacks have an increased chance to cripple one of your opponent's limbs." },
  { "name": "Iron Fist",                 "rank": 5,  "attribute_name": "STR",  "attribute_level": 1,   "character_level":46,  "description": "Punching attacks now do double damage. Criticals in V.A.T.S. will paralyze your opponent." },
  { "name": "Big Leagues",               "rank": 1,  "attribute_name": "STR",  "attribute_level": 2,   "character_level":0,   "description": "Swing for the fences! Do 20% more melee weapon damage." },
  { "name": "Big Leagues",               "rank": 2,  "attribute_name": "STR",  "attribute_level": 2,   "character_level":7,   "description": "You now do 40% more melee weapon damage and gain a chance to disarm your opponent." },
  { "name": "Big Leagues",               "rank": 3,  "attribute_name": "STR",  "attribute_level": 2,   "character_level":15,  "description": "You now do 60% more melee weapon damage and gain an increased chance to disarm your opponent." },
  { "name": "Big Leagues",               "rank": 4,  "attribute_name": "STR",  "attribute_level": 2,   "character_level":27,  "description": "You now do 80% more melee weapon damage and hit all targets in front of you." },
  { "name": "Big Leagues",               "rank": 5,  "attribute_name": "STR",  "attribute_level": 2,   "character_level":42,  "description": "You now do double damage with a melee weapon,                                                                                                                         and gain a chance to cripple your opponent,                                                                              or grand slam their head clean off!" },
  { "name": "Armorer",                   "rank": 1,  "attribute_name": "STR",  "attribute_level": 3,   "character_level":0,   "description": "Protect yourself from the dangers of the Wasteland with access to base level and Rank 1 armor mods." },
  { "name": "Armorer",                   "rank": 2,  "attribute_name": "STR",  "attribute_level": 3,   "character_level":13,  "description": "You gain access to Rank 2 armor mods" },
  { "name": "Armorer",                   "rank": 3,  "attribute_name": "STR",  "attribute_level": 3,   "character_level":25,  "description": "You gain access to Rank 3 armor mods" },
  { "name": "Armorer",                   "rank": 4,  "attribute_name": "STR",  "attribute_level": 3,   "character_level":39,  "description": "You gain access to Rank 4 armor mods" },
  { "name": "Blacksmith",                "rank": 1,  "attribute_name": "STR",  "attribute_level": 4,   "character_level":0,   "description": "Fire up the forge and gain access to base level and Rank 1 melee weapon mods." },
  { "name": "Blacksmith",                "rank": 2,  "attribute_name": "STR",  "attribute_level": 4,   "character_level":16,  "description": "You gain access to Rank 2 melee weapon mods" },
  { "name": "Blacksmith",                "rank": 3,  "attribute_name": "STR",  "attribute_level": 4,   "character_level":29,  "description": "You gain access to Rank 3 melee weapon mods" },
  { "name": "Heavy Gunner",              "rank": 1,  "attribute_name": "STR",  "attribute_level": 5,   "character_level":0,   "description": "Thanks to practice and conditioning,                                                                                                                                  heavy guns do 20% more damage." },
  { "name": "Heavy Gunner",              "rank": 2,  "attribute_name": "STR",  "attribute_level": 5,   "character_level":11,  "description": "Heavy guns now do 40% more damage,                                                                                                                                    and have improved hip fire accuracy." },
  { "name": "Heavy Gunner",              "rank": 3,  "attribute_name": "STR",  "attribute_level": 5,   "character_level":21,  "description": "Heavy guns now do 60% more damage. Hip fire accuracy is increased even more." },
  { "name": "Heavy Gunner",              "rank": 4,  "attribute_name": "STR",  "attribute_level": 5,   "character_level":35,  "description": "Heavy guns now do 80% more damage and have a chance to stagger your opponent." },
  { "name": "Heavy Gunner",              "rank": 5,  "attribute_name": "STR",  "attribute_level": 5,   "character_level":47,  "description": "Heavy guns now do double damage." },
  { "name": "Strong Back",               "rank": 1,  "attribute_name": "STR",  "attribute_level": 6,   "character_level":0,   "description": "What are you,                                                                                                                                                         part pack mule? Gain +25 to carry weight" },
  { "name": "Strong Back",               "rank": 2,  "attribute_name": "STR",  "attribute_level": 6,   "character_level":10,  "description": "You now have +50 to carry weight." },
  { "name": "Strong Back",               "rank": 3,  "attribute_name": "STR",  "attribute_level": 6,   "character_level":20,  "description": "When overencumbered,                                                                                                                                                  you can use Action Points to run." },
  { "name": "Strong Back",               "rank": 4,  "attribute_name": "STR",  "attribute_level": 6,   "character_level":30,  "description": "When overencumbered,                                                                                                                                                  you can fast travel." },
  { "name": "Steady Aim",                "rank": 1,  "attribute_name": "STR",  "attribute_level": 7,   "character_level":0,   "description": "Stay on target! Hip-fire accuracy is improved when firing any gun." },
  { "name": "Steady Aim",                "rank": 2,  "attribute_name": "STR",  "attribute_level": 7,   "character_level":28,  "description": "Hip-fire accuracy is improved even more when firing any gun." },
  { "name": "Basher",                    "rank": 1,  "attribute_name": "STR",  "attribute_level": 8,   "character_level":0,   "description": "Get up close and personal! Gun bashing does 25% more damage." },
  { "name": "Basher",                    "rank": 2,  "attribute_name": "STR",  "attribute_level": 8,   "character_level":5,   "description": "Gun bashing now does 50% more damage and possibly cripples your opponent." },
  { "name": "Basher",                    "rank": 3,  "attribute_name": "STR",  "attribute_level": 8,   "character_level":14,  "description": "Gun bashing now does 75% more damage and has an increased chance to cripple your opponent." },
  { "name": "Basher",                    "rank": 4,  "attribute_name": "STR",  "attribute_level": 8,   "character_level":26,  "description": "Gun bashing does double damage and has an increased chance to cripple your opponent. It may also inflict a Critical Hit." },
  { "name": "Rooted",                    "rank": 1,  "attribute_name": "STR",  "attribute_level": 9,   "character_level":0,   "description": "You're part tree! While standing still,                                                                                                                               you gain +25 Damage Resistance and your melee and unarmed attacks deal 25% more damage." },
  { "name": "Rooted",                    "rank": 2,  "attribute_name": "STR",  "attribute_level": 9,   "character_level":22,  "description": "While standing still,                                                                                                                                                 you now gain +50 Damage Resistance and your melee and unarmed attacks deal 50% more damage." },
  { "name": "Rooted",                    "rank": 3,  "attribute_name": "STR",  "attribute_level": 9,   "character_level":43,  "description": "While standing still,                                                                                                                                                 you may automatically disarm enemies that use melee weapons against you." },
  { "name": "Pain Train",                "rank": 1,  "attribute_name": "STR",  "attribute_level": 10,  "character_level":0,   "description": "Choo Choo! All aboard! While wearing Power Armor,                                                                                                                     sprinting into enemies hurts and staggers them. (Robots and oversized enemies are immune to the stagger.)" },
  { "name": "Pain Train",                "rank": 2,  "attribute_name": "STR",  "attribute_level": 10,  "character_level":24,  "description": "Sprinting into enemies while wearing Power Armor now causes severe damage and a more powerful stagger. (Robots and oversized enemies are immune to the stagger.)" },
  { "name": "Pain Train",                "rank": 3,  "attribute_name": "STR",  "attribute_level": 10,  "character_level":50,  "description": "Sprinting into enemies while wearing Power Armor now causes massive damage and knocks them down. Impact landing near enemies inflicts even more damage." },
  { "name": "Pickpocket",                "rank": 1,  "attribute_name": "PER",  "attribute_level": 1,   "character_level":0,   "description": "Your quick hands and sticky fingers make picking pockets 25% easier." },
  { "name": "Pickpocket",                "rank": 2,  "attribute_name": "PER",  "attribute_level": 1,   "character_level":6,   "description": "Picking pockets is now 50% easier. You can place a live grenade in a person's inventory." },
  { "name": "Pickpocket",                "rank": 3,  "attribute_name": "PER",  "attribute_level": 1,   "character_level":17,  "description": "Picking pockets is now 75% easier,                                                                                                                                    and you can steal equipped weapons." },
  { "name": "Pickpocket",                "rank": 4,  "attribute_name": "PER",  "attribute_level": 1,   "character_level":30,  "description": "Picking pockets is now twice as easy,                                                                                                                                 and you can steal equipped items." },
  { "name": "Rifleman",                  "rank": 1,  "attribute_name": "PER",  "attribute_level": 2,   "character_level":0,   "description": "Keep your distance long and your kill-count high. Attacks with non-automatic rifles do 20% more damage" },
  { "name": "Rifleman",                  "rank": 2,  "attribute_name": "PER",  "attribute_level": 2,   "character_level":9,   "description": "Attacks with non-automatic rifles do 40% more damage and ignore 15% of a target's armor." },
  { "name": "Rifleman",                  "rank": 3,  "attribute_name": "PER",  "attribute_level": 2,   "character_level":18,  "description": "Attacks with non-automatic rifles do 60% more damage and ignore 20% of a target's armor." },
  { "name": "Rifleman",                  "rank": 4,  "attribute_name": "PER",  "attribute_level": 2,   "character_level":31,  "description": "Attacks with non-automatic rifles do 80% more damage and ignore 25% of a target's armor. They also have a slight chance of crippling a limb." },
  { "name": "Rifleman",                  "rank": 5,  "attribute_name": "PER",  "attribute_level": 2,   "character_level":46,  "description": "Attacks with non-automatic rifles do double damage and ignore 30% of a target's armor. They also have a slightly higher chance of crippling a limb." },
  { "name": "Awareness",                 "rank": 1,  "attribute_name": "PER",  "attribute_level": 3,   "character_level":0,   "description": "To defeat your enemies,                                                                                                                                               know their weaknesses! You can view a target's specific damage resistances in V.A.T.S." },
  { "name": "Locksmith",                 "rank": 1,  "attribute_name": "PER",  "attribute_level": 4,   "character_level":0,   "description": "Your nimble fingers allow you to pick advanced locks." },
  { "name": "Locksmith",                 "rank": 2,  "attribute_name": "PER",  "attribute_level": 4,   "character_level":7,   "description": "You can pick Expert locks." },
  { "name": "Locksmith",                 "rank": 3,  "attribute_name": "PER",  "attribute_level": 4,   "character_level":18,  "description": "You can pick Master locks." },
  { "name": "Locksmith",                 "rank": 4,  "attribute_name": "PER",  "attribute_level": 4,   "character_level":41,  "description": "Your bobby pins never break during lockpicking." },
  { "name": "Demolition Expert",         "rank": 1,  "attribute_name": "PER",  "attribute_level": 5,   "character_level":0,   "description": "The bigger the boom,                                                                                                                                                  the better! Your explosives do 25% more damage,                                                                          and you can craft explosives at any Chemistry Station." },
  { "name": "Demolition Expert",         "rank": 2,  "attribute_name": "PER",  "attribute_level": 5,   "character_level":10,  "description": "Your explosives do 50% more damage,                                                                                                                                   and grenades gain a throwing arc." },
  { "name": "Demolition Expert",         "rank": 3,  "attribute_name": "PER",  "attribute_level": 5,   "character_level":22,  "description": "Your explosives do 75% more damage and affect a larger area." },
  { "name": "Demolition Expert",         "rank": 4,  "attribute_name": "PER",  "attribute_level": 5,   "character_level":34,  "description": "Your explosives now do double damage. Mines and grenades shot in V.A.T.S explode for double damage,                                                                   too." },
  { "name": "Night Person",              "rank": 1,  "attribute_name": "PER",  "attribute_level": 6,   "character_level":0,   "description": "You are a creature of the night! Gain +2 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m." },
  { "name": "Night Person",              "rank": 2,  "attribute_name": "PER",  "attribute_level": 6,   "character_level":25,  "description": "You now have +3 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m.,                                                                          and night vision when sneaking." },
  { "name": "Refractor",                 "rank": 1,  "attribute_name": "PER",  "attribute_level": 7,   "character_level":0,   "description": "You must be part mirror! Instantly gain +10 Energy Resistance." },
  { "name": "Refractor",                 "rank": 2,  "attribute_name": "PER",  "attribute_level": 7,   "character_level":11,  "description": "You now have +20 Energy Resistance." },
  { "name": "Refractor",                 "rank": 3,  "attribute_name": "PER",  "attribute_level": 7,   "character_level":21,  "description": "You now have +30 Energy Resistance." },
  { "name": "Refractor",                 "rank": 4,  "attribute_name": "PER",  "attribute_level": 7,   "character_level":35,  "description": "You now have +40 Energy Resistance." },
  { "name": "Refractor",                 "rank": 5,  "attribute_name": "PER",  "attribute_level": 7,   "character_level":42,  "description": "You now have +50 Energy Resistance." },
  { "name": "Sniper",                    "rank": 1,  "attribute_name": "PER",  "attribute_level": 8,   "character_level":0,   "description": "It's all about focus. You have improved control and can hold your breath longer when aiming with scopes." },
  { "name": "Sniper",                    "rank": 2,  "attribute_name": "PER",  "attribute_level": 8,   "character_level":13,  "description": "Non-automatic,                                                                                                                                                        scoped rifles have a chance of knocking down your target." },
  { "name": "Sniper",                    "rank": 3,  "attribute_name": "PER",  "attribute_level": 8,   "character_level":26,  "description": "Non-automatic,                                                                                                                                                        scoped rifles gain +25% accuracy to head shot in V.A.T.S." },
  { "name": "Penetrator",                "rank": 1,  "attribute_name": "PER",  "attribute_level": 9,   "character_level":0,   "description": "There's no place to hide! In V.A.T.S you can target an enemy's body parts that are blocked by cover,                                                                  with a decrease in accuracy." },
  { "name": "Penetrator",                "rank": 2,  "attribute_name": "PER",  "attribute_level": 9,   "character_level":28,  "description": "In V.A.T.S when you target an enemy's body parts that are blocked by cover,                                                                                           there is no decrease in accuracy." },
  { "name": "Concentrated Fire",         "rank": 1,  "attribute_name": "PER",  "attribute_level": 10,  "character_level":0,   "description": "Stay Focused! In V.A.T.S every attack on the same body part gains +10% accuracy." },
  { "name": "Concentrated Fire",         "rank": 2,  "attribute_name": "PER",  "attribute_level": 10,  "character_level":26,  "description": "In V.A.T.S every attack on the same body part gains +15% accuracy." },
  { "name": "Concentrated Fire",         "rank": 3,  "attribute_name": "PER",  "attribute_level": 10,  "character_level":50,  "description": "In V.A.T.S every attack on the same body part gains +20% accuracy and does 20% more damage." },
  { "name": "Toughness",                 "rank": 1,  "attribute_name": "END",  "attribute_level": 1,   "character_level":0,   "description": "If nothing else,                                                                                                                                                      you can take a beating! Instantly gain +10 Damage Resistance" },
  { "name": "Toughness",                 "rank": 2,  "attribute_name": "END",  "attribute_level": 1,   "character_level":9,   "description": "You now have +20 damage resistance." },
  { "name": "Toughness",                 "rank": 3,  "attribute_name": "END",  "attribute_level": 1,   "character_level":18,  "description": "You now have +30 damage resistance." },
  { "name": "Toughness",                 "rank": 4,  "attribute_name": "END",  "attribute_level": 1,   "character_level":31,  "description": "You now have +40 damage resistance." },
  { "name": "Toughness",                 "rank": 5,  "attribute_name": "END",  "attribute_level": 1,   "character_level":46,  "description": "You now have +50 damage resistance." },
  { "name": "Lead Belly",                "rank": 1,  "attribute_name": "END",  "attribute_level": 2,   "character_level":0,   "description": "Your digestive tract has adjusted to the weirdness of the Wasteland! Take less radiation from eating or drinking." },
  { "name": "Lead Belly",                "rank": 2,  "attribute_name": "END",  "attribute_level": 2,   "character_level":6,   "description": "You take even less radiation from eating or drinking." },
  { "name": "Lead Belly",                "rank": 3,  "attribute_name": "END",  "attribute_level": 2,   "character_level":17,  "description": "You take no radiation from eating or drinking." },
  { "name": "Lifegiver",                 "rank": 1,  "attribute_name": "END",  "attribute_level": 3,   "character_level":0,   "description": "You embody wellness! Instantly gain +20 maximum Health." },
  { "name": "Lifegiver",                 "rank": 2,  "attribute_name": "END",  "attribute_level": 3,   "character_level":8,   "description": "You instantly gain another +20 maximum Health." },
  { "name": "Lifegiver",                 "rank": 3,  "attribute_name": "END",  "attribute_level": 3,   "character_level":20,  "description": "You instantly gain another +20 maximum Health,                                                                                                                        and slowly regenerate lost Health." },
  { "name": "Chem Resistant",            "rank": 1,  "attribute_name": "END",  "attribute_level": 4,   "character_level":0,   "description": "All the rush without the hassle! You're 50% less likely to get addicted when consuming Chems" },
  { "name": "Chem Resistant",            "rank": 2,  "attribute_name": "END",  "attribute_level": 4,   "character_level":22,  "description": "You gain complete immunity to chem addiction." },
  { "name": "Aquaboy /Aquagirl",         "rank": 1,  "attribute_name": "END",  "attribute_level": 5,   "character_level":0,   "description": "Water is your ally. You no longer take radiation damage from swimming,                                                                                                and can breathe underwater" },
  { "name": "Aquaboy /Aquagirl",         "rank": 2,  "attribute_name": "END",  "attribute_level": 5,   "character_level":21,  "description": "You become totally undetectable while submerged." },
  { "name": "Rad Resistant",             "rank": 1,  "attribute_name": "END",  "attribute_level": 6,   "character_level":0,   "description": "Exposure to the Wasteland has made you more resilient,                                                                                                                instantly granting +10 Radiation Resistance." },
  { "name": "Rad Resistant",             "rank": 2,  "attribute_name": "END",  "attribute_level": 6,   "character_level":13,  "description": "You now have +20 Radiation Resistance." },
  { "name": "Rad Resistant",             "rank": 3,  "attribute_name": "END",  "attribute_level": 6,   "character_level":26,  "description": "You now have +30 Radiation Resistance." },
  { "name": "Adamantium Skeleton",       "rank": 1,  "attribute_name": "END",  "attribute_level": 7,   "character_level":0,   "description": "Your skeleton has been infused with indestructible metal,                                                                                                             reducing limb damage by 30%." },
  { "name": "Adamantium Skeleton",       "rank": 2,  "attribute_name": "END",  "attribute_level": 7,   "character_level":13,  "description": "Your limb damage is now reduced by 60%." },
  { "name": "Adamantium Skeleton",       "rank": 3,  "attribute_name": "END",  "attribute_level": 7,   "character_level":26,  "description": "Your limb damage is completely eliminated." },
  { "name": "Cannibal",                  "rank": 1,  "attribute_name": "END",  "attribute_level": 8,   "character_level":0,   "description": "Feast on mortal flesh to heal your wounds! Eating human corpses restores Health." },
  { "name": "Cannibal",                  "rank": 2,  "attribute_name": "END",  "attribute_level": 8,   "character_level":19,  "description": "Eating Ghoul or Super Mutant corpses restores Health." },
  { "name": "Cannibal",                  "rank": 3,  "attribute_name": "END",  "attribute_level": 8,   "character_level":38,  "description": "Eating human,                                                                                                                                                         Ghoul or Super Mutant corpses now restores a significant amount of Health." },
  { "name": "Ghoulish",                  "rank": 1,  "attribute_name": "END",  "attribute_level": 9,   "character_level":0,   "description": "Sure,                                                                                                                                                                 you're still human - on the outside! Radiation now regenerates your lost Health." },
  { "name": "Ghoulish",                  "rank": 2,  "attribute_name": "END",  "attribute_level": 9,   "character_level":24,  "description": "Radiation now regenerates even more of your lost Health." },
  { "name": "Ghoulish",                  "rank": 3,  "attribute_name": "END",  "attribute_level": 9,   "character_level":48,  "description": "Radiation now regenerates even more of your lost Health,                                                                                                              and some Feral Ghouls will randomly become friendly." },
  { "name": "Solar Powered",             "rank": 1,  "attribute_name": "END",  "attribute_level": 10,  "character_level":0,   "description": "Catch some rays! Gain +2 to Strength and Endurance between the hours of 6:00a.m. and 6:00p.m." },
  { "name": "Solar Powered",             "rank": 2,  "attribute_name": "END",  "attribute_level": 10,  "character_level":27,  "description": "Sunlight slowly heals your radiation damage." },
  { "name": "Solar Powered",             "rank": 3,  "attribute_name": "END",  "attribute_level": 10,  "character_level":50,  "description": "Sunlight slowly regenerates your lost Health." },
  { "name": "Cap Collector",             "rank": 1,  "attribute_name": "CHA",  "attribute_level": 1,   "character_level":0,   "description": "You've mastered the art of the deal! Buying and selling prices at vendors are better." },
  { "name": "Cap Collector",             "rank": 2,  "attribute_name": "CHA",  "attribute_level": 1,   "character_level":20,  "description": "Buying and selling prices of vendors are now much better." },
  { "name": "Cap Collector",             "rank": 3,  "attribute_name": "CHA",  "attribute_level": 1,   "character_level":41,  "description": "You can now invest a total of 500 caps to raise a store's buying capacity." },
  { "name": "Lady Killer /Black Widow",  "rank": 1,  "attribute_name": "CHA",  "attribute_level": 2,   "character_level":0,   "description": "You're charming... and dangerous. Men/Women suffer +5% damage in combat,                                                                                              and are easier to persuade in dialogue." },
  { "name": "Lady Killer /Black Widow",  "rank": 2,  "attribute_name": "CHA",  "attribute_level": 2,   "character_level":7,   "description": "Men/Women now suffer +10% damage in combat,                                                                                                                           and are even easier to persuade in dialogue. They are also easier to pacify with the Intimidation perk." },
  { "name": "Lady Killer /Black Widow",  "rank": 3,  "attribute_name": "CHA",  "attribute_level": 2,   "character_level":16,  "description": "Men/Women now suffer +15% damage in combat,                                                                                                                           and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk." },
  { "name": "Lone Wanderer",             "rank": 1,  "attribute_name": "CHA",  "attribute_level": 3,   "character_level":0,   "description": "Who needs friends,                                                                                                                                                    anyway? When adventuring without a companion,                                                                            you take 15% less damage and carry weight increases by 50." },
  { "name": "Lone Wanderer",             "rank": 2,  "attribute_name": "CHA",  "attribute_level": 3,   "character_level":17,  "description": "When adventuring without a companion,                                                                                                                                 you take 30% less damage and carry weight increases by 100" },
  { "name": "Lone Wanderer",             "rank": 3,  "attribute_name": "CHA",  "attribute_level": 3,   "character_level":40,  "description": "When adventuring without a companion,                                                                                                                                 you do 25% more damage." },
  { "name": "Attack Dog",                "rank": 1,  "attribute_name": "CHA",  "attribute_level": 4,   "character_level":0,   "description": "Your faithful canine companion can hold an enemy,                                                                                                                     giving you a greater chance to hit them in V.A.T.S." },
  { "name": "Attack Dog",                "rank": 2,  "attribute_name": "CHA",  "attribute_level": 4,   "character_level":9,   "description": "When your dog holds an enemy,                                                                                                                                         there's a chance he'll cripple the limb he's biting." },
  { "name": "Attack Dog",                "rank": 3,  "attribute_name": "CHA",  "attribute_level": 4,   "character_level":25,  "description": "When your dog holds an enemy,                                                                                                                                         there's a chance he'll cause them to bleed." },
  { "name": "Animal Friend",             "rank": 1,  "attribute_name": "CHA",  "attribute_level": 5,   "character_level":0,   "description": "Commune with beasts! With your gun,                                                                                                                                   aim at any animal below your level and gain a chance to pacify it." },
  { "name": "Animal Friend",             "rank": 2,  "attribute_name": "CHA",  "attribute_level": 5,   "character_level":12,  "description": "When you successfully pacify an animal,                                                                                                                               you can incite it to attack" },
  { "name": "Animal Friend",             "rank": 3,  "attribute_name": "CHA",  "attribute_level": 5,   "character_level":28,  "description": "When you successfully pacify an animal,                                                                                                                               you can give it specific commands" },
  { "name": "Local Leader",              "rank": 1,  "attribute_name": "CHA",  "attribute_level": 6,   "character_level":0,   "description": "As the ruler everyone turns to,                                                                                                                                       you are able to establish supply lines between your workshop settlements." },
  { "name": "Local Leader",              "rank": 2,  "attribute_name": "CHA",  "attribute_level": 6,   "character_level":14,  "description": "You can build stores and workstations at workshop settlements." },
  { "name": "Party Boy /Party Girl",     "rank": 1,  "attribute_name": "CHA",  "attribute_level": 7,   "character_level":0,   "description": "Nobody has a good time like you! There's no chance you'll get addicted to alcohol." },
  { "name": "Party Boy /Party Girl",     "rank": 2,  "attribute_name": "CHA",  "attribute_level": 7,   "character_level":15,  "description": "The effects of alcohol are doubled." },
  { "name": "Party Boy /Party Girl",     "rank": 3,  "attribute_name": "CHA",  "attribute_level": 7,   "character_level":37,  "description": "Your Luck is increased by 3 while you're under the influence of alcohol." },
  { "name": "Inspirational",             "rank": 1,  "attribute_name": "CHA",  "attribute_level": 8,   "character_level":0,   "description": "Because you lead by example,                                                                                                                                          your companion does more damage in combat,                                                                               and cannot hurt you." },
  { "name": "Inspirational",             "rank": 2,  "attribute_name": "CHA",  "attribute_level": 8,   "character_level":19,  "description": "Your companion resists more damage in combat,                                                                                                                         and can't be harmed by your attacks." },
  { "name": "Inspirational",             "rank": 3,  "attribute_name": "CHA",  "attribute_level": 8,   "character_level":43,  "description": "Your companion can carry more items." },
  { "name": "Wasteland Whisperer",       "rank": 1,  "attribute_name": "CHA",  "attribute_level": 9,   "character_level":0,   "description": "Master the post-apocalypse! With your gun,                                                                                                                            aim at any Wasteland creature below your level and gain a chance to pacify it." },
  { "name": "Wasteland Whisperer",       "rank": 2,  "attribute_name": "CHA",  "attribute_level": 9,   "character_level":21,  "description": "When you successfully pacify a creature,                                                                                                                              you can incite it to attack." },
  { "name": "Wasteland Whisperer",       "rank": 3,  "attribute_name": "CHA",  "attribute_level": 9,   "character_level":49,  "description": "When you successfully pacify a creature,                                                                                                                              you can give it specific commands." },
  { "name": "Intimidation",              "rank": 1,  "attribute_name": "CHA",  "attribute_level": 10,  "character_level":0,   "description": "Time to show everyone who's boss! With your gun,                                                                                                                      aim at any human opponent below your level and gain a chance to pacify them." },
  { "name": "Intimidation",              "rank": 2,  "attribute_name": "CHA",  "attribute_level": 10,  "character_level":23,  "description": "When you successfully pacify someone,                                                                                                                                 you can incite them to attack." },
  { "name": "Intimidation",              "rank": 3,  "attribute_name": "CHA",  "attribute_level": 10,  "character_level":50,  "description": "When you successfully pacify someone,                                                                                                                                 you can give them specific commands." },
  { "name": "V.A.N.S.",                  "rank": 1,  "attribute_name": "INT",  "attribute_level": 1,   "character_level":0,   "description": "Let Vault-Tec guide you! The path to your closest quest target is displayed in V.A.T.S." },
  { "name": "Medic",                     "rank": 1,  "attribute_name": "INT",  "attribute_level": 2,   "character_level":0,   "description": "Is there a doctor in the house? Stimpaks restore 40% of lost Health,                                                                                                  and RadAway removes 40% of radiation." },
  { "name": "Medic",                     "rank": 2,  "attribute_name": "INT",  "attribute_level": 2,   "character_level":18,  "description": "Stimpaks restore 60% of lost Health,                                                                                                                                  and RadAway removes 60% of radiation" },
  { "name": "Medic",                     "rank": 3,  "attribute_name": "INT",  "attribute_level": 2,   "character_level":30,  "description": "Stimpaks restore 80% of lost Health,                                                                                                                                  and RadAway removes 80% of radiation" },
  { "name": "Medic",                     "rank": 4,  "attribute_name": "INT",  "attribute_level": 2,   "character_level":49,  "description": "Stimpaks and RadAway restore all lost health and radiation,                                                                                                           and work much more quickly." },
  { "name": "Gun Nut",                   "rank": 1,  "attribute_name": "INT",  "attribute_level": 3,   "character_level":0,   "description": "You gain access to base level and Rank 1 gun mods" },
  { "name": "Gun Nut",                   "rank": 2,  "attribute_name": "INT",  "attribute_level": 3,   "character_level":13,  "description": "You gain access to Rank 2 gun mods" },
  { "name": "Gun Nut",                   "rank": 3,  "attribute_name": "INT",  "attribute_level": 3,   "character_level":25,  "description": "You gain access to Rank 3 gun mods" },
  { "name": "Gun Nut",                   "rank": 4,  "attribute_name": "INT",  "attribute_level": 3,   "character_level":39,  "description": "You gain access to Rank 4 gun mods" },
  { "name": "Hacker",                    "rank": 1,  "attribute_name": "INT",  "attribute_level": 4,   "character_level":0,   "description": "Knowledge of cutting-edge computer encryption allows you to hack Advanced terminals" },
  { "name": "Hacker",                    "rank": 2,  "attribute_name": "INT",  "attribute_level": 4,   "character_level":9,   "description": "You can hack Expert terminals." },
  { "name": "Hacker",                    "rank": 3,  "attribute_name": "INT",  "attribute_level": 4,   "character_level":21,  "description": "You can hack Master terminals." },
  { "name": "Hacker",                    "rank": 4,  "attribute_name": "INT",  "attribute_level": 4,   "character_level":33,  "description": "When hacking,                                                                                                                                                         you never get locked out of a terminal when things go wrong." },
  { "name": "Scrapper",                  "rank": 1,  "attribute_name": "INT",  "attribute_level": 5,   "character_level":0,   "description": "Waste not,                                                                                                                                                            want not! You can salvage uncommon components like screws,                                                               aluminum,                                                                                                and copper when scrapping weapons and armor." },
  { "name": "Scrapper",                  "rank": 2,  "attribute_name": "INT",  "attribute_level": 5,   "character_level":23,  "description": "You can salvage rare components like circuitry,                                                                                                                       nuclear material,                                                                                                        and fiber optics when scrapping weapons and armor. Items with favorited components are highlighted." },
  { "name": "Science!",                  "rank": 1,  "attribute_name": "INT",  "attribute_level": 6,   "character_level":0,   "description": "Take full advantage of advanced technology with access to base level and Rank 1 high-tech mods." },
  { "name": "Science!",                  "rank": 2,  "attribute_name": "INT",  "attribute_level": 6,   "character_level":17,  "description": "You gain access to Rank 2 high-tech mods." },
  { "name": "Science!",                  "rank": 3,  "attribute_name": "INT",  "attribute_level": 6,   "character_level":28,  "description": "You gain access to Rank 3 high-tech mods." },
  { "name": "Science!",                  "rank": 4,  "attribute_name": "INT",  "attribute_level": 6,   "character_level":41,  "description": "You gain access to Rank 4 high-tech mods." },
  { "name": "Chemist",                   "rank": 1,  "attribute_name": "INT",  "attribute_level": 7,   "character_level":0,   "description": "Any chems you take last 50% longer. Far out." },
  { "name": "Chemist",                   "rank": 2,  "attribute_name": "INT",  "attribute_level": 7,   "character_level":16,  "description": "Any chems you take now last twice as long." },
  { "name": "Chemist",                   "rank": 3,  "attribute_name": "INT",  "attribute_level": 7,   "character_level":32,  "description": "Any chems you take now last an additional 150% longer." },
  { "name": "Chemist",                   "rank": 4,  "attribute_name": "INT",  "attribute_level": 7,   "character_level":45,  "description": "Any chems you take now last an additional 200% longer." },
  { "name": "Robotics Expert",           "rank": 1,  "attribute_name": "INT",  "attribute_level": 8,   "character_level":0,   "description": "Machines will always serve humans,                                                                                                                                    if you have anything to say about it. Hack a robot,                                                                      and gain a chance to power it on or off,                                                                 or initiate a self-destruct." },
  { "name": "Robotics Expert",           "rank": 2,  "attribute_name": "INT",  "attribute_level": 8,   "character_level":19,  "description": "When you successfully hack a robot,                                                                                                                                   you can incite it to attack." },
  { "name": "Robotics Expert",           "rank": 3,  "attribute_name": "INT",  "attribute_level": 8,   "character_level":44,  "description": "When you successfully hack a robot,                                                                                                                                   you can give it specific commands." },
  { "name": "Nuclear Physicist",         "rank": 1,  "attribute_name": "INT",  "attribute_level": 9,   "character_level":0,   "description": "You've learned to split the atom... and command it. Radiation weapons do 50% more damage and Fusion Cores last an extra 25% longer." },
  { "name": "Nuclear Physicist",         "rank": 2,  "attribute_name": "INT",  "attribute_level": 9,   "character_level":14,  "description": "Radiation weapons now do double damage and Fusion Cores last an extra 50% longer." },
  { "name": "Nuclear Physicist",         "rank": 3,  "attribute_name": "INT",  "attribute_level": 9,   "character_level":26,  "description": "Fusion Cores can be ejected from Power Armor like devastating grenades and Fusion Cores last twice as long." },
  { "name": "Nerd Rage!",                "rank": 1,  "attribute_name": "INT",  "attribute_level": 10,  "character_level":0,   "description": "Genius. Is. ANGRY! When your Health drops below 20%,                                                                                                                  time slows and you gain +20 Damage resistance and do 20% more damage while the effect lasts." },
  { "name": "Nerd Rage!",                "rank": 2,  "attribute_name": "INT",  "attribute_level": 10,  "character_level":31,  "description": "You now gain 30 more Damage Resistance and do 30% more damage while Nerd Rage is in effect." },
  { "name": "Nerd Rage!",                "rank": 3,  "attribute_name": "INT",  "attribute_level": 10,  "character_level":50,  "description": "You now gain 40 more Damage Resistance and do 40% more damage while Nerd Rage is in effect. Kills you make while enraged restore some lost Health." },
  { "name": "Gunslinger",                "rank": 1,  "attribute_name": "AGI",  "attribute_level": 1,   "character_level":0,   "description": "Channel the spirit of the old west! Non-automatic pistols do 20% more damage." },
  { "name": "Gunslinger",                "rank": 2,  "attribute_name": "AGI",  "attribute_level": 1,   "character_level":7,   "description": "Non-automatic pistols now do 40% more damage and have increased range." },
  { "name": "Gunslinger",                "rank": 3,  "attribute_name": "AGI",  "attribute_level": 1,   "character_level":15,  "description": "Non-automatic pistols now do 60% more damage and range is increased even further." },
  { "name": "Gunslinger",                "rank": 4,  "attribute_name": "AGI",  "attribute_level": 1,   "character_level":27,  "description": "Non-automatic pistols now do 80% more damage and their attacks can disarm opponents." },
  { "name": "Gunslinger",                "rank": 5,  "attribute_name": "AGI",  "attribute_level": 1,   "character_level":42,  "description": "Non-automatic pistols now do double damage. Their attacks have a much better chance to disarm opponents,                                                              and may even cripple a limb." },
  { "name": "Commando",                  "rank": 1,  "attribute_name": "AGI",  "attribute_level": 2,   "character_level":0,   "description": "Rigorous combat training means automatic weapons do 20% more damage" },
  { "name": "Commando",                  "rank": 2,  "attribute_name": "AGI",  "attribute_level": 2,   "character_level":11,  "description": "Attacks with automatic weapons do 40% more damage,                                                                                                                    with improved hip fire accuracy." },
  { "name": "Commando",                  "rank": 3,  "attribute_name": "AGI",  "attribute_level": 2,   "character_level":21,  "description": "Attacks with automatic weapons do 60% more damage. Hip fire accuracy is improved even more." },
  { "name": "Commando",                  "rank": 4,  "attribute_name": "AGI",  "attribute_level": 2,   "character_level":35,  "description": "Attacks with automatic weapons do 80% more damage and gain a chance to stagger opponents." },
  { "name": "Commando",                  "rank": 5,  "attribute_name": "AGI",  "attribute_level": 2,   "character_level":49,  "description": "Your automatic weapons now do double damage and have a greater chance to stagger opponents." },
  { "name": "Sneak",                     "rank": 1,  "attribute_name": "AGI",  "attribute_level": 3,   "character_level":0,   "description": "Become whisper,                                                                                                                                                       become shadow. You are 20% harder to detect while sneaking." },
  { "name": "Sneak",                     "rank": 2,  "attribute_name": "AGI",  "attribute_level": 3,   "character_level":5,   "description": "You are now 30% harder to detect while sneaking,                                                                                                                      and no longer trigger floor-based traps." },
  { "name": "Sneak",                     "rank": 3,  "attribute_name": "AGI",  "attribute_level": 3,   "character_level":12,  "description": "You are now 40% harder to detect while sneaking,                                                                                                                      and no longer trigger enemy mines." },
  { "name": "Sneak",                     "rank": 4,  "attribute_name": "AGI",  "attribute_level": 3,   "character_level":23,  "description": "You are now 50% harder to detect while sneaking,                                                                                                                      and running no longer adversely affects stealth." },
  { "name": "Sneak",                     "rank": 5,  "attribute_name": "AGI",  "attribute_level": 3,   "character_level":38,  "description": "Engaging stealth causes distant enemies to lose you." },
  { "name": "Mister Sandman",            "rank": 1,  "attribute_name": "AGI",  "attribute_level": 4,   "character_level":0,   "description": "As an agent of death,                                                                                                                                                 you can instantly kill a sleeping person. Your silenced weapons do an additional 15% sneak attack damage." },
  { "name": "Mister Sandman",            "rank": 2,  "attribute_name": "AGI",  "attribute_level": 4,   "character_level":17,  "description": "Your silenced weapons do an additional 30% sneak attack damage." },
  { "name": "Mister Sandman",            "rank": 3,  "attribute_name": "AGI",  "attribute_level": 4,   "character_level":30,  "description": "Your silenced weapons now do 50% more sneak attack damage." },
  { "name": "Action Boy/Action Girl",    "rank": 1,  "attribute_name": "AGI",  "attribute_level": 5,   "character_level":0,   "description": "There's no time to waste! Action Points regenerate 25% faster." },
  { "name": "Action Boy/Action Girl",    "rank": 2,  "attribute_name": "AGI",  "attribute_level": 5,   "character_level":18,  "description": "Your Action Points now regenerate 50% faster." },
  { "name": "Moving Target",             "rank": 1,  "attribute_name": "AGI",  "attribute_level": 6,   "character_level":0,   "description": "They can't hurt what they can't hit! Get 25+ Damage Resistance and 25+ Energy Resistance when you're sprinting." },
  { "name": "Moving Target",             "rank": 2,  "attribute_name": "AGI",  "attribute_level": 6,   "character_level":24,  "description": "You now get +50 Damage Resistance and +50 Energy Resistance when you're sprinting." },
  { "name": "Moving Target",             "rank": 3,  "attribute_name": "AGI",  "attribute_level": 6,   "character_level":44,  "description": "Sprinting costs 50% fewer Action Points." },
  { "name": "Ninja",                     "rank": 1,  "attribute_name": "AGI",  "attribute_level": 7,   "character_level":0,   "description": "Trained as a shadow warrior,                                                                                                                                          your ranged sneak attack do 2.5x normal damage and your melee attacks do 4x normal damage." },
  { "name": "Ninja",                     "rank": 2,  "attribute_name": "AGI",  "attribute_level": 7,   "character_level":16,  "description": "Your ranged sneak attacks do 3x normal damage and your melee sneak attacks do 5x normal damage." },
  { "name": "Ninja",                     "rank": 3,  "attribute_name": "AGI",  "attribute_level": 7,   "character_level":33,  "description": "Your ranged sneak attacks do 3.5x normal damage and your melee sneak attacks do 10x normal damage." },
  { "name": "Quick Hands",               "rank": 1,  "attribute_name": "AGI",  "attribute_level": 8,   "character_level":0,   "description": "In combat,                                                                                                                                                            there's no time to hesitate. You can reload all guns faster." },
  { "name": "Quick Hands",               "rank": 2,  "attribute_name": "AGI",  "attribute_level": 8,   "character_level":28,  "description": "Reloading guns costs no Action Points in V.A.T.S." },
  { "name": "Blitz",                     "rank": 1,  "attribute_name": "AGI",  "attribute_level": 9,   "character_level":0,   "description": "Find the gap and make the tackle! V.A.T.S. melee distance is increased significantly." },
  { "name": "Blitz",                     "rank": 2,  "attribute_name": "AGI",  "attribute_level": 9,   "character_level":29,  "description": "V.A.T.S. melee distance is increased even more,                                                                                                                       and the farther the Blitz distance,                                                                                      the greater the damage." },
  { "name": "Gun Fu",                    "rank": 1,  "attribute_name": "AGI",  "attribute_level": 10,  "character_level":0,   "description": "You've learned to apply ancient martial arts to gunplay! Do 25% more damage to your second V.A.T.S. target and beyond." },
  { "name": "Gun Fu",                    "rank": 2,  "attribute_name": "AGI",  "attribute_level": 10,  "character_level":26,  "description": "In V.A.T.S. you do 50% more damage to your third target and beyond." },
  { "name": "Gun Fu",                    "rank": 3,  "attribute_name": "AGI",  "attribute_level": 10,  "character_level":50,  "description": "In V.A.T.S. you instantly do a Critical Hit against your fourth target and beyond." },
  { "name": "Fortune Finder",            "rank": 1,  "attribute_name": "LCK",  "attribute_level": 1,   "character_level":0,   "description": "You find more bottle caps in containers." },
  { "name": "Fortune Finder",            "rank": 2,  "attribute_name": "LCK",  "attribute_level": 1,   "character_level":5,   "description": "You find even more bottle caps in containers." },
  { "name": "Fortune Finder",            "rank": 3,  "attribute_name": "LCK",  "attribute_level": 1,   "character_level":25,  "description": "You find even more bottle caps in containers." },
  { "name": "Fortune Finder",            "rank": 4,  "attribute_name": "LCK",  "attribute_level": 1,   "character_level":40,  "description": "You find even more bottle caps in containers,                                                                                                                         and there is a chance of enemies exploding into a shower of caps when you kill them." },
  { "name": "Scrounger",                 "rank": 1,  "attribute_name": "LCK",  "attribute_level": 2,   "character_level":0,   "description": "You find more ammunition in containers." },
  { "name": "Scrounger",                 "rank": 2,  "attribute_name": "LCK",  "attribute_level": 2,   "character_level":7,   "description": "You find even more ammunition in containers." },
  { "name": "Scrounger",                 "rank": 3,  "attribute_name": "LCK",  "attribute_level": 2,   "character_level":24,  "description": "You find even more ammunition in containers." },
  { "name": "Scrounger",                 "rank": 4,  "attribute_name": "LCK",  "attribute_level": 2,   "character_level":37,  "description": "You find even more ammunition in containers." },
  { "name": "Bloody Mess",               "rank": 1,  "attribute_name": "LCK",  "attribute_level": 3,   "character_level":0,   "description": "+5% bonus damage means enemies will sometimes explode into a gory red paste. Watch out for flying eyeballs!" },
  { "name": "Bloody Mess",               "rank": 2,  "attribute_name": "LCK",  "attribute_level": 3,   "character_level":9,   "description": "You now inflict +10% damage in combat." },
  { "name": "Bloody Mess",               "rank": 3,  "attribute_name": "LCK",  "attribute_level": 3,   "character_level":31,  "description": "You now inflict +15% damage in combat." },
  { "name": "Bloody Mess",               "rank": 4,  "attribute_name": "LCK",  "attribute_level": 3,   "character_level":47,  "description": "When an enemy explodes,                                                                                                                                               nearby enemies may suffer the same fate." },
  { "name": "Mysterious Stranger",       "rank": 1,  "attribute_name": "LCK",  "attribute_level": 4,   "character_level":0,   "description": "Who is he? Why does he help? Who cares! The Mysterious Stranger will appear occasionally in V.A.T.S. to lend a hand,                                                  with deadly efficiency..." },
  { "name": "Mysterious Stranger",       "rank": 2,  "attribute_name": "LCK",  "attribute_level": 4,   "character_level":22,  "description": "The Mysterious Stranger appears more often in V.A.T.S." },
  { "name": "Mysterious Stranger",       "rank": 3,  "attribute_name": "LCK",  "attribute_level": 4,   "character_level":41,  "description": "The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent,                                                                                     there is a chance your Critical meter gets filled." },
  { "name": "Idiot Savant",              "rank": 1,  "attribute_name": "LCK",  "attribute_level": 5,   "character_level":0,   "description": "You're not stupid! Just... different. Randomly receive 3x XP from any action,                                                                                         and the lower your Intelligence,                                                                                         the greater the chance." },
  { "name": "Idiot Savant",              "rank": 2,  "attribute_name": "LCK",  "attribute_level": 5,   "character_level":11,  "description": "You now randomly receive 5x XP from any action. The lower your Intelligence,                                                                                          the greater the chance." },
  { "name": "Idiot Savant",              "rank": 3,  "attribute_name": "LCK",  "attribute_level": 5,   "character_level":34,  "description": "Randomly receiving bonus XP from any action may trigger 3x XP for all kills for a short period of time. The lower your Intelligence,                                  the greater the chance." },
  { "name": "Better Criticals",          "rank": 1,  "attribute_name": "LCK",  "attribute_level": 6,   "character_level":0,   "description": "Advanced training for enhanced combat effectiveness! Criticals do 50% more extra damage." },
  { "name": "Better Criticals",          "rank": 2,  "attribute_name": "LCK",  "attribute_level": 6,   "character_level":15,  "description": "Your criticals now do twice as much extra damage." },
  { "name": "Better Criticals",          "rank": 3,  "attribute_name": "LCK",  "attribute_level": 6,   "character_level":40,  "description": "Your criticals now do 2.5x as much extra damage." },
  { "name": "Critical Banker",           "rank": 1,  "attribute_name": "LCK",  "attribute_level": 7,   "character_level":0,   "description": "You're a patient battlefield tactician,                                                                                                                               and can save a Critical Hit,                                                                                             to be used in V.A.T.S. when you need it most." },
  { "name": "Critical Banker",           "rank": 2,  "attribute_name": "LCK",  "attribute_level": 7,   "character_level":17,  "description": "You can now save 2 Critical Hits,                                                                                                                                     to be used in V.A.T.S. when you need them the most." },
  { "name": "Critical Banker",           "rank": 3,  "attribute_name": "LCK",  "attribute_level": 7,   "character_level":43,  "description": "You can now save 3 Critical Hits,                                                                                                                                     to be used in V.A.T.S. when you need them the most. Banking a Critical has a chance to save an additional Critical." },
  { "name": "Grim Reaper's Sprint",      "rank": 1,  "attribute_name": "LCK",  "attribute_level": 8,   "character_level":0,   "description": "Death becomes you! Any kill in V.A.T.S. has a 15% chance to restore all Action Points." },
  { "name": "Grim Reaper's Sprint",      "rank": 2,  "attribute_name": "LCK",  "attribute_level": 8,   "character_level":19,  "description": "Any kill in V.A.T.S. now has a 25% chance to restore all Action Points." },
  { "name": "Grim Reaper's Sprint",      "rank": 3,  "attribute_name": "LCK",  "attribute_level": 8,   "character_level":46,  "description": "Any kill in V.A.T.S. has a 35% chance to restore all Action Points and refill your Critical meter." },
  { "name": "Four Leaf Clover",          "rank": 1,  "attribute_name": "LCK",  "attribute_level": 9,   "character_level":0,   "description": "Feeling Lucky? You should! Each hit in V.A.T.S. has a chance of filling your Critical meter." },
  { "name": "Four Leaf Clover",          "rank": 2,  "attribute_name": "LCK",  "attribute_level": 9,   "character_level":13,  "description": "Each hit in V.A.T.S. now has an even better chance of filling your Critical meter." },
  { "name": "Four Leaf Clover",          "rank": 3,  "attribute_name": "LCK",  "attribute_level": 9,   "character_level":32,  "description": "Each hit in V.A.T.S. now has a very good chance of filling your Critical meter." },
  { "name": "Four Leaf Clover",          "rank": 4,  "attribute_name": "LCK",  "attribute_level": 9,   "character_level":48,  "description": "Each hit in V.A.T.S. now has an excellent chance of filling your Critical meter." },
  { "name": "Ricochet",                  "rank": 1,  "attribute_name": "LCK",  "attribute_level": 10,  "character_level":0,   "description": "What goes around comes around! Any enemy's ranged attacks will sometimes ricochet back and instantly kill them. The closer you are to death,                          the higher the chance." },
  { "name": "Ricochet",                  "rank": 2,  "attribute_name": "LCK",  "attribute_level": 10,  "character_level":29,  "description": "There's an increased chance that an enemy's shot will ricochet back and kill them." },
  { "name": "Ricochet",                  "rank": 3,  "attribute_name": "LCK",  "attribute_level": 10,  "character_level":50,  "description": "When an enemy's shot ricochets back and kills them,                                                                                                                   there is a chance your Critical meter gets filled." }
]
