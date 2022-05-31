import { žena } from './feminine';
import { muž } from './masculine';
import { první, malý } from './adjectives';
import { to, všechno } from './demonstratives';
import { nounDeclension } from '../types';

export function generateSimpleSentence(
  declension: number,
  noun: nounDeclension
) {
  if (declension === 3) {
    return 'díky ' + první[2][0] + ' ' + noun.caseArray[2];
  }
}
