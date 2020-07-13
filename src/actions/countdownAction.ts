import React from "react";

const countActions = dispatcher =>({
    tick(currentCount){
        dispatcher.handleAction({type: 'TICK'}) //property 작업(외부에서 값을 받아온다.)
    }, //Es6부터는 function을 생략할수가 있다.
    reset(count){
        dispatcher.handleAction({
            type: 'RESET',
            count
        })
    }
})
export default countActions


