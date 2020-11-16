import React, { useEffect, useRef, useState } from 'react'
 //url de lo qe la persona nos va a proveer 
export const useFetch = (url) => {
    //data: esta en null va hacer la data o sea no hay nada
    //loading: lo tenemos en tru porque3 apenas se emopiza hacer esto impieza la carga 
    //error: por si acaso nos cae un error    

    const isMounted = useRef(true);
    const [state, setstate] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        return () =>{
              isMounted.current = false;
        }
    }, [])


    //vamos a usarlo cuando el url cambia
    useEffect(()=>{
      //mando el url 
        fetch(url)
           //metrae una promesa o sea la respuesta
           .then( resp => resp.json() )// lo convierto a json
           //luego tenemos la data
           .then(data =>{
               //uuna vez tenemos la data llamamos al setState y estableceremos el siguiente cambio
               
               setTimeout(() =>{

                if(isMounted.current){
                    setstate({
                        loading:false,
                        error:null,
                        data
                    });
                }else{
                    console.log("set esteta no se llamó");
                }
                
               },4000);
              
           }) 
    },[url])

    return state;

}
