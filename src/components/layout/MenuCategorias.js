import React, { useState } from 'react';
/* import { Link } from 'react-router-dom'; */
import RenderizarCategoria from '../categorias/RenderizarCategoria';

import clienteAxios from '../../config/axios';

const MenuCategorias = ({seleccionarCategoria}) => {
    const [categorias, setCategorias] = useState([]);

    React.useEffect(() => {
          // Llamado a la API con axios
    const solicitarCategorias = async () => {   
           try{
               const respuesta = await clienteAxios.get('/api/categorias');
               const datos = await respuesta.data;
               setCategorias(datos);
           }catch (error) {
               console.log(error);
           }       
       }
    solicitarCategorias()
       
    }, [])

    return (
            <div className='d-flex flex-centro'> {/* contenedor-productos  */}

                { categorias.map( (cat, index) => (
                    <button key={index} onClick={() => seleccionarCategoria(cat)} variant="primary">
                        <RenderizarCategoria
                        categoria = { cat }
                        key={ cat.idVariedad}
                    />
                   </button>
                    
                ))}

            </div>
      
    );
}

export default MenuCategorias;