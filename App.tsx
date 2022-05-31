import * as React from 'react';
import './style.css';
import { první, malý } from './declension-patterns/adjectives';
import { muž } from './declension-patterns/masculine';
import { generateSimpleSentence } from './declension-patterns';

let x = generateSimpleSentence(3, muž);

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :) {x}</p>
    </div>
  );
}
