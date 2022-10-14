import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Contex.js";
import Crush from "../Crush.js";


const Test = () => {
    const {crush} = useContext(Context)
    
    return <div>Cash - {crush.cash}</div>
}

const Office = () => {
    const {setCash} = useContext(Context)

    const onClick = () => {
        setCash(30)
        // crush.incCash(30)
        // setContext(new Crush({crush})) // {crush: crush}
    }

    return <div>
        <Test/>
        <div onClick={() => onClick()}>Working</div>
        <Link to="/">Home</Link>
    </div>
}

export default Office