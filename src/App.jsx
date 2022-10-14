import React, {useReducer, useState} from 'react'
import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
import { Context } from './Contex.js'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Crush from './Crush.js'
import Office from './pages/Office.jsx'
import {Provider as ReduxProvider} from 'react-redux'
import store from './store/index.js'
import Test3 from './Test3.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Test3/>
    },
    {
        path: '/shop',
        element: <Shop/>
    },
    {
        path: '/office',
        element: <Office/>
    }
])

const SET_LIBIDO = 'SET_LIBIDO'
const SET_CASH = 'SET_CASH'
const SET_SENTIMENT = 'SET_SENTIMENT'
const SET_NEUROSIS = 'SET_NEUROSIS'
const SET_BOOK_COUNT = 'SET_BOOK_COUNT'

const reducer = (state, action) => { // state === crush <= new Crush()
    switch(action.type){
        case SET_LIBIDO:
            state.crush.libido += action.payload
            return {crush: new Crush({crush: state.crush})}
        case SET_CASH:
            state.crush.cash += action.payload
            return {crush: new Crush({crush: state.crush})}
        case SET_SENTIMENT:
            state.crush.sentiment += action.payload
            return {crush: new Crush({crush: state.crush})}
        case SET_NEUROSIS:
            state.crush.neurosis += action.payload
            return {crush: new Crush({crush: state.crush})}
        case SET_BOOK_COUNT:
            state.crush.bookCount += action.payload
            return {crush: new Crush({crush: state.crush})}
        default: 
            return state
    }
}

const initeState = {crush: new Crush()}

const App = () => {
    const [nState, dispatch] = useReducer(reducer, initeState)

    const [title, setTitle] = useState('')

    const context = {
        crush: nState.crush,
        setLibido: (v) => {
            dispatch({type: SET_LIBIDO, payload: v})
        },
        setCash: (v) => {
            dispatch({type: SET_CASH, payload: v})
        },
        setSentiment: (v) => {
            dispatch({type: SET_SENTIMENT, payload: v})
        },
        setNeurosis: (v) => {
            dispatch({type: SET_NEUROSIS, payload: v})
        },
        setBookCount: (v) => {
            dispatch({type: SET_BOOK_COUNT, payload: v})
        }
    }

    const [state, setState] = useState(new Crush()) // useState - hook

    return <React.StrictMode>
        {/* <Context.Provider value={context}> */}
        <ReduxProvider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </ReduxProvider>
        {/* </Context.Provider> */}
    </React.StrictMode>
}

export default App