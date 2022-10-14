import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    text: '1234'
}

export const test = createSlice({
    name: 'test',
    initialState,
    reducers: {
        inc: (state) => {
            state.counter++
        },
        dec: (state) => {
            state.counter-=1
        }
    }
})


export const {inc, dec} = test.actions
/*
ACTIONS
inc(){
    return {type: 'inc'}
}
dec(){
    return {type: 'dec'}
}

REDUCERS
switch(action.type) {
    case 'inc':
        return {counter: state.counter + 1}
    case 'dec':
        return {counter: state.counter - 1}
    default:
        return state
}

if(action.type === 'inc'){}
else if(action.type === 'dec') {}
else {}

*/

export default test.reducer