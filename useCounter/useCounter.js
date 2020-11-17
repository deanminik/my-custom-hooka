
// Un custom hook no es más que una simple función

import { useState } from 'react';


// import React from 'react' no vamos a usar jsx 

export const useCounter = (initialState = 10) => {
   
    const [state, setstate] = useState(initialState);

    // const increment = () =>{
    //     setstate( state + 1);
    // }

    // const decrement = () =>{
    //     setstate( state - 1);
    // }

    const increment = (factor = 1) =>{
        setstate( state + factor);
    }

    const decrement = (factor = 1) =>{
        setstate( state - factor);
    }
    const reset = () =>{
        setstate(initialState);
    }
    //queremos regresar un objeto 
    return {
        state,
        increment,
        decrement,
        reset
    };
    //este custon hook extrae la logica de mi contador 
}
