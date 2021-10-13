import React, { useState, useMemo } from 'react';
import './App.css';

/*
2) Разобраться и заюзать хук useMemo
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

  //Храним тут состояние инпутов
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


  // С ТС я пока что так и не разобрался, поэтому пишу такие вот говноконструкции лишь бы избежать ошибок при сборке
  type calcProps = {
    a: string;
    b: string;
    c: string;
  }

  //Считаем корни уравнения и передаем их в свойства объекта state
  const calculate = (state: calcProps) => {

    console.log('Уравнение посчитано!');
    const a = Number(state.a);
    const b = Number(state.b);
    const c = Number(state.c);
    const d = (b * b - 4 * a * c);

    if (a === 0 || d < 0) {
      return 'корней нема';
    }
    
    if (d === 0) { 
      return 'X равен ' + ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2)
    }

    if (d > 0) {
      return (
      'X1 = ' + ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2) + '; ' +
      'X2 = ' + ((-b - Math.sqrt(d)) / (2 * a)).toFixed(2)
    )}
  }

  // Вот тут то мы и прикручиваем useMemo, но пока что оно как будто не работает, надо проверить
  const calс = useMemo(() => calculate(state), [state.a, state.b, state.c]);

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
          {calс}
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

