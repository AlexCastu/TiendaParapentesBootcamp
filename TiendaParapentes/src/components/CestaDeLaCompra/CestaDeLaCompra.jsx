import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ElementoEnLaCesta from "./ElementoEnLaCesta/ElementoEnLaCesta";
import "./CestaDeLaCompra.css";
import { Button, Modal } from "react-bootstrap";
import logoCestaCompra from "../../img/cesta.gif";
import { useContext } from "react";
import { ContextoCesta } from "../../Contexto/ContextoCesta";

const CestaDeLaCompra = () => {
   const [parapente, setParapente] = useState([]);
   const [silla, setSilla] = useState([]);
   const [accesorio, setAccesorios] = useState([]);
   const [paracaidas, setParacaidas] = useState([]);
   const [precioTotal, setPrecioTotal] = useState(0);
   const [loading, setLoading] = useState(false);
   const [eliminando, setEliminando] = useState(false);
   const [sinProductos, setSinProductos] = useState(false);
   let precio = 0;
   const { setEstado } = useContext(ContextoCesta);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const comprobarProductosEnLaCesta = () => {
      axios.get(`https://tiendaparapentes.fly.dev/tienda/verLaCesta`).then((response) => {
         setParacaidas(response.data.Paracaidas);
         setParapente(response.data.Parapentes);
         setSilla(response.data.Sillas);
         setAccesorios(response.data.Accesorios);
         if (
            response.data.Parapentes.length > 0 ||
            response.data.Sillas.length > 0 ||
            response.data.Accesorios.length > 0 ||
            response.data.Paracaidas.length > 0
         ) {
            setSinProductos(true);
            setEstado(true);
            localStorage.setItem("cesta", true);
         } else {
            setSinProductos(false);
            setPrecioTotal(0);
            setEstado(false);
            localStorage.setItem("cesta", false);
         }
         setLoading(true);
         setEliminando(false);
      });
   };

   const PrecioTotal = (data) => {
      precio += data;
      console.log(data);
      setPrecioTotal(precio);
   };
   const eliminar = (data) => {
      setEliminando(data);
   };

   useEffect(() => {
      comprobarProductosEnLaCesta();
   }, []);

   if (eliminando) {
      return (
         <div className="eliminandoArticuloCesta">
            <p>Se esta eliminando el articulo de la cesta...</p>
            <img src="https://img.icons8.com/ios/100/null/trash--v1.png" />
         </div>
      );
   } else if (loading) {
      return (
         <>
            <div className="cestaDeLaCompraContainer">
               <div className="tituloCesta">
                  <h1 className="cestaTitulo">Cesta</h1>
               </div>
               <div className="containerProductosCesta">
                  {sinProductos ? (
                     <>
                        <div className="resumenPago">
                           <div>
                              <Button className="botonPagar" variant="warning" onClick={handleShow}>
                                 <h3>Procesar pago de: {precioTotal} €</h3>
                              </Button>
                           </div>
                        </div>
                        <h5>Articulos en la cesta:</h5>
                        <ElementoEnLaCesta
                           elemento={parapente}
                           categoria={"PARAPENTES"}
                           PrecioTotal={PrecioTotal}
                           comprobarProductosEnLaCesta={comprobarProductosEnLaCesta}
                           eliminando={eliminar}
                        ></ElementoEnLaCesta>
                        <ElementoEnLaCesta
                           elemento={silla}
                           categoria={"SILLAS"}
                           PrecioTotal={PrecioTotal}
                           comprobarProductosEnLaCesta={comprobarProductosEnLaCesta}
                           eliminando={eliminar}
                        ></ElementoEnLaCesta>
                        <ElementoEnLaCesta
                           elemento={paracaidas}
                           categoria={"PARACAIDAS"}
                           PrecioTotal={PrecioTotal}
                           eliminando={eliminar}
                           comprobarProductosEnLaCesta={comprobarProductosEnLaCesta}
                        ></ElementoEnLaCesta>
                        <ElementoEnLaCesta
                           elemento={accesorio}
                           categoria={"ACCESORIOS"}
                           PrecioTotal={PrecioTotal}
                           comprobarProductosEnLaCesta={comprobarProductosEnLaCesta}
                           eliminando={eliminar}
                        ></ElementoEnLaCesta>
                     </>
                  ) : (
                     <>
                        <div className="cestaVacia">
                           <p>UPS...</p>
                           <p>Todavia no tienes nada en la cesta, date una vuelta por nuestra tienda online y seguro pronto llenaras la cesta!</p>
                        </div>
                     </>
                  )}
               </div>
            </div>
            <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>Realizar pago</Modal.Title>
               </Modal.Header>
               <Modal.Body>Seras redirigido a una plataforma segura para realizar el pago.</Modal.Body>
               <Modal.Footer>
                  <Button variant="danger" onClick={handleClose}>
                     Denegar
                  </Button>
                  <Button variant="success" onClick={handleClose}>
                     Aceptar
                  </Button>
               </Modal.Footer>
            </Modal>
         </>
      );
   } else {
      return (
         <div className="cargaCesta">
            <h3>Cargando cesta...</h3>
            <img src={logoCestaCompra}></img>
         </div>
      );
   }
};

export default CestaDeLaCompra;
