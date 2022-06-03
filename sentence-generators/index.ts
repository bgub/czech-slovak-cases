import { prepositions } from '../prepositions';
import { allNouns, basicAdjectives, to, všechno } from '../declension-patterns';
import { cartesian } from '../utilities';

import {
  declensionList,
  genderList,
  getItem,
  declensionToNumber,
  getPrepositions,
} from './tools';

import {
  nounDeclension,
  declension,
  declensionArray,
  declensionName,
  preposition,
  gender,
} from '../types';

let [první, malý] = basicAdjectives;

let onlyUseDefault = false;

type comboType = [
  preposition | '',
  declension,
  declension,
  nounDeclension,
  boolean,
  number
];

export function generateSimpleSentences() {
  let res: Array<comboType> = [];

  for (let dec of declensionList) {
    let declensionNumber = declensionToNumber(dec);

    let possiblePreps = getPrepositions(dec, onlyUseDefault);
    let combos: comboType = cartesian([
      possiblePreps,
      [to],
      basicAdjectives,
      allNouns,
      [true, false],
      [declensionNumber],
    ]);

    console.log(combos);

    res = res.concat(combos);
  }

  let newRes = res.map((sent) => [
    sent[0] === '' ? '' : sent[0].preposition,
    getItem(sent[1].caseArray, {
      caseNumber: sent[5],
      gender: sent[3].gender,
      plural: sent[4],
    }),
    getItem(sent[2].caseArray, {
      caseNumber: sent[5],
      gender: sent[3].gender,
      plural: sent[4],
    }),
    getItem(sent[3].caseArray, {
      caseNumber: sent[5],
      gender: sent[3].gender,
      plural: sent[4],
    }),
  ]);

  console.log(newRes);
  console.log(newRes.length);
  return newRes;
}
