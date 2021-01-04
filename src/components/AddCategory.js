import React, {useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = (
    {
        setCategories
    }
) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (elem) => {
        // console.log(elem.target.value);
        setinputValue(elem.target.value); // en todo momento se tiene el  input value actualizado
    }

    const handleSubmit = (elem) => {
        elem.preventDefault(); // previene submit con enter
        console.log('submit');
        if (inputValue.trim().length>2) {
            //llama a función de GifExpertApp para establecer categorías
            setCategories(cats => [ inputValue,...cats]);
            
            setinputValue('');
        }


    }


    // debe regresar elementos agrupados, no hay necesidad de fragment siempre
    return (
        <form onSubmit={ handleSubmit}>
            {/* <h2>Para ver que en todo momento se mantiene el input actualizado: {inputValue}</h2> */}
            <input value={inputValue} onChange={(elem) => handleInputChange(elem)} />
        </form>
    )
}

// Declaración de propiedades para el componente
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
