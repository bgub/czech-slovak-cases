import { createNounDeclension } from '../utilities';

export var žena = createNounDeclension(
  'f',
  [
    ['žena', 'ženy', 'ženě', 'ženu', 'ženo!', 'ženě', 'ženou'],
    ['ženy', 'žen', 'ženám', 'ženy', 'ženy!', 'ženách', 'ženami/ama'],
  ],
  'woman',
  'women'
);

export var růže = createNounDeclension(
  'f',
  [
    ['růže', 'růže', 'růži', 'růži', 'růže!', 'růži', 'růží'],
    ['růže', 'růží', 'růžím', 'růže', 'růže!', 'růžích', 'růžemi/ema'],
  ],
  'rose',
  'roses'
);

// add ulice

export var píseň = createNounDeclension(
  'f',
  [
    ['píseň', 'písně', 'písni', 'píseň', 'písni!', 'písni', 'písní'],
    ['písně', 'písní', 'písním', 'písně', 'písně!', 'písních', 'písněmi/ěma'],
  ],
  'song',
  'songs'
);

export var kost = createNounDeclension(
  'f',
  [
    ['kost', 'kosti', 'kosti', 'kost', 'kosti!', 'kosti', 'kostí'],
    ['kosti', 'kostí', 'kostem', 'kosti', 'kosti!', 'kostech', 'kostmi/ma'],
  ],
  'bone',
  'bones'
);
