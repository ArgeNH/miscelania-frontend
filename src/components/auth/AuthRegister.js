import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardInput,
    CardButton,
    CardLink
} from './CardAuth';

export const AuthRegister = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <>
            <CardFieldset >
                <img src='/assets/logo.png' width={750} />
            </CardFieldset>

            <CardWrapper>
                <CardHeader>
                    <CardHeading>Registro de usuario</CardHeading>
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <CardInput placeholder="Nombre" type="text" autoComplete='off' required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="Apellido" type="text" autoComplete='off' required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="Contraseña" type="password" autoComplete='off' required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="E-mail" type="email" autoComplete='off' required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="Ciudad" type="text" autoComplete='off' required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="Direccion" type="text" autoComplete='off' required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="Celular" type="number" autoComplete='off' required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardButton
                            type="button"
                            onClick={() => console.log('Registrase')}
                        >
                            Registrarse
                        </CardButton>
                    </CardFieldset>

                    <CardFieldset>
                        <CardLink onClick={handleLogin}>Ya tengo cuenta</CardLink>
                    </CardFieldset>

                </CardBody>
            </CardWrapper>
        </>
    )
}