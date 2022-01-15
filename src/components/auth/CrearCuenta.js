import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const CrearCuenta = (props) => {

    // Extraer valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarCliente } = authContext;

    // En caso de que el Cliente se autentique o sea un registro duplicado
    useEffect(()=>{
        console.log("Autenticado: " + autenticado);
        if (autenticado){
            //props.history.push('/productos');
            //alert("Felicidades, se ha creado la cuenta");
            window.location.href = "/";
        }

        if (mensaje){
            alert(mensaje.msg)
            //mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history ]);

    // State para el inicio de sesion
    const [cliente, guardarCliente] = useState({
        nombreUsuario: '',
        correo: '',
        clave: '',
        confirmar: ''
    });
    const onChangeCrearCuenta = (e) => {
        
        guardarCliente( {
            ...cliente, // Se toma una copia de lo que tiene cliente para que NO se reescriba lo que ya está
            [e.target.name] : e.target.value // y se sobreescribe la actual
        })
    }

    // Destructuring (Extraer) del cliente el correo y la clave
    const { nombreUsuario, correo, clave, confirmar } = cliente;

    // Cuando el Cliente desea iniciara sesion
    const onSubmitCrearCuenta = e => {
        
        //Prevenir la accion
        e.preventDefault();

        // Validar que no haya campos vacios
        if ( nombreUsuario.trim() === '' || correo.trim() === '' || clave.trim() === '' || confirmar.trim() === ''){
            alert('Todos los campos deben estar llenos');
            //mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // Password de 6 caracteres
        if ( clave.length < 6){
            alert('La clave debe ser de al menos de 6 caracteres');
            return; 
        }
            
        // que las claves sean iguales
        if ( clave !== confirmar){
            alert('Las claves debe ser iguales');
            return; 
        }

        // Pasarlo a la acción
        registrarCliente({ nombreUsuario, correo, clave });
    }

    return (
        
        <div className='form-usuario'>
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> )  : null}
            <div className='contenedor-form sombra-dark'>
                <h1> Crear una Cuenta </h1>
                <form onSubmit={onSubmitCrearCuenta}>

                <div className='campo-form'>
                        <label htmlFor='nombreUsuario'>Nombre del Cliente</label>
                        <input 
                            type='text'
                            id='nombreUsuario'
                            name='nombreUsuario'
                            placeholder='Nombre del Cliente'
                            value={nombreUsuario}
                            onChange={onChangeCrearCuenta}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='correo'>Correo</label>
                        <input 
                            type='email'
                            id='correo'
                            name='correo'
                            placeholder='Correo Elctrónico'
                            value={correo}
                            onChange={onChangeCrearCuenta}
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
                            onChange={onChangeCrearCuenta}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar Contraseña</label>
                        <input 
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='Repite la  Contraseña'
                            value={confirmar}
                            onChange={onChangeCrearCuenta}
                        />
                    </div>

                    <div className='campo-form'>
                        <input 
                            type='submit'
                            value='Crear Cuenta'
                            className='btn btn-primario btn-block'
                        />
                    </div>
                </form>
                <Link to = {'/iniciar-sesion'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
        
    );
}

export default CrearCuenta;