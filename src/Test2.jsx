import React, { useContext } from 'react'
import { Context } from './Contex.js'

const Test2 = () => {
    const [context, setContext] = useContext(Context)

    return <div>{Object.values(context).join(', ')}</div>
}

export default Test2