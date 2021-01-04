import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // se renombra data a images en la destructuración
    const { data:images, loading } = useFetchGifs(category);

    // console.log(data);
    console.log(loading);

    // const [images, setImages] = useState([]);

    // // const [count, setCount] = useState(0);

    // // useEffect sin dependencias [] se va a disparar una única vez,
    // // no cada vez que se renderize el componente por una modificación de setState (setCount)
    // useEffect( () => {
    //     // getGifs(category).then( imgs => setImages(imgs) ) ;
    //     getGifs(category).then(setImages ) ;
    // }, [ category ]);  // se evalúa solo cuando la categoría cambia



    // getGifs(); // se comenta al usar useeffect

    return (
        <>
            <h3>{category}</h3>
            {/* Lo siguiente para no hacer un operador ternario */}
            {loading && <p>Cargando</p> }
            <ol>
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </ol>

        </>

    );
}
