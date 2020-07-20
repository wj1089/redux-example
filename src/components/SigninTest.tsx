import React, {useState, useEffect} from 'react';
import {connect} from "react-redux"

//FC를 거는건 Hook을 걸기위해 적는것이다.
//Provider를 쓸때는 리덕스
//Provider가 없을때 리액트
const SignTest:React.FC = () => {
    const [userid, setUserid] = useState("")//[userid, setUserid] 뒤에있는 놈이 store에 행동함수
    const [password, setPassword] = useState("")//store. set.......이런식이다.
    useEffect(()=>{
        alert(`ID변화만 체크합니다 --> ${userid}`)
    },[])

    const onChangeName = e => setUserid(e.target.value)
    const onChangePassword = e =>setPassword(e.target.value)

    return (
        <>
            <div>
                <input type="text"value={userid} onChange={onChangeName}/>
                <input type="text"value={password} onChange={onChangePassword}/>
            </div>
            <div>
                <b>아이디 : </b> {userid}<br/>
                <b>비밀번호 : </b> {password}<br/>

            </div>
        </>
    );
};

export default SignTest;