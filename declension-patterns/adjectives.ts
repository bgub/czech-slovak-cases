import type { declensionArray, singleDeclension } from '../types';

export var softEndings: declensionArray = [
  'í',
  ['ího', 'ího', 'ího', 'í'],
  ['ímu', 'ímu', 'ímu', 'í'],
  ['ího', 'í', 'í', 'í'],
  'í',
  ['ím', 'ím', 'ím', 'í'],
  ['ím', 'ím', 'ím', 'í'],
  'í',
  'ích',
  'ím',
  'í',
  'í',
  'ích',
  'ími/íma',
];

export var hardEndings: declensionArray = [
  ['ý', 'ý', 'é', 'á'],
  ['ého', 'ého', 'ého', 'é'],
  ['ému', 'ému', 'ému', 'é'],
  ['ého', 'ý', 'é', 'ou'],
  ['ý', 'ý', 'é', 'á'],
  ['ém', 'ém', 'ém', 'é'],
  ['ým', 'ým', 'ým', 'ou'],
  ['í', 'é', 'á', 'é'],
  'ých',
  'ým',
  ['é', 'é', 'á', 'é'],
  ['í', 'é', 'á', 'é'],
  'ých',
  'ými/ýma',
];

let adjectiveEndings = {
  soft: softEndings,
  hard: hardEndings,
};

function getAdjectiveDeclensions(adjectiveRoot: string, type: 'soft' | 'hard') {
  let endings = adjectiveEndings[type];

  let newArray = endings.map(function (item: string | singleDeclension) {
    if (typeof item === 'string') {
      return adjectiveRoot + item;
    } else {
      return item.map(function (innerEnding) {
        return adjectiveRoot + innerEnding;
      });
    }
  });

  return newArray;
}

export let první = getAdjectiveDeclensions('prvn', 'soft');
export let malý = getAdjectiveDeclensions('mal', 'hard');
