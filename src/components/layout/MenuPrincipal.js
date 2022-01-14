import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const MenuPrincipal = () => {

    return (
        <Fragment>
            <div className='d-flex flex-centro'>

                <Link to = {'/'} className="enlace-cuenta-blanco mayusculas-logo">
                    Almacén de Cann@Bis
                </Link>

                <Link to = {'/'} className="enlace-cuenta-blanco mayusculas">
                    Inicio
                </Link>

                <Link to = {'/productos'} className="enlace-cuenta-blanco mayusculas">
                    Productos
                </Link>

                <Link to = {'/ofertas'} className="enlace-cuenta-blanco mayusculas">
                    Ofertas
                </Link>

                <Link to = {'/ver-carrito'} className="enlace-cuenta-blanco mayusculas">
                    Carrito
                </Link>

                <Link to = {'/revisar-cuenta'} className="enlace-cuenta-blanco mayusculas">
                    Revisar Cuenta
                </Link>

            </div>
        </Fragment>
    );
}

export default MenuPrincipal;