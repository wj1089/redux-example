import React, {useState} from 'react';


const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const increase = () => ({type:INCREASE})
export const decrease = () => ({type:DECREASE})

const intialState = {
    number: 0
}
function counter(state, action){}
// -------------------------------------

//프로퍼티로 number, onIncrease, onDecrease를 jsx에 전달한다.
const CounterComponent = ({number, onIncrease, onDecrease}) => {
//()안에 그냥 넣어주면 state를 준게 아니다. //그래서 밖에 { }을 둘러준다.

    return (
        <>
            <h1>숫자 : {number}</h1>
            <br/>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    )
}

export default CounterComponent;