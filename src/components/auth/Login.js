import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clienteAxios from '../../config/axios';

const Login = () => {
   
    // State para el inicio de sesion
    const [cliente, guardarCliente] = useState({
        correo: '',
        clave: ''
    });
    const onChangeIniciarSesion = (e) => {
        console.log('Dentro de onChange');
        guardarCliente( {
            ...cliente, // Se toma una copia de lo que tiene cliente para que NO se reescriba lo que ya está
            [e.target.name] : e.target.value // y se sobreescribe la actual
        })
    }

    // Destructuring (Extraer) del cliente el correo y la clave
    const { correo, clave } = cliente;

    // Cuando el Cliente desea inicira sesion
    const onSubmitIniciarSesion = e => {
        //Prevenir la accion
        e.preventDefault();

        // Validar que no haya campos vacios
        if ( correo === '')
            alert("Debes escribir un correo válido");
        else if ( clave.length < 6 )
            alert("La contraseña debe ser de almenos 6 caracteres");
        else{
            const validarCliente = async datos => {
                try{
                    const respuesta = await clienteAxios.post('/api/auth', { "correo": correo, "clave": clave });
                    const datos = await respuesta.data;
                    console.log(datos);
                    //return datos;
                }catch (error){
                    console.log(error);
                }
            }
            const respuesta = validarCliente();
            if (respuesta.token !== null){
                window.location.href = "/productos";
            }else
                alert(respuesta.msg);
          
        }
        
    }

    return (
        
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1> Iniciar sesión </h1>
                <form onSubmit={onSubmitIniciarSesion}>
                    <div className='campo-form'>
                        <label htmlFor='correo'>Correo</label>
                        <input 
                            type='email'
                            id='correo'
                            name='correo'
                            placeholder='Correo Elctrónico'
                            value={correo}
                            onChange={onChangeIniciarSesion}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='clave'>Contraseña</label>
                        <input 
                            type='password'
                            id='clave'
                            name='clave'
                            placeholder='Contraseña'
                            value={clave}
                            onChange={onChangeIniciarSesion}
                        />
                    </div>

                    <div className='campo-form'>
                        <input 
                            type='submit'
                            value='Iniciar sesión'
                            className='btn btn-primario btn-block'
                        />
                    </div>
                </form>
                <Link to = {'/crear-cuenta'} className="enlace-cuenta">
                    Crear Cuenta
                </Link>
            </div>
        </div>
        
    );
}

export default Login;