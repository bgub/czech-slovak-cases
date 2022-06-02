import { prepositions } from '../prepositions';

import { nounDeclension, declensionArray, gender } from '../types';

export let declensionList = ['1', '2', '3', '4', '4-m', '5', '6', '7'];

export function getPrepositions(
  desiredCase: '2' | '3' | '4' | '4-m' | '6' | '7',
  onlyDefault: boolean
) {
  return prepositions.filter(function (prep) {
    if (
      prep.case === desiredCase &&
      (!onlyDefault || (onlyDefault && prep.default))
    ) {
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

type config = { caseNumber: number; gender: gender; plural: boolean };

export function getItem(noun: declensionArray, config: config): string {
  let singleDec = config.plural ? noun[0] : noun[1];

  let dec = singleDec[config.caseNumber - 1];

  if (typeof dec === 'string') {
    return dec;
  } else {
    return dec[genderList[config.gender]];
  }
}

export function transformArray(
  config: config,
  inputArray: Array<declensionArray>
): Array<string> {
  let r = [];
  for (let i = 0; i < inputArray.length; i++) {
    r[i] = getItem(inputArray[i], config);
  }
  return r;
}
