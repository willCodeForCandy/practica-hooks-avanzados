import React, { useEffect, useReducer, useRef, memo } from 'react';
import Button from '../Button/Button';
import {
  INITIAL_STATE,
  calculatorReducer,
} from '../../reducers/calculator/calculator.reducer';
import {
  getResult,
  makeOperation,
} from '../../reducers/calculator/calculator.action';
import List from '../List/List';

const operations = [
  { symbol: '+', action: 'SUM' },
  { symbol: '-', action: 'SUB' },
  { symbol: '×', action: 'MULT' },
  { symbol: '÷', action: 'DIV' },
  // { symbol: '=', action: 'RESULT' },
  // { symbol: 'C', action: 'RESET' },
];
const Calculator = memo(() => {
  const [state, dispatch] = useReducer(calculatorReducer, INITIAL_STATE);

  const calcInput = useRef(null);
  const { result, history } = state;
  useEffect(() => {
    if (calcInput.current) calcInput.current.focus();
  });
  return (
    <>
      {console.log('rendering calculator')}
      <div id="calculator">
        <input type="number" ref={calcInput} />
        <div className="container">
          {operations.map((operation, index) => (
            <Button
              key={index}
              onClick={() => {
                makeOperation(dispatch, calcInput, operation);
              }}
            >
              {operation.symbol}
            </Button>
          ))}
        </div>
        <div className="container">
          <Button
            onClick={() => getResult(dispatch, calcInput)}
            className="red"
          >
            =
          </Button>
        </div>
        <p>Último resultado: {result}</p>
      </div>
      <List title="Historial de resultados" list={history} />
    </>
  );
});

export default Calculator;

// Ahora vamos a crear un nuevo componente que será un componente Hijo de App.jsx.

// Le podemos llamar Calculator.

// No lo vamos a maquetar mucho pero vamos a hacer la funcionalidad de una calculadora de la manera más sencilla posible y sin utilizar useState.

// La manera de usar esta calculadora será la siguiente:

// 1️⃣ Introduces un número en el input

// 2️⃣ Eliges una operación y automáticamente el input se limpia para que puedas escribir el segundo número

// 3️⃣ Introduces el segundo número en el input

// 4️⃣ Le das al botón "=", esto provocará varias cosas:

// - Se limpia el input ✅

// - Se calcula el resultado ✅

// - Se guarda el resultado en un array de históricos ✅

// - Se muestra el resultado en último resultado ✅

// - Se ordenan los resultados históricos mostrándolos de menor a mayor ✅

// - Nos permite volver a repetir el proceso (limpiaremos valores) ✅
