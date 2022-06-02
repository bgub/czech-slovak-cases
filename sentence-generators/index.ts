import { prepositions } from '../prepositions';
import { allNouns, basicAdjectives, to, všechno } from '../declension-patterns';

import {
  declensionList,
  genderList,
  getItem,
  declensionToNumber,
  getDefaultPreposition,
} from './tools';

import { nounDeclension, declensionArray, gender } from '../types';

let [první, malý] = basicAdjectives;

export function generateSimpleSentences(noun: nounDeclension) {
  let res = [];

  for (var i in declensionList) {
    let declensionName = declensionList[i];
    let declensionNumberString = declensionName.replace(/[^1234567]/g, '');
    let declensionNumber = Number(declensionNumberString);
    console.log('declensionNumberString ' + declensionNumberString);
    console.log('declensionNumber ' + declensionNumber);

    let tempEnglishRes = '';
    let tempCzechRes = '';

    // if (i !== '1' && i !== '5') {
    if (true) {
      tempEnglishRes =
        // getDefaultPreposition(declensionList[i]).preposition ||
        // 'foo' +
        // ' ' +
        getTo(noun, declensionNumber, false) +
        ' ' +
        getPrvní(noun, declensionNumber, false) +
        ' ' +
        getNoun(noun, declensionNumber, false);

      tempCzechRes =
        //getDefaultPreposition(declensionList[i]).english +
        ' ' + 'that' + ' ' + 'first' + ' ' + noun.objectiveCase;
    }

    res.push(tempEnglishRes + ' - ' + tempCzechRes);
  }

  return res;
}
