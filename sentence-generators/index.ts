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
  declensionArray,
  declensionName,
  preposition,
  gender,
} from '../types';

let [první, malý] = basicAdjectives;

let onlyUseDefault = false;

type comboType = [
  preposition | '',
  declensionArray,
  declensionArray,
  nounDeclension,
  boolean,
  number
];

export function generateSimpleSentences() {
  let res: Array<comboType> = [];

  for (let dec of declensionList) {
    let declensionNumber = declensionToNumber(dec);

    if (declensionNumber !== 1 && declensionNumber !== 5) {
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

      res.push(combos);
    }
  }

  let newRes = res.map((sent) => [
    sent[0] === '' ? '' : sent[0].preposition,
    getItem(sent[1], {
      caseNumber: sent[5],
      gender: sent[3].gender,
      plural: sent[4],
    }),
    getItem(sent[2], {
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
  console.log(res);
  return res;
}
