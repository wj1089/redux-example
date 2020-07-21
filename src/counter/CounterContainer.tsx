// import React from "react";
// import { connect } from 'react-redux'
// import CounterComponent from "./CounterComponent";
// import {increase, decrease} from "./CounterComponent";
//
// const CounterContainer = ({number, increase, decrease}) => {
//     return (
//         <CounterComponent number={number}
//                           onIncrease={increase}
//                           onDecrease={decrease}
//         />
//     )
// }
// export default connect(
//     state => ({
//         number: 0
//     }),
//     dispatch =>({
//         increase: ()=> dispatch(increase()),
//         decrease: ()=> dispatch(decrease())
//     })
// )(CounterContainer)

import React, {useCallback} from "react";
import { useSelector , useDispatch } from 'react-redux'
import CounterComponent  from "./CounterComponent";
import { increase, decrease } from "./counter.reducer";

const CounterContainer = () =>{
    const number = useSelector(state => state.countReducer.number)
    const dispatch = useDispatch()
    const onIncrease = useCallback(()=>dispatch(increase()),[dispatch])
    const onDecrease = useCallback(()=>dispatch(decrease()),[dispatch])
    return (
        <CounterComponent number={number} onDecrease={onDecrease} onIncrease={onIncrease}/>
    )
}
export default CounterContainer



