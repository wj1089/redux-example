import React,{useState} from 'react';
import {MDBBtn} from "mdbreact"


const Greeting = () => {
    const [message, setMessage] = useState("")
    const [color, setColor] = useState("")
    const onClickWelcome = () => setMessage("어서 오세요.")
    const onClickBye = () => setMessage("안녕히 가세요")
    const onClickRed =() => setColor("red") //자세히보면 store.dispatch가 생각된것을 알수가있다.
    const onClickGreen =() => setColor("green")
    const onClickBlue =() => setColor("blue")
    return (
        <>
            <MDBBtn color="default" onClick={onClickWelcome}>입장</MDBBtn>
            <MDBBtn color="default" onClick={onClickBye}>퇴장</MDBBtn>
            <h1 style={{color}}>{message}</h1>
            <MDBBtn color={"danger"}onClick={onClickRed}>적색글씨</MDBBtn>
            <MDBBtn color={"success"}onClick={onClickGreen}>녹색글씨</MDBBtn>
            <MDBBtn color={"primary"}onClick={onClickBlue}>청색글씨</MDBBtn>
        </>
    );
};
export default Greeting;