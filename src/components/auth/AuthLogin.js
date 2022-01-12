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

export const AuthLogin = () => {

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register', {
            replace: true
        });
    }

    return (
        <>
            <CardFieldset >
                <img src='/assets/logo.png' width={750} />
            </CardFieldset>

            <CardWrapper>
                <CardHeader>
                    <CardHeading>Inicio sesion de usuario</CardHeading>
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <CardInput placeholder="E-mail" type="email" required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="Contraseña" type="password" required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardButton
                            type="button"
                            onClick={() => console.log('Inicio')}
                        >
                            Iniciar Sesion
                        </CardButton>
                    </CardFieldset>

                    <CardFieldset>
                        <CardLink onClick={handleRegister}>Registrarme</CardLink>
                    </CardFieldset>
                </CardBody>
            </CardWrapper>
        </>
    )
}