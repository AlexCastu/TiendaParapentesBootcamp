import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useState } from "react";
import "./Buscador.css";

const Buscador = ({ getFiltros, URL, placeHolder, loading }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const [fabricantes, setFabricantes] = useState([]);
   const [clases, setClases] = useState([]);
   const [precioMaximo, setPrecioMAximo] = useState(0);
   const [rango, setRango] = useState(0);
   const [spiner, setSpiner] = useState(false);

   const getParapentes = () => {
      axios.get(URL).then((response) => {
         response.data[0].categoria ? seleccionarClase(response.data) : null;
         seleccionarFabricantes(response.data);
         calcularPrecioMaximo(response.data);
         setSpiner(true);
      });
   };

   const calcularPrecioMaximo = (data = null) => {
      if (data) {
         const precioMaximo = data.map((precios) => {
            return precios.price;
         });

         setPrecioMAximo(Math.max(...precioMaximo));
         setRango(Math.max(...precioMaximo));
      }
   };
   const seleccionarFabricantes = (data) => {
      const fabricantes = data.map((elemento) => {
         return elemento.marca.nombre;
      });

      const fabricantesUnicos = fabricantes.filter((item, index) => {
         return fabricantes.indexOf(item) === index;
      });
      setFabricantes(fabricantesUnicos);
   };

   const seleccionarClase = (data) => {
      console.log(data);
      const clases = data.map((elemento) => {
         return elemento.categoria;
      });
      const clasesUnicas = clases.filter((item, index) => {
         return clases.indexOf(item) === index;
      });
      setClases(clasesUnicas);
      console.log(clases);
   };
   useEffect(() => {
      getParapentes();
   }, []);

   const onSubmit = (data) => {
      getFiltros(data.selectFabricante, data.busquedaManual, rango, clases.length > 0 ? data.selectCategoria : null);
   };

   if (spiner) {
      loading(true);
      return (
         <form className="formParapentes" onSubmit={handleSubmit(onSubmit)}>
            <div className="selectores">
               <label htmlFor="selectFabricante">
                  <small>Selecciona fabricante</small>
               </label>
               <select {...register("selectFabricante")}>
                  <option value={""}>Todos</option>
                  {fabricantes
                     ? fabricantes.map((fabricante, index) => {
                          return (
                             <option className="estilosOpciones" value={fabricante} key={index}>
                                {fabricante}
                             </option>
                          );
                       })
                     : null}
               </select>
            </div>
            {clases.length > 0 ? (
               <div className="selectores">
                  <label htmlFor="selectCategoria">
                     <small>Selecciona categoria</small>
                  </label>
                  <select {...register("selectCategoria")}>
                     <option value={""}>Todos</option>
                     {clases
                        ? clases.map((clase, index) => {
                             return (
                                <option className="estilosOpciones" value={clase} key={index}>
                                   {clase}
                                </option>
                             );
                          })
                        : null}
                  </select>
               </div>
            ) : null}

            <div className="selectores">
               <label htmlFor="RangePrecios">
                  <small>Precio hasta: {rango}</small>
               </label>
               <input type="range" defaultValue={precioMaximo} onChange={(ev) => setRango(ev.target.value)} className="rango" max={precioMaximo} />
            </div>
            <div className="selectores">
               <label htmlFor="buscarManual">
                  <small>Busqueda manual:</small>
               </label>
               <div>
                  <input
                     placeholder={placeHolder}
                     {...register("busquedaManual", {
                        maxLength: 25,
                     })}
                  ></input>
                  {errors.busquedaManual?.type === "maxLength" && <p className="error">Maximo 25 caracteres.</p>}
               </div>
            </div>
            <div className="selectores ">
               <button type="submit" className="botonSelectores">
                  <img alt="LupaBuscar" src="https://img.icons8.com/ios/25/000000/search--v1.png" />
                  Buscar
               </button>
            </div>
         </form>
      );
   }
};

export default Buscador;
