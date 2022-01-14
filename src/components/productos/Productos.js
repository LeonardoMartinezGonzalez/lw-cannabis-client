import React from 'react';
import { useState } from 'react/cjs/react.development';
import clienteAxios from '../../config/axios';

import Encabezado from '../layout/Encabezado';
import MenuCategoria from '../layout/MenuCategorias';
import Card from './Card';

const Productos = () => {
    console.log('Desde Productos');
    const [categoria_seleccionada, seleccionarCategoria] = useState(null);
    const [productos, setProductos] = useState([])

    React.useEffect(() => {
        console.log(categoria_seleccionada);
        const solicitarCategorias = async () => {
            try {
                const respuesta = await clienteAxios.get('/api/productos', {
                    params: { idVariedad: categoria_seleccionada.idVariedad }
                });
                const datos = await respuesta.data;
                setProductos(datos);
            } catch (error) {
                console.log(error);
            }
        }
        if (categoria_seleccionada !== null) {
            solicitarCategorias()
        }

    }, [categoria_seleccionada])

    return (
        <div>
            <Encabezado> </Encabezado>

            <MenuCategoria
                seleccionarCategoria={seleccionarCategoria}
            > </MenuCategoria>
            {
                categoria_seleccionada && (
                    <>
                        <div className='d-flex contenedor-productos'>
                            {productos.map(element => (
                                <Card item={element} />
                            ))}
                        </div>
                    </>
                )

            }

        </div>
    );
}

export default Productos;