import {createSlice} from '@reduxjs/toolkit'
import Crush from '../Crush'

const crush = createSlice({
    name: 'crush',
    initialState: {crush: new Crush()},
    reducers: {
        setCash: (state, {payload}) => {
            state.crush.cash += payload
            state.crush = new Crush({crush: state.crush})
        }
    }
})

export const {setCash} = crush.actions
export default crush.reducer