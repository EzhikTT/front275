import React, {useContext, useEffect, useState, useMemo, useCallback } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../Contex.js'
import Crush from '../Crush.js'
import Popup from '../Popup.jsx'

const Home = () => {

    // const [crush, setContext] = useContext(Context)

    // const [isPopup, setIsPopup] = useState(false)
    // const [text, setText] = useState('')

    // const [timeoutId, setTimeoutId] = useState(null)

    const element = useMemo(
        () => {
            return <div>Sentiment - {crush.sentiment}</div>
        }, 
        [crush.sentiment]
    )



    const onClick = useCallback(
        () => {
            someMethod()
        },
        [crush.sentiment]
    )

    const someMethod = () => {
        console.log(crush.sentiment)
    };






    // useEffect(() => {
    //     if(crush.sentiment > 0){
    //         setIsPopup(true)
    //         setText('I love you ♥')
    //     }
    // }, [crush.sentiment])

    useEffect(
        () => {
            if(crush.neurosis <= -25){
                setIsPopup(true)
                setText('SCREAM AT NATASHA!!!!!')
            }
        }, 
        [crush.neurosis]
    )

    // useEffect(() => {
    //     if(crush.neurosis <= -100){
    //         setIsPopup(true)
    //         setText('Natasha leaves')
    //     }
    //     else if(crush.cash <= 0) {
    //         const id = setTimeout(() => {
    //             setIsPopup(true)
    //             setText('Natasha leaves')
    //         }, 3000)
    //         setTimeoutId(id)
    //     }
    // }, [crush.neurosis, crush.cash])

    // useEffect(() => {
    //     if(timeoutId && crush.cash > 20){
    //         clearTimeout(timeoutId)
    //         setTimeoutId(null)
    //     }
    // }, [crush.cash])

    // const onCoocking = () => {
    //     crush.neurosis++
    //     crush.changeLibidoBySentiment(crush.sentiment--) 
    //     crush.cash -= 0.5
    //     setContext(new Crush({crush}))
    // }

    // const onWorking = () => {
    //     crush.libido -= 0.1
    //     crush.changeLibidoBySentiment(crush.sentiment) 
    //     crush.sentiment -= 0.2
    //     crush.cash += 2
    //     setContext(new Crush({crush}))
    // }

    // const onPresentFlowers = () => {
    //     crush.cash -= 3
    //     setContext(new Crush({crush}))
    // }

    // const onPlayWithTwins = () => {
    //     crush.neurosis += 7
    //     setContext(new Crush({crush}))
    // }

    // const onClosePopup = () => {
    //     setIsPopup(false)
    //     setText('')
    // }

    return <div>
        {/* <h1>Natasha's crush</h1>
        {element}
        <div>Neurosis - {crush.neurosis}</div>
        <div>Libido - {crush.libido}</div>
        <div>Cash - {crush.cash}</div>
        <div>Book count - {crush.bookCount}</div>
        <br/>
        <div>
            <div onClick={() => onCoocking()}>Coocking</div>
            <div onClick={() => onPresentFlowers()}>Present flowers</div>
            <div onClick={() => onPlayWithTwins()}>Play with twins</div>
        </div> */}

        <Link to="/shop">Shop</Link><br/>
        <Link to="/office">Office</Link>

        {/* {(isPopup && text !== '') && <Popup text={text} onClick={() => onClosePopup()}/>} */}
    </div>
}

export default Home