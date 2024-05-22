
const initialState = {
    counter: 0
}


export function reducer(state = initialState, action){

    if(action.type === 'CHANGE_COUNTER'){
       return {
           ...state,
           counter: action.payload
       }
    }
    return state
}