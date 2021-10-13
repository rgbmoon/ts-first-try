import React, { useState, useMemo } from 'react';
import './App.css';

/*
1) Странно работает со значениями a=9 b=5,6,7 c=1. После смены b и нажатия на кнопку сначала показывает один результат, а после повторного нажатия другой, надо понять почему так 
2) Разобраться и заюзать хук useMemo
3) Сделать вывод ответа без кнопки, сразу после ввода аргументов
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
    d: 0,
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

  //Считаем корни уравнения и передаем их в свойства объекта state
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
    console.log('D =', state.d);
    if (state.d === 0) { 
      setState(prevState => ({
        ...prevState,
        x_1: (-b + Math.sqrt(state.d)) / (2 * a)
      }));
     }
    else if (state.d > 0) {
      setState(prevState => ({
        ...prevState,
        x_1: ((-b + Math.sqrt(state.d)) / (2 * a)),
        x_2: ((-b - Math.sqrt(state.d)) / (2 * a)),
      }));
    }
    console.log('a =', a,'b =', b,'c =', c,)
  }

  useMemo(() => calculate(), [state.a, state.b, state.c]);

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
      {/* <div className="row">
        <button onClick={() => calculate()}>
          Посчитать
        </button>
      </div> */}
      <div className="row">
        {state.d < 0 &&
          <div>D {'<'} 0, корней нет</div>
        }
        {state.d === 0 &&
          <div>X = {state.x_1.toFixed(2)}</div>
        }
        {state.d > 0 &&
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

