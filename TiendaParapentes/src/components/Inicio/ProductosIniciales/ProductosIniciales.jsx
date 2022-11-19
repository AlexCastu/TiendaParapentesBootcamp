import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductosIniciales.css";
import Spinner from "react-bootstrap/Spinner";
import SeccionProductosIniciales from "./SeccionProductosIniciales/SeccionProductosIniciales";
import Footer from "../../Footer/Footer";

const ProductosIniciales = () => {
   const [parapentes, setParapentes] = useState([]);
   const [sillas, setSillas] = useState([]);
   const [paracaidas, setParacaidas] = useState([]);
   const [accesorios, setAccesorios] = useState([]);
   let [loading, setLoading] = useState(true);

   useEffect(() => {
      axios.get("https://tiendaparapentes.fly.dev/tienda/productosIniciales").then((response) => {
         setParapentes(response.data.parapentes);
         setParacaidas(response.data.paracaidas);
         setSillas(response.data.sillas);
         setAccesorios(response.data.accesorios);
         setLoading(false);
         console.log(<img src="https://img.icons8.com/sf-ultralight-cart.png" />);
      });
   }, []);

   if (loading) {
      return (
         <div className="spinerPageProductosIniciales">
            <Spinner animation="border" variant="primary" />
            <h4>Se esta cargando la pagina</h4>
         </div>
      );
   } else {
      return (
         <>
            <div className="productoInicialesContainer">
               <div className="tituloProductoInicial">
                  <h1>Te podria interesar...</h1>
               </div>
               <SeccionProductosIniciales data={parapentes} titulo={"Parapentes"} producto={"PARAPENTES"}></SeccionProductosIniciales>
               <SeccionProductosIniciales data={sillas} titulo={"Sillas"} producto={"SILLAS"}></SeccionProductosIniciales>
               <SeccionProductosIniciales data={accesorios} titulo={"Accesorios"} producto={"ACCESORIOS"}></SeccionProductosIniciales>
               <SeccionProductosIniciales data={paracaidas} titulo={"Paracaidas"} producto={"PARACAIDAS"}></SeccionProductosIniciales>
            </div>
            <Footer></Footer>
         </>
      );
   }
};

export default ProductosIniciales;
