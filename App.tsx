import * as React from 'react';
import './style.css';

import { generateSimpleSentences } from './sentence-generators';

let res = generateSimpleSentences();

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
      {' '}
      <h1>Hello StackBlitz!</h1>
      <div>{arrayLoop(res)}</div>
    </div>
  );
}
