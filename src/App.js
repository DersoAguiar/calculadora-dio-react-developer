

import Input from './components/Input';
import Button from './components/Button';

import {Container, Content, Row} from './styles'
import { useState } from 'react'

const App = () => { 
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
 
  
  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  

  const deleteLastNumber = () => {
    if (currentNumber === '') {
      return;
    } else {
      const num = currentNumber.slice(0, -1)
      setCurrentNumber(num)
    }
    
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
    }
  }

  const handleTimesNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const times = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(times));
    }
  }

  const handleDividedByNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const dividedBy = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(dividedBy));
    }
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumbers()
          break;
        case '-':
          handleMinusNumbers()
          break;
        case '*':
          handleTimesNumbers()
          break;
        case '/':
          handleDividedByNumbers()
          break;
        default: break
      }
    } 
  }

  return (
   <Container>
    <Content>
      <Input value={currentNumber}/>
      <Row>
        <Button label="/" onClick={handleDividedByNumbers}/>
        <Button label="*" onClick={handleTimesNumbers}/>
        <Button label="-" onClick={handleMinusNumbers}/>
        <Button label="+" onClick={handleSumNumbers}/>
        <Button label="C" onClick={handleClear}/>
        <Button label="DEL" onClick={deleteLastNumber}/>
      </Row>
      <Row>        
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        
      </Row>
      <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        
      </Row>
      <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>        
      </Row>
      <Row>
        <Button label="0" onClick={() => handleAddNumber('0')}/>
        <Button label="." onClick={() => handleAddNumber('.')}/>        
        <Button label="=" onClick={handleEquals}/>
      </Row>      
    </Content>
   </Container>
  );

}
export default App;
