import type { declensionArray, gender, nounDeclension } from './types';

export function createDeclension(
  gender: gender,
  caseArray: declensionArray,
  definition: string,
  plural?: string,
  objectiveCase?: string
): nounDeclension {
  let newPlural = plural || definition + 's';

  if (caseArray.length != 14) {
    newPlural = 'NA';
  }

  return {
    gender: gender,
    caseArray: caseArray,
    definition: definition,
    plural: newPlural,
    objectiveCase: objectiveCase || definition,
  };
}
