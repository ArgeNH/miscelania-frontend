import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/auth';

export const Nabvar = () => {

   const navigate = useNavigate();

   const { role, checking, name, lastName } = useSelector(state => state.auth);
   const { products } = useSelector(state => state.cart);
   const dispatch = useDispatch();

   const [isOpen, setIsOpen] = useState(false);

   const open = () => setIsOpen(!isOpen);

   const handleLogout = () => {
      //Todo: validatte with checking
      dispatch(logoutUser());
      navigate('/login', { replace: true });
   }

   return (
      <>
         <Nav>
            <Logo to='/'>
               Miscelánea<span>Rodríguez</span>
            </Logo>
            <Hamburger onClick={open}>
               <span />
               <span />
               <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
               <MenuLink to='/' onClick={open}>Inicio</MenuLink>
               {role === 'ADMIN' && <MenuLink to='/admin' onClick={open}>ADMIN</MenuLink>}

               <MenuLink to='/compra' onClick={open}>
                  🛒
                  {
                     products.length !== 0 ?
                        <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2">
                           {products.length}
                        </span> :
                        ''
                  }
               </MenuLink>

               <MenuLink to='/login' onClick={handleLogout}>{checking ? "Salir" : "Iniciar Sesión"}</MenuLink>
               <Separator>|</Separator>
               <NameUser to='/' >Bienvenido <span>{name !== undefined ? ` ${name} ${lastName}` : 'Cliente'}</span></NameUser>
            </Menu>
         </Nav>
      </>
   )
}

const Separator = styled.p`
      color: #0d9488;
`;

const MenuLink = styled(Link)`
      padding: 1rem 2rem;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      color: #0d9488;
      transition: all 0.3s ease-in;
      font-size: 1.3rem;
      font-weight: bolder;
`;

const NameUser = styled.h1`
      padding: 1rem 2rem;
      text-align: center;
      text-decoration: none;
      color: #0891b2;
      transition: all 0.3s ease-in;
      font-size: 1.3rem;
      font-weight: bolder;
      span {
         font-weight: 300;
         font-size: 1.3rem;
      }
`;

const Nav = styled.div`
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      backdrop-filter: blur(6px) saturate(200%);
      background-color: rgba(255, 255, 255, 0.7);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
`;

const Logo = styled(Link)`
      padding: 1rem 0;
      color: #0891b2;
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
         background: #0891b2;
         margin-bottom: 4px;
         border-radius: 5px;
      }
      @media (max-width: 1010px) {
         display: flex;
      }
`;