import {createAction, handleAction} from 'redux-actions'
/*CHANG_INPUT, INSERT, TOGGLE, REMOVE*/

const CHANGE_INPUT = "changInput/CHANGE_INPUT"
const INSERT = "insert/INSERT"
const TOGGLE = "toggle/TOGGLE"
const REMOVE = "remove/REMOVE"

export const changInput = createAction(CHANGE_INPUT)
export const insert = createAction(INSERT)
export const toggle = createAction(TOGGLE)
export const remove = createAction(REMOVE)

const todoReducer = handleAction({
    [CHANGE_INPUT]:(state,action)=>({}),
    [INSERT]:(state,action)=>({}),
    [TOGGLE]:(state,action)=>({}),
    [REMOVE]:(state,action)=>({})
})
export default todoReducer


