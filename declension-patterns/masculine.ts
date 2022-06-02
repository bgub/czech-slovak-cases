import { createDeclension } from '../utilities';

export let pán = createDeclension(
  'ma',
  [
    ['pán', 'pána', 'pánu/ovi', 'pána', 'páne!', 'pánu/ovi', 'pánem'],
    ['páni/ové', 'pánů', 'pánům', 'pány', 'páni/ové!', 'pánech', 'pány/ama'],
  ],
  'lord',
  'lords'
);

export let hrad = createDeclension(
  'mi',
  [
    ['hrad', 'hradu', 'hradu', 'hrad', 'hrade!', 'hradě/u', 'hradem'],
    ['hrady', 'hradů', 'hradům', 'hrady', 'hrady!', 'hradech', 'hrady/ama'],
  ],
  'castle',
  'castles'
);

export let muž = createDeclension(
  'ma',
  [
    ['muž', 'muže', 'muži/ovi', 'muže', 'muži!', 'muži/ovi', 'mužem'],
    ['muži', 'mužů', 'mužům', 'muže', 'muži!', 'mužích', 'muži/ema'],
  ],
  'man',
  'men'
);

export let soudce = createDeclension(
  'ma',
  [
    [
      'soudce',
      'soudce',
      'soudci/ovi',
      'soudce',
      'soudce!',
      'soudci/ovi',
      'soudcem',
    ],
    [
      'soudci/ové',
      'soudců',
      'soudcům',
      'soudce',
      'soudci/ovi!',
      'soudcích',
      'soudci/ema',
    ],
  ],
  'man',
  'men'
);

export let stroj = createDeclension(
  'mi',
  [
    ['stroj', 'stroje', 'stroji', 'stroj', 'stroji!', 'stroji', 'strojem'],
    [
      'stroje',
      'strojů',
      'strojům',
      'stroje',
      'stroje!',
      'strojích',
      'stroji/ema',
    ],
  ],
  'machine',
  'machines'
);

export let předseda = createDeclension(
  'ma',
  [
    [
      'předseda',
      'předsedy',
      'předsedovi',
      'předsedu',
      'předsedo!',
      'předsedovi',
      'předsedou',
    ],
    [
      'předsedové',
      'předsedů',
      'předsedům',
      'předsedy',
      'předsedové!',
      'předsedech',
      'předsedy/ama',
    ],
  ],
  'chairman',
  'chairmen'
);
