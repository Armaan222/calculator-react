import React, { useState } from 'react';
import './App.css';




function App() {
  const [value, setValue] = useState('0')
  const [isResult, setIsResult] = useState(false)

  const handleButtonClick = (num) => {
    if (isResult) {
      setValue(num)
      setIsResult(false);
    } else {
       setValue( (prev) => (prev === "0" ? num : prev + num));
    }
     
  };

  const handleDel = () => {
    setValue(value.length > 1 ? value.slice(0, -1): "0");
    setIsResult(false);
  };

  const handleClear = () => {
    setValue("0");
    setIsResult(false);
  }

  const calculatorEqul = () => {
    try { 
      setValue(eval(value).toString());
      setIsResult(true);

    } catch {
      setValue("Error")
      setIsResult(true);
    }
  }

  return (

    <div className="calculator">
    <div className='display'>
     {value}
    </div>
    <div className='buttons'> 
      <button className='special'  onClick={() => handleClear()}>
        AC
      </button>
      <button className='special' onClick={() => handleDel("Del")}>
        Del
      </button>
      <button className='special' onClick={() => handleButtonClick(".")}>
        .
      </button>
      <button className='special'  onClick={() => handleButtonClick("/")}>
        /
      </button>
    </div>
    <div className='buttons'>
    <button className='button' onClick={() => handleButtonClick("7")}>
        7
      </button>
    <button className='button'  onClick={() => handleButtonClick("8")}>
        8
      </button>
    <button className='button' onClick={() => handleButtonClick("9")}>
        9
      </button>
    <button className='special'  onClick={() => handleButtonClick("*")}>
        *
      </button>
    </div>
    <div className='buttons'>
    <button className='button'  onClick={() => handleButtonClick("4")}>
        4
      </button>
    <button className='button'  onClick={() => handleButtonClick("5")}>
        5
      </button>
    <button className='button'  onClick={() => handleButtonClick("6")}>
        6
      </button>
    <button className='special'  onClick={() => handleButtonClick("-")}>
        -
      </button>
    </div>
    <div className='buttons'>
    <button className='button'  onClick={() => handleButtonClick("1")}>
        1
      </button>
    <button className='button'  onClick={() => handleButtonClick("2")}>
        2
      </button>
    <button className='button'  onClick={() => handleButtonClick("3")}>
        3
      </button>
    <button className='special'  onClick={() => handleButtonClick("+")}>
        +
      </button>
    </div>
    <div className='buttons'>
    <button className='button'  onClick={() => handleButtonClick("0")}>
        0
      </button>
    <button className='button'  onClick={() => handleButtonClick(".")}>
        .
      </button>
    <button className='equl' onClick={calculatorEqul}>
        =
      </button>

    </div>
    </div>
      
  );
}

export default App;
