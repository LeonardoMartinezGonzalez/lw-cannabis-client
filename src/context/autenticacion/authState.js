import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';

import clienteAxios from '../../config/axios';


import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_ERROR
    /* OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION */
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [ state, dispatch ]  = useReducer(authReducer, initialState);

    // Funciones
    const registrarCliente = async datos => {
        try{
            const respuesta = await clienteAxios.post('/api/clientes', datos);
            console.log(respuesta);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data 
            });

            // Obtener el usuario
            usuarioAutenticado();

        }catch (error) {
            //console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    // Regresa el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token){
            // Función para enviar el token por headers
        }
        try{
            const respuesta = await clienteAxios.get('/api/auth');
            console.log(respuesta.data);
        }catch (error){
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    // Cuando el usuario inicia sesion
    const iniciarSesion = async datos => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarCliente
            }}
        >{props.children}

        </authContext.Provider>

    )
}

export default AuthState;