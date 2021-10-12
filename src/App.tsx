import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

/*
1) Странно работает со значениями a=9 b=5,6,7 c=1Б после смены b и нажатия на кнопку сначала показывает один результат, а после повторного нажатия другой, надо понять почему так 
2) Разобраться и заюзать хук useMemo
3) Допилить калькулятор. Пока что нельзя вводить отрицательные коэффициенты
*/

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
    x_1: 0,
    x_2: 0,
    D: 0,
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

  //Считаем корни уравнения и выводим на страницу
  const calculate = () => {

    const a = Number(state.a);
    const b = Number(state.b);
    const c = Number(state.c);

    if (a === 0) {
      setState(prevState => ({
        ...prevState,
        D: -1
      }));
      return;
    }
    setState(prevState => ({
      ...prevState,
      D: (b * b - 4 * a * c),
    }));
    console.log('D =', state.D);
    if (state.D === 0) { 
      setState(prevState => ({
        ...prevState,
        x_1: (-b + Math.sqrt(state.D)) / (2 * a)
      }));
     }
    else if (state.D > 0) {
      setState(prevState => ({
        ...prevState,
        x_1: ((-b + Math.sqrt(state.D)) / (2 * a)),
        x_2: ((-b - Math.sqrt(state.D)) / (2 * a)),
      }));
    }
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
        <button onClick={() => calculate()}>
          Посчитать
        </button>
      </div>
      <div className="row">
        {state.D < 0 &&
          <div>D {'<'} 0, корней нет</div>
        }
        {state.D === 0 &&
          <div>X = {state.x_1.toFixed(2)}</div>
        }
        {state.D > 0 &&
          <div>X1 = {state.x_1.toFixed(2)}<br/>
          X2 = {state.x_2.toFixed(2)}</div>
        }
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

