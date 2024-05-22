import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function MainPage() {

    const dispatch = useDispatch();

    const {counter} = useSelector(store => store);

    const plus = counter + 1;
    const minus = counter - 1;

    function changeCounterPlus(){
        dispatch({type: 'CHANGE_COUNTER', payload: plus});
    }

    function changeCounterMinus(){
        dispatch({type: 'CHANGE_COUNTER', payload: minus});
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