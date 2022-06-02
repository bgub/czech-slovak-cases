import { prepositions } from '../prepositions';

import { nounDeclension, declensionArray, gender } from '../types';

export let declensionList = ['1', '2', '3', '4', '4-m', '5', '6', '7'];

export function getDefaultPreposition(desiredCase: string) {
  return prepositions.find(function (prep) {
    if (prep.case === desiredCase && prep.default) {
      return true;
    }
  });
}

export let genderList = {
  ma: 0,
  mi: 1,
  n: 2,
  f: 3,
};

export function declensionToNumber(declensionName: string): number {
  let declensionNumberString = declensionName.replace(/[^1234567]/g, '');
  let declensionNumber = Number(declensionNumberString);
  return declensionNumber;
}

export function getItem(
  caseNumber: number,
  gender: gender,
  noun: declensionArray,
  plural: boolean
) {
  let singleDec = plural ? noun[0] : noun[1];

  let dec = singleDec[caseNumber - 1];

  if (typeof dec === 'string') {
    return dec;
  } else {
    return dec[genderList[gender]];
  }
}
