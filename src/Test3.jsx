import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCash } from "./store/crush.js"
import { inc, dec } from "./store/test.js"

const Test3 = () => {
    const counter = useSelector(({test}) => test.counter)
    const dispatch = useDispatch()

    const crush = useSelector(({crush}) => crush.crush)


    return <div>
        <h2>Test 3</h2>
        <div>counter - {counter}</div>
        <span onClick={() => dispatch(inc())}>+</span>
        <span>   </span>
        <span onClick={() => dispatch(dec())}>-</span>
        <br/>
        <br/>
        <br/>
        <div>{crush.cash}</div>
        <div onClick={() => dispatch(setCash(30))}>Up cash</div>
    </div>
}

export default Test3