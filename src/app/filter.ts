export class Filter {
  constructor(options) {
    for (var option in options)
      this[option] = options[option]
  }

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
