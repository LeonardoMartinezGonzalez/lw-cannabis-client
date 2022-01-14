import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

import MenuPrincipal from './MenuPrincipal';

const Encabezado = () => {

    return (
        <Fragment>
            <div className='barra-encabezado'>
                <div className='d-flex flex-derecha'>

                    <Link to = {'/crear-cuenta'} className="enlace-cuenta-verde">
                        Registrate
                    </Link>

                    <Link to = {'/'} className="enlace-cuenta-verde">
                        Iniciar Sesión
                    </Link>

                </div>
                
            </div>
            <div className='fondo-encabezado'>
                
                <MenuPrincipal></MenuPrincipal>
                
            </div>
        </Fragment>
    );
}

export default Encabezado;