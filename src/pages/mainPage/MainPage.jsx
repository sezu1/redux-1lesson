import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function MainPage() {

    const dispatch = useDispatch();

    const {counter} = useSelector(store => store);



    function changeCounterPlus(incerement){
        dispatch({type: 'CHANGE_COUNTER_PLUS', payload: incerement });
    }

    function changeCounterMinus(discrement){
        dispatch({type: 'CHANGE_COUNTER_MINUS', payload: discrement});
    }


    return (
        <div>
            <h2>Main page</h2>
           <button onClick={changeCounterPlus}>+</button>
            {counter}
            <button onClick={changeCounterMinus}>-</button>

        </div>
    );
}

export default MainPage;