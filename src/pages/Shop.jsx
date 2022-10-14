import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../Contex.js'
import Crush from '../Crush.js'

const Shop = () => {
    const [crush, setContext] = useContext(Context)
    
    const [bookCount, setBookCount] = useState(0)

    const onBuyCrazyBook = () => {
        crush.cash -=0.5
        crush.sentiment +=5
        crush.neurosis -=5
        crush.bookCount++

        setContext(new Crush({crush}))
        setBookCount(bookCount + 1)
    }

    return <div>
        <h2>Shop</h2>
        <div>Cash - {crush.cash}</div>
        <div>Count book - {bookCount}</div>
        <div onClick={() => onBuyCrazyBook()}>Buy crazy book</div>
        <Link to="/">Home</Link>
    </div>
}

export default Shop