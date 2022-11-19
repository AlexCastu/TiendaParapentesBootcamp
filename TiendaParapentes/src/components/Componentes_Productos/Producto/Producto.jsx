import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "../Componentes_productos.css";
import CardProductos from "../../CardProductos/CardProductos";
import Paginacion from "../../Pagination/Paginacion";
import Buscador from "../../Buscador/Buscador";
import OrdenacionProductos from "../../OrdenacionProductos/OrdenacionProductos";
import Spinner from "react-bootstrap/Spinner";
import Footer from "../../Footer/Footer";

const Producto = ({ data }) => {
   const URL = `https://tiendaparapentes.fly.dev/tienda/${data.categoriaBuscador}`;
   const [product, setProduct] = useState([]);
   const [filtros, setFiltros] = useState({
      fabricante: "",
      busquedaManual: "",
      precio: 0,
      categoria: "",
   });
   const [paginaActual, setPaginaActual] = useState(1);
   const [paginaSiguiente, setPaginaSiguiente] = useState(false);
   const [paginaAnterior, setPaginaAnterior] = useState(true);
   const [paginasTotales, setPaginasTotales] = useState(0);
   const [ordenPrecio, setOrdenPrecios] = useState(0);
   const [ordenMarca, setOrdenMarca] = useState(0);
   const [loadingA, setLoadingA] = useState(false);
   const [loadingB, setLoadingB] = useState(false);
   const [loadingProductosPaginacion, setLoadingProductosPaginacion] = useState(true);

   const getDatosDB = () => {
      setLoadingProductosPaginacion(false);
      axios
         .get(
            `https://tiendaparapentes.fly.dev/tienda/${data.categoriaAxios}?fabricante=${filtros.fabricante}&busquedaManual=${filtros.busquedaManual}&categoria=${filtros.categoria}&precio=${filtros.precio}&pagina=${paginaActual}&ordenPrecio=${ordenPrecio}&ordenMarca=${ordenMarca}`
         )
         .then((response) => {
            console.log(response);
            setProduct(response.data.docs);
            setPaginaActual(response.data.page);
            setPaginaSiguiente(response.data.hasNextPage);
            setPaginaAnterior(response.data.hasPrevPage);
            setPaginasTotales(response.data.totalPages);
            setLoadingA(true);
            setLoadingProductosPaginacion(true);
         });
   };

   useEffect(() => {
      getDatosDB();
   }, [filtros, paginaActual, ordenMarca, ordenPrecio]);

   const getFiltros = (...data) => {
      setFiltros({
         fabricante: data[0],
         busquedaManual: data[1],
         precio: data[2],
         categoria: data[3],
      });
      setPaginaActual(1);
   };
   const setLoadingBuscador = (data) => {
      setLoadingB(data);
   };
   const paginaEnviar = (data) => {
      setLoadingProductosPaginacion(false);
      setPaginaAnterior(false);
      setPaginaSiguiente(false);
      setPaginaActual(data);
   };
   const OrdenacionPrecio = (data) => {
      setOrdenPrecios(data);
      setOrdenMarca(3);
   };
   const OrdenacionMarca = (data) => {
      setOrdenMarca(data);
      setOrdenPrecios(3);
   };

   if (!loadingA && !loadingB) {
      return (
         <div className="spinerPageProductosIniciales">
            <Spinner animation="border" variant="primary" />
            <h4>Cargando pagina...</h4>
         </div>
      );
   } else {
      return (
         <>
            {" "}
            <div className="contenedorProductosPrincipal">
               <div className="titulosSecciones">
                  <div>
                     <h1>{data.h1Titulo}</h1>
                     <p>{data.descripcion}</p>
                  </div>
               </div>

               <Buscador getFiltros={getFiltros} URL={URL} placeHolder={data.placeholder} loading={setLoadingBuscador}></Buscador>
               <div className="stylePaginacionOrdenacion">
                  {paginasTotales > 1 ? (
                     <Paginacion
                        paginaActual={paginaActual}
                        paginaEnviar={paginaEnviar}
                        paginaSiguiente={paginaSiguiente}
                        paginaAnterior={paginaAnterior}
                     ></Paginacion>
                  ) : null}
                  <OrdenacionProductos OrdenacionPrecio={OrdenacionPrecio} OrdenacionMarca={OrdenacionMarca}></OrdenacionProductos>
               </div>
               <div className="contenedorCardsProductos">
                  {loadingProductosPaginacion ? (
                     <>
                        {product.length > 0 ? (
                           product.map((producto, index) => {
                              return <CardProductos key={`${data.categoriaAxios}-${index}`} dato={producto} producto={data.producto}></CardProductos>;
                           })
                        ) : (
                           <h3 className="sinResultados">No se han encontrado productos</h3>
                        )}
                     </>
                  ) : (
                     <div className="spinerPageProductosIniciales">
                        <Spinner animation="border" variant="primary" />
                        <h4>Cargando articulos...</h4>
                     </div>
                  )}
               </div>
            </div>{" "}
            {loadingProductosPaginacion ? <Footer></Footer> : null}
         </>
      );
   }
};

export default Producto;
