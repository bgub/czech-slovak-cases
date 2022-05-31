export type singleDeclension = string | [string, string, string, string];

type singleDeclensionArray = [
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension
];

export type fullDeclensionArray = [
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension
];

export type declensionArray = singleDeclensionArray | fullDeclensionArray;

export type gender = 'ma' | 'mi' | 'n' | 'f';

export type nounDeclension = {
  gender: gender;
  caseArray: declensionArray;
  definition: string;
  plural?: string;
  objectiveCase?: string;
};
