import "./CardProducto.css";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import ContenidoModal from "./ContenidoModal/ContenidoModal";
import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from "react-hot-toast";

const CardProductos = ({ dato, producto }) => {
   const [fullscreen, setFullscreen] = useState(true);
   const [show, setShow] = useState(false);
   const [elemento, setElemento] = useState({ data: {} });

   const getProductoEntero = () => {
      axios.get(`https://tiendaparapentes.fly.dev/tienda/productoUnico?id=${dato._id}&categoria=${producto}`).then((response) => {
         setElemento(response.data);
         handleShow(true);
      });
   };

   const cerrarModal = (dato) => {
      setShow(!dato);
      dato ? toast.success("El articulo se ha agregado a tu cesta") : toast.error("El articulo ya se encuentra en tu cesta.");
   };
   function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
   }

   return (
      <>
         <Toaster position="top-left" reverseOrder={false} />
         <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
               <Modal.Title>
                  <h1>{dato.modelo}</h1>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <ContenidoModal data={elemento} producto={producto} cerrarModal={cerrarModal}></ContenidoModal>
            </Modal.Body>
         </Modal>
         <Card className="CardProductos" style={{ width: "20rem" }}>
            <Card.Img
               variant="top"
               src={
                  dato.img ||
                  "https://img.freepik.com/premium-vector/cute-people-playing-paragliding-cartoon-icon-illustration-people-sport-icon-concept-isolated-premium-flat-cartoon-style_138676-1552.jpg?w=826"
               }
            />
            <Card.Body className="cardDisplay">
               <Card.Title>{dato.modelo}</Card.Title>
               <Card.Text>
                  <div className="divsCard">
                     <span className="TitulosSpan">Marca</span>
                     <p className="parrafoCard">{dato.marca.nombre}</p>
                     {dato.marca._id.img ? <img className="logotipoEmpresa" alt={dato.marca._id.nombre} src={dato.marca._id.img}></img> : null}
                  </div>
                  {dato.categoria ? (
                     <div className="divsCard">
                        <span className="TitulosSpan">Categoria</span>
                        <p className="parrafoCard">EN-{dato.categoria}</p>
                     </div>
                  ) : null}

                  <div className="">
                     <span className="TitulosSpan">Precio:</span>
                     <h3 className="precioCard">{dato.price} €</h3>
                  </div>
               </Card.Text>
               <Button variant="warning" className="botonCompra" onClick={() => getProductoEntero()}>
                  <img alt="logoMas" src="https://img.icons8.com/ios-glyphs/14/000000/plus-math.png" />
                  <span>Info</span>
               </Button>
            </Card.Body>
         </Card>
      </>
   );
};

export default CardProductos;
