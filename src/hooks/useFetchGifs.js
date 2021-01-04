import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
// no son más que funciones

export const useFetchGifs = (category) => {
    
    // retorna state
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        // getGifs(category).then( imgs => setImages(imgs) ) ;
        getGifs(category).then( imgs => { 
            // setTimeout(() => {
                setstate({
                    data: imgs,
                    loading: false
                });
            // }, 3000);
        });

    }, [ category ]);  // se evalúa solo cuando la categoría cambia




    return state;



}
