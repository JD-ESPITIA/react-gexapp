import React, { useState } from 'react'; // 'use' quiere decir que es un hook
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp =  ({
}) => {

    // const categories = ['One Punch', 'Samurai x', 'Gokú'];


    // Se declara categoríes, con el contenido de useState
    // setcategories se puede utilizar para controlar el estado y renderizar
    const [categories, setCategories] = useState(['Goku']);

    // agrega un elemento al arreglo categorias
    // const handleAdd = () => {
    
    //     // setCategories( [...categories, 'Hnter'] ); // son ==
    //     setCategories( cats => [...categories, 'hunter']); // son ==
        
    // };

    return ( <>
        <h2 className="animate__animated animate__fadeInTopLeft ">GifExpertApp</h2>
        {/* renderizo addcategory y se env+ia referencia a setCategories */}
        <AddCategory setCategories={setCategories} /> 
        <hr />

        {/* <button onClick={ handleAdd } >Agregar</button> */}
        {
            <ol>
                {
                    // categories.map( (category, i) => {
                    //     return <li key={category}>{category}</li>;
                    // })

                    // categories.map( category => <li key={category}>{category}</li>)
                    categories.map( category => <GifGrid key={category} category ={category} />)
                }
            </ol>
        }
        </>);


}

export default GifExpertApp;
