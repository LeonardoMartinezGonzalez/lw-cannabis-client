import React from 'react'


function Card({ item }) {
    // Funcion para dar formato a numeros
    function formatoMoneda(cantidad) {
        let valor = (cantidad).toLocaleString('es-MX', {
            style: 'currency',
            currency: 'MXN',
        });
        return valor;
    }

    return (
        <div className="img-articulo sombra">
            <img src={item.productoImagen} className='img-producto' alt="" />{/*  */} 
            <h4> {item.productoNombreCorto} </h4>
            <p> {formatoMoneda(item.productoCosto)}</p>
            <a href="#" className="boton">Comprar</a>
        </div>
    )
}

export default Card
