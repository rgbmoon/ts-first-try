import React, { useState, useEffect, useMemo } from 'react';
import './App.css';


// не забыть сделать проверку на нечисло, желателньо прям во время ввода
const Calculator: React.FunctionComponent = () => {

  const [value_a, setValue] = useState('');

  //Отслеживаем событие
  const inputHandler = (event: 
    React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    } 
  
  //Переводим даные с инпута из строки в число
  const convertToNumber = (inputStringValue: string) => {
    const numericValue: number = Number(inputStringValue);
    return numericValue;
  }

  
  //Считаем результат
  const result = (input: string) => {
    const a: number = convertToNumber(input);
    if (isNaN(a)) {
      console.log('Залупа')
      return
    }
    return a**2;
  }
  

  return (
    <div className="Calculator">
      <div className="row">
        <input 
          type="text" 
          name="a" 
          value={result(value_a)} 
          onChange={inputHandler}
        /> 
        
        * X<sup>2</sup> + 
        
        <input 
          type="text" 
          name="b"
        /> 
        
        * X + 
        
        <input 
          type="text" 
          name="c"
        /> 
        
        = 0

      </div>
      <div className="row">
        <button>
          Посчитать
        </button>
      </div>
      <div className="row">
        <div>X1 = {value_a}</div>
        <div>X2 = {}</div>
      </div>
    </div>
  );
}

const App: React.FunctionComponent = () => {
  
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
