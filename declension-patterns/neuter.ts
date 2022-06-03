import { createNounDeclension } from '../utilities';

export let město = createNounDeclension(
  'n',
  [
    ['město', 'města', 'městu', 'město', 'město!', 'městě/u', 'městem'],
    ['města', 'měst', 'městům', 'města', 'města!', 'městech', 'městy/ama'],
  ],
  'city',
  'cities'
);

export let vízum = createNounDeclension(
  'n',
  [
    ['vízum', 'víza', 'vízu', 'vízum', 'vízum!', 'vízu', 'vízem'],
    ['víza', 'víz', 'vízům', 'víza', 'víza!', 'vízech', 'vízy/ama'],
  ],
  'visa',
  'visas'
);

export let moře = createNounDeclension(
  'n',
  [
    ['moře', 'moře', 'moři', 'moře', 'moře!', 'moři', 'mořem'],
    ['moře', 'moří', 'mořím', 'moře', 'moře!', 'mořích', 'moři/ema'],
  ],
  'sea',
  'seas'
);

export let stavení = createNounDeclension(
  'n',
  [
    [
      'stavení',
      'stavení',
      'stavení',
      'stavení',
      'stavení!',
      'stavení',
      'stavením',
    ],
    [
      'stavení',
      'stavení',
      'stavením',
      'stavení',
      'stavení!',
      'staveních',
      'staveními/íma',
    ],
  ],
  'building',
  'buildings'
);

export let kuře = createNounDeclension(
  'n',
  [
    ['kuře', 'kuřete', 'kuřeti', 'kuře', 'kuře!', 'kuřeti', 'kuřetem'],
    [
      'kuřata',
      'kuřat',
      'kuřatům',
      'kuřata',
      'kuřata!',
      'kuřatech',
      'kuřaty/ama',
    ],
  ],
  'chick',
  'chicks'
);
