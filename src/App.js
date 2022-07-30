import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Circles from './components/Circles';
import Button from './components/Button';
import InputField from './components/InputField';
import data from './data-4321.json';
import record from './data-1234.json'; 

function App() {
  const[mean, setMean] = useState(0);
  const[mode, setMode] = useState(0);
  const[median, setMedian] = useState(0);
  const[stdDeviation, setStdDeviation] = useState(0);
  const[input, setInput] = useState(null);
  const[is1234Click, setIs1234Click] = useState(false);

  const onSubmit = () => {
    data.map((currentValue) => currentValue.data.push(input));
    setInput('');
  }

  const get4321 = () => {
    // Mean
    const average = data.map((currentValue) => currentValue.data.reduce((acc, currentVal, index, array) => {
      acc += currentVal;
      if ((array.length - 1) === index){
        acc = (acc / array.length).toFixed(6);
      }
      return acc;
    } ) );

    // Median
    let medianOfArray = 0;
    const sortedArray = data.map((currentValue) => currentValue.data.map((curValue) => curValue));

    let flattenArray = sortedArray.flat(1).sort();
    let lengthOfArray = sortedArray.flat(1).length;
    console.log('get4321', lengthOfArray);

    if (lengthOfArray % 2 !== 0) {
      const medianIndex = Math.floor((lengthOfArray)/2);
      medianOfArray = (flattenArray[medianIndex]).toFixed(6);
    } else {
      const medianIndex = ((lengthOfArray)/2);
      medianOfArray = ((flattenArray[medianIndex-1] + flattenArray[medianIndex])/2).toFixed(6);
    }

    //Standard Deviation
    const NumeratorOfStdDeviation = flattenArray.reduce((acc, curValue) => (
      acc += Math.pow((curValue - average), 2)
    ));

    const standardDeviation = (Math.sqrt(NumeratorOfStdDeviation/flattenArray.length)).toFixed(6);

    // Mode
    const obj = {};
    flattenArray.forEach(number => {
      if (!obj[number]) {
        obj[number] = 1;
      } else {
        obj[number] += 1;
      }
    })

    // return object key with highest value
    let highestValue = 0;
    let highestValueKey = -Infinity;

    for (let key in obj) {
      const value = obj[key];
      if (value >= highestValue && Number(key) > highestValueKey) {
        highestValue = value;
        highestValueKey = Number(key);
      }
    }

    setStdDeviation(standardDeviation);
    setMedian(medianOfArray);
    setMean(average);
    setMode((Number(highestValueKey)).toFixed(6));
    setIs1234Click(false);
  }

  const get1234 = () => {
    // Mean
    const average = record.map((currentValue) => currentValue.data.reduce((acc, currentVal, index, array) => {
      acc += currentVal;
      if ((array.length - 1) === index){
        acc = (acc / array.length).toFixed(6);
      }
      return acc;
    } ) );

    // Median
    let medianOfArray = 0;
    const sortedArray = record.map((currentValue) => currentValue.data.map((curValue) => curValue));

    let flattenArray = sortedArray.flat(1).sort();
    let lengthOfArray = sortedArray.flat(1).length;
    console.log('get1234', lengthOfArray);
    if (lengthOfArray % 2 !== 0) {
      const medianIndex = Math.floor((lengthOfArray)/2);
      medianOfArray = (flattenArray[medianIndex]).toFixed(6);
    } else {
      const medianIndex = (lengthOfArray)/2;
      medianOfArray = ((flattenArray[medianIndex - 1] + flattenArray[medianIndex])/2).toFixed(6);
    }
    
    //Standard Deviation
    const NumeratorOfStdDeviation = flattenArray.reduce((acc, curValue) => (
      acc += Math.pow((curValue - average), 2)
    ));

    const standardDeviation = (Math.sqrt(NumeratorOfStdDeviation/flattenArray.length)).toFixed(6);

    // Mode
    const obj = {};
    flattenArray.forEach(number => {
      if (!obj[number]) {
        obj[number] = 1;
      } else {
        obj[number] += 1;
      }
    })

    // return object key with highest value
    let highestValue = 0;
    let highestValueKey = -Infinity;

    for (let key in obj) {
      const value = obj[key];
      if (value >= highestValue && Number(key) > highestValueKey) {
        highestValue = value;
        highestValueKey = Number(key);
      }
    }

    setStdDeviation(standardDeviation);
    setMedian(medianOfArray);
    setMean(average);
    setMode((Number(highestValueKey)).toFixed(6));
    setIs1234Click(true);
  }

  return (
    <Home>
      <Header>
        <Circles heading={'Mean'} value={mean}/>
        <Circles heading={'Median'} value={median}/>
        <Circles heading={'Std Deviation'} value={stdDeviation}/>
        <Circles heading={'Mode'} value={mode}/>
      </Header>
      <Footer>
        {/* <InputField onClick={onSubmit} value={input}/> */}
        <Buttons>
          <Button text={'Reload JSON-1234 Data'} onClick={get1234}/>
          <Button text={'Reload JSON-4321 Data'} onClick={get4321} />
        </Buttons>
      </Footer>
    </Home>
  );
}

export default App;

const Home = styled.div`
  margin: 0px;
  padding: 0px;
`;

const Header = styled.div`
  background-color: #0088BD;
  width: 100%;
  height: 50vh;
  display: flex;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    background-color: #0088BD;
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column; 
  }
`;

const Footer = styled.div`
  background-color: #000;
  width: 100%;
  height: 50vh;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 20%;
`;