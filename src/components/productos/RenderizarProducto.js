import React from 'react';

const RenderizarProducto = ( {producto} ) => {
    console.log(producto);
    return (
        <li>
            {producto.nombreCorto}
        </li>
    );
}

export default RenderizarProducto;