import {configureStore} from '@reduxjs/toolkit'
import testReducer from './test.js'
import crushReducer from './crush.js'

const store = configureStore({
    reducer: {
        test: testReducer,
        crush: crushReducer
        // crush
        // main

        // dialog
    }
})

export default store