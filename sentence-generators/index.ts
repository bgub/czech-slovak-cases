import { prepositions } from '../prepositions';
import { allNouns, první, malý, to, všechno } from '../declension-patterns';

import {
  declensionList,
  declensionToNumber,
  getDefaultPreposition,
} from './tools';

import { nounDeclension, declensionArray, gender } from '../types';

let gList = {
  ma: 0,
  mi: 1,
  n: 2,
  f: 3,
};

function getItem(
  number: number,
  gender: gender,
  noun: declensionArray,
  plural: boolean
) {
  if (plural) {
    number += 7;
  }

  console.log(number);
  console.log(noun);

  let dec = noun[number - 1];
  console.log(dec);

  if (typeof dec === 'string') {
    return dec;
  } else {
    return dec[gList[gender]];
  }
}

let getTo = (noun: nounDeclension, number: number, plural: boolean) =>
  getItem(number, noun.gender, toDec, plural);

let getPrvní = (noun: nounDeclension, number: number, plural: boolean) =>
  getItem(number, noun.gender, první, plural);

let getNoun = (noun: nounDeclension, number: number, plural: boolean) =>
  getItem(number, noun.gender, noun.caseArray, plural);

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
