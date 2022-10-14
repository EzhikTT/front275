import React, { useContext, useEffect } from 'react'
import { Context } from './Contex.js'

const Test1 = () => {
    const [context, setContext] = useContext(Context)

    useEffect(() => {
        console.log('name')
    }, [context.name])

    const onChange = (event) => {
        const newContext = {...context}
        newContext.name = event.target.value
        setContext(newContext)
    }

    return <div>
        <input value={context.name} onChange={(event) => onChange(event)}/>
    </div>
}

export default Test1