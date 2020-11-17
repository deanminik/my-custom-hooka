import React, { useState } from 'react'


export const useCounterV2 = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);


    const increment = () =>{
        setCounter( counter + 1);
    }

    const decrement = () =>{
        setCounter( counter - 1);
    }
    const reset = () =>{
        setCounter(initialState);
    }
    //queremos regresar un objeto 
    return {
        counter,
        increment,
        decrement,
        reset
    };
    //este custon hook extrae la logica de mi contador 
}


