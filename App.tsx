import * as React from 'react';
import './style.css';
import { první, malý } from './declension-patterns/adjectives';
import { muž } from './declension-patterns/masculine';

import { žena } from './declension-patterns/feminine';

import { generateSimpleSentences } from './declension-patterns';

let x = generateSimpleSentences(muž);

let y = generateSimpleSentences(žena);

function arrayLoop(arr) {
  return (
    <React.Fragment>
      {Object.keys(arr).map((i) => (
        <p>{arr[i]}</p>
      ))}
    </React.Fragment>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{arrayLoop(x)}</p>
      <p>{arrayLoop(y)}</p>
    </div>
  );
}
