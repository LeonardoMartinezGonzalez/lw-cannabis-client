import React from 'react';
/* import { Link } from 'react-router-dom'; */
import RenderizarProducto from '../categorias/RenderizarProducto';

const ListaProductos = () => {

    const arrProductos = [
        { nombreVariedad: "Cannabis Sativa", imagenVariedad: "cannibaSativa-100.jpg", idVariedad: 1000},
        { nombreVariedad: "Cannabis Indica", imagenVariedad: "cannibaIndica-200.jpg", idVariedad: 2000},
        { nombreVariedad: "Cannabis Chinensis", imagenVariedad: "cannibaChinensis-300.jpg", idVariedad: 3000},
        { nombreVariedad: "Cannabis Acapulco Gold", imagenVariedad: "cannibaAcapulcoGold-400.jpg", idVariedad: 4000},
        { nombreVariedad: "Cannabis Kafiristanica", imagenVariedad: "cannibaKafiristanica-500.jpg", idVariedad: 5000},
        { nombreVariedad: "Cannabis Hibrida", imagenVariedad: "cannibaHibrida-600.jpg", idVariedad: 6000}
    ]

    return (
        
            <div className='d-flex flex-centro'>

                { arrProductos.map( prod => (
                    <RenderizarProducto
                        categoria = { prod }
                        key={ prod.idProducto}
                    />
                ))}

            </div>
      
    );
}

export default ListaProductos;