import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nabvar = () => {

    /* const navigate = useNavigate(); */

    const [isOpen, setIsOpen] = useState(false);

    /*     const handleLogout = () => {
            navigate('/login', {
                replace: true
            })
        } */

    return (
        <Nav>
            <Logo to='/'>
                Miscelánea<span>Rodríguez</span>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to='/'>Inicio</MenuLink>
                <MenuLink to='/productos'>Productos</MenuLink>
                <MenuLink to='/promociones'>Promociones</MenuLink>
                <MenuLink to='/compra'>🛒</MenuLink>
                <MenuLink to='/login'>Login</MenuLink>
            </Menu>
        </Nav>
    )
}

const MenuLink = styled(Link)`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #67bc98;
    transition: all 0.3s ease-in;
    font-size: 1.2rem;
    font-weight: bolder;
`;

const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const Logo = styled(Link)`
    padding: 1rem 0;
    color: #7b7fda;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.9rem;
    span {
        font-weight: 300;
        font-size: 1.5rem;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 1010px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 2px;
        width: 25px;
        background: #7b7fda;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 1010px) {
        display: flex;
    }
`;