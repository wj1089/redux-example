import {createAction, handleAction} from "redux-actions"
import {number} from "prop-types";

const INCREASE = "increase/INCREASE"
const DECREASE = "decrease/DECREASE"
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)
const initialState = {number:0}
const countReducer = handleAction({
    [INCREASE]:(state,action)=>({number:state.number+1}),
    [DECREASE]:(state,action)=>({number:state.number-1})
},initialState)
export default countReducer



