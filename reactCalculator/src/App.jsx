import { useState } from 'react';
import './App.css';

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [op, setOp] = useState('');
  return (
    <div>
      <h1>Selecione o tipo de operação:</h1>
      <label>
        <button
          value={op}
          onClick={(e) => {
            e && setOp('soma');
          }}
        >
          Soma
        </button>
        <button
          value={op}
          onClick={(e) => {
            e && setOp('sub');
          }}
        >
          Subtração
        </button>
        <button
          value={op}
          onClick={(e) => {
            e && setOp('div');
          }}
        >
          Divisão
        </button>
        <button
          value={op}
          onClick={(e) => {
            e && setOp('mult');
          }}
        >
          Multiplicação
        </button>
      </label>
      <h1>insira o primeiro número:</h1>
      <input onChange={(e) => setNum1(e.target.value)} type='number' />
      <h4>{num1}</h4>
      <h1>insira o segundo número:</h1>
      <input onChange={(e) => setNum2(e.target.value)} type='number' />
      <h4>{num2}</h4>
      <h1>Result: {result}</h1>
      <button onClick={(e) => {
        (e && op === 'soma') && setResult(num1 + num2);
        (e && op === 'sub') && setResult(num1 - num2);
        (e && op === 'div') && setResult(num1 / num2);
        (e && op === 'mult') && setResult(num1 * num2);
      }}>
        <input type='submit' value='calcular' />
      </button>
    </div>
  );
};

export default App;
