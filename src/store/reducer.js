
const initialState = {
    counter: 0
}


export function reducer(state = initialState, action){

    if(action.type === 'CHANGE_COUNTER_PLUS'){
       return {
           ...state,
           counter: state.counter + 1
       }
    }

    if(action.type === 'CHANGE_COUNTER_MINUS'){
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    return state
}