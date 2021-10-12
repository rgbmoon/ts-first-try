import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

type InputProps = {
  onChange: any;
  value: string;
  name: string;
};

const Input = (props: InputProps) => {
  return(
    <input 
      type="text" 
      name={props.name} 
      value={props.value}
      onChange={props.onChange}
    />
  );
}


const Calculator = () => {

  //Прописываем состояние дочерним элементам через хуки.
  const [state, setState] = useState({
    a: '',
    b: '',
    c: '',
  });

  //Отслеживаем ввод и проверяем ввод на валидность
  const inputHandler = (event: any) => {
    if (!isNaN(Number(event.target.value))) {
      setState(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    }
  } 


  const calculate = (inputValues: object) => {

  }
  

  return (
    <div className="Calculator">
      <div className="row">
        <Input 
          name='a'
          value={state.a} 
          onChange={inputHandler}/> * X<sup>2</sup> +
        <Input 
          name='b'
          value={state.b} 
          onChange={inputHandler}/> * X +
        <Input 
          name='c'
          value={state.c} 
          onChange={inputHandler}/> = 0
      </div>
      <div className="row">
        <button>
          Посчитать
        </button>
      </div>
      <div className="row">
        <div>X1 = {[state.a, state.b, state.c]}</div>
        <div>X2 = {}</div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;

