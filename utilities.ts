import type { declensionArray, gender, nounDeclension } from './types';

export function createDeclension(
  gender: gender,
  caseArray: declensionArray,
  definition: string,
  plural?: string,
  objectiveCase?: string
): nounDeclension {
  let newPlural = plural || definition + 's';

  return {
    gender: gender,
    caseArray: caseArray,
    definition: definition,
    plural: newPlural,
    objectiveCase: objectiveCase || definition,
  };
}

export const cartesian = (a) =>
  a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
