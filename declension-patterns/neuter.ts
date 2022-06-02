import { createDeclension } from '../utilities';

export let město = createDeclension(
  'n',
  [
    ['město', 'města', 'městu', 'město', 'město!', 'městě/u', 'městem'],
    ['města', 'měst', 'městům', 'města', 'města!', 'městech', 'městy/ama'],
  ],
  'city',
  'cities'
);

export let vízum = createDeclension(
  'n',
  [
    ['vízum', 'víza', 'vízu', 'vízum', 'vízum!', 'vízu', 'vízem'],
    ['víza', 'víz', 'vízům', 'víza', 'víza!', 'vízech', 'vízy/ama'],
  ],
  'visa',
  'visas'
);

export let moře = createDeclension(
  'n',
  [
    ['moře', 'moře', 'moři', 'moře', 'moře!', 'moři', 'mořem'],
    ['moře', 'moří', 'mořím', 'moře', 'moře!', 'mořích', 'moři/ema'],
  ],
  'sea',
  'seas'
);

export let stavení = createDeclension(
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

export let kuře = createDeclension(
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
