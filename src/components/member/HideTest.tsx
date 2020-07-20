import React, {useState} from 'react';
import SignTest from "../SigninTest";


const HideTest:React.FC = () => {
    const [visible,setVisible] = useState(false)
    // const onClickHide =e=>{
    //     alert(`클릭했음`)
    // }
     return (
        <>
            <button onClick={()=>setVisible(!visible)}></button>
            {visible ? `숨기기`: `보이기`}
            <hr/>
            {visible && <SignTest/>}
        </>
    );
};

export default HideTest;