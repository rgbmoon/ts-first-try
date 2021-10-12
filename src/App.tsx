import React, { useState, useEffect, useMemo } from 'react';
import './App.css';


/*
3) Посчитать уравнение и вывести X
*/

const Input = (props: AppProps) => {
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

  const [state, setState] = useState({
    a: '',
    b: '',
    c: '',
  });

  //Отслеживаем ввод
  const inputHandler = (event: any) => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
    } 


  // const prepearingData = (input: string) => {

  //   const num: number = Number(input); // Перевод данных инпута в число

  //   if (isNaN(num)) { // Проверка и отмена ввода невалидных символов
  //       setState('');
  //   }
  //   return;
  // }
  

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

const App: React.FunctionComponent = () => {
  
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;




type AppProps = {
  onChange: any;
  value: string;
  name: string;
};