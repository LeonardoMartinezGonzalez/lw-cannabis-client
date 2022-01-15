import React from 'react';
/* import { Link } from 'react-router-dom'; */

const RenderizarCategoria = ({ categoria }) => {
    //console.log(categoria);

    return (
        <div className='formato-categoria'>
            {/* <Link to={'/productos'} className="enlace-cuenta-blanco mayusculas-logo"> */}
                <img src={categoria.imagenVariedad} alt="" className='img-categoria' />
            {/* </Link> */}
            {/* <Link to={'/productos?idCat=' + categoria.idVariedad} className="enlace-cuenta-blanco mayusculas-logo" onClick={mostrarProductos(categoria.idVariedad)}> */}
                <p className='formato-titulo-categoria'>
                    {categoria.nombreVariedad}
                </p>
            {/* </Link> */}

        </div>
    );

}

export default RenderizarCategoria;


