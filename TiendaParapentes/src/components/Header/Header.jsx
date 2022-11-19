import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../img/logoPrincipal/logotipo.png";
import { useContext } from "react";
import { ContextoCesta } from "../../Contexto/ContextoCesta";

const Header = () => {
   const { estado } = useContext(ContextoCesta);
   console.log(estado);
   return (
      <>
         <Navbar collapseOnSelect expand="lg" className="barraNavegacion" variant="dark" sticky="top">
            <Container>
               <Navbar.Brand>
                  <NavLink className="tituloPagina" to="inicio">
                     <img src={logo} className></img>
                  </NavLink>
               </Navbar.Brand>
               <Navbar.Toggle collapseOnSelect aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse collapseOnSelect id="responsive-navbar-nav ">
                  <Nav className="me-auto "></Nav>
                  <Nav className=" me-auto justify-content-end flex-grow-1 pe-3 contenedorNav">
                     <Nav.Link href="#">
                        <NavLink
                           className={({ isActive }) => {
                              return isActive ? "isActive" : "linkNav";
                           }}
                           to="parapentes"
                        >
                           Parapentes
                        </NavLink>
                     </Nav.Link>
                     <Nav.Link href="#">
                        <NavLink
                           to="sillas"
                           className={({ isActive }) => {
                              return isActive ? "isActive" : "linkNav";
                           }}
                        >
                           Sillas
                        </NavLink>
                     </Nav.Link>
                     <Nav.Link href="#">
                        <NavLink
                           to="paracaidas"
                           className={({ isActive }) => {
                              return isActive ? "isActive" : "linkNav";
                           }}
                        >
                           Paracaidas
                        </NavLink>
                     </Nav.Link>
                     <Nav.Link href="#">
                        <NavLink
                           to="accesorios"
                           className={({ isActive }) => {
                              return isActive ? "isActive" : "linkNav";
                           }}
                        >
                           Accesorios
                        </NavLink>
                     </Nav.Link>
                     <Nav.Link href="#">
                        <NavLink to="cesta" className="botonCesta">
                           {estado ? (
                              <div>
                                 <span className="puntoRojoCesta"></span>
                                 <img src="https://img.icons8.com/ios-filled/25/null/shopping-cart-loaded--v1.png" />
                              </div>
                           ) : (
                              <div>
                                 <img src="https://img.icons8.com/ios/25/null/shopping-cart-loaded--v1.png" />
                              </div>
                           )}
                           Cesta
                        </NavLink>
                     </Nav.Link>
                     <Nav.Link href="#">
                        <NavLink
                           to="contacto"
                           className={({ isActive }) => {
                              return isActive ? "isActive" : "linkNav";
                           }}
                        >
                           Contactanos
                        </NavLink>
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default Header;
