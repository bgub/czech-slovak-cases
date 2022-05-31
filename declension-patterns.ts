type singleDeclension = string | [string, string, string, string];

type declensionArray = [
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

type gender = 'ma' | 'mi' | 'n' | 'f';

var všechen: declensionArray = [
  ['všechen', 'všechen', 'všechno', 'všechna'],
  ['všeho', 'všeho', 'všeho', 'vší'],
  ['všemu', 'všemu', 'všemu', 'vší'],
  ['všeho', 'všechen', 'všechno', 'všechnu'],
  ['všechen', 'všechen', 'všechno', 'všechna'],
  ['všem', 'všem', 'všem', 'vší'],
  ['vším', 'vším', 'vším', 'vší'],
  ['všichni', 'všechny', 'všechna', 'všechny'],
  'všech',
  'všem',
  ['všechny', 'všechny', 'všechna', 'všechny'],
  ['všichni', 'všechny', 'všechna', 'všechny'],
  'všech',
  'všemi',
];

function createDeclension(
  gender: gender,
  caseArray: declensionArray,
  definition: string,
  plural?: string,
  objectiveCase?: string
) {
  return {
    gender: gender,
    caseArray: caseArray,
    definition: definition,
    plural: plural || definition + 's',
    objectiveCase: objectiveCase || definition,
  };
}

var žena = createDeclension(
  'f',
  [
    'žena',
    'ženy',
    'ženě',
    'ženu',
    'ženo!',
    'ženě',
    'ženou',
    'ženy',
    'žen',
    'ženám',
    'ženy',
    'ženy!',
    'ženách',
    'ženami/ama',
  ],
  'woman',
  'women'
);

var muž = createDeclension(
  'ma',
  [
    'muž',
    'muže',
    'muži/ovi',
    'muže',
    'muži!',
    'muži/ovi',
    'mužem',
    'muži',
    'mužů',
    'mužům',
    'muže',
    'muži!',
    'mužích',
    'muži/ema',
  ],
  'man',
  'men'
);

var první: declensionArray = [
  'první',
  ['prvního', 'prvního', 'prvního', 'první'],
  ['prvnímu', 'prvnímu', 'prvnímu', 'první'],
  ['prvního', 'první', 'první', 'první'],
  'první',
  ['prvním', 'prvním', 'prvním', 'první'],
  ['prvním', 'prvním', 'prvním', 'první'],
  'první',
  'prvních',
  'prvním',
  'první',
  'první',
  'prvních',
  'prvními/íma',
];
