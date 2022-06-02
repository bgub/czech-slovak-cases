import { prepositions } from '../prepositions';
import { allNouns, basicAdjectives, to, všechno } from '../declension-patterns';

import {
  declensionList,
  genderList,
  getItem,
  declensionToNumber,
  getPrepositions,
} from './tools';

import { nounDeclension, declensionArray, gender } from '../types';

let [první, malý] = basicAdjectives;

export function generateSimpleSentences() {
  let res = [];

  for (var i = 0; i < declensionList.length; i++) {
    let declensionNumber = declensionToNumber(declensionList[i]);
    console.log('declensionNumber ' + declensionNumber);

    if (declensionNumber !== 1 && declensionNumber !== 5) {
      let possiblePreps = getPrepositions(declensionList[i]);
    }
  }

  return res;
}
