import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../Footer/Footer";
import toast, { Toaster } from "react-hot-toast";

import "./Contacto.css";
const Contacto = () => {
   const {
      register,
      handleSubmit,
      resetField,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      toast.success(`Recibido ${data.Nombre}, en breve nos pondremos en contacto contigo!`);
      resetField("Nombre");
      resetField("Telefono");
      resetField("Email");
      resetField("Mensaje");
   };

   return (
      <>
         <div className="containerContacto">
            <div className="contenido">
               <div className="divDescripcion">
                  <h1>Formulario de contacto</h1>
                  <p>Tienes dudas?... Quiere un producto personalizado?... No sabes cual es el articulo indicado para tus necesidades?...</p>{" "}
                  <h5>No esperes mas y escribenos...</h5>
               </div>
               <div className="containerForm">
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div>
                        <label>Nombre</label>
                        <input
                           className="inputContacto"
                           placeholder="Ej: Alex"
                           type="text"
                           {...register("Nombre", { required: true, minLength: 3, maxLength: 50 })}
                        ></input>{" "}
                        {errors.Nombre?.type === "required" && <p className="alertWarning">El nombre es obligatorio</p>}
                        {errors.Nombre?.type === "minLength" && <p className="alertDanger">El nombre no puede tener menos de 3 letras</p>}
                        {errors.Nombre?.type === "maxLength" && <p className="alertDanger">El nombre no puede tener mas de 50 letras</p>}
                     </div>
                     <div>
                        <label>Telefono</label>
                        <input
                           className="inputContacto"
                           type="text"
                           placeholder="Ej: 661547454"
                           {...register("Telefono", { required: true, pattern: "((6|7)[ -]*([0-9][ -]*){8}" })}
                        ></input>{" "}
                        {errors.Telefono?.type === "required" && <p className="alertWarning">El telefono es obligatorio</p>}
                        {errors.Telefono?.type === "pattern" && <p className="alertDanger">Telefono incorrecto</p>}
                     </div>
                     <div>
                        <label>Email</label>
                        <input
                           className="inputContacto"
                           placeholder="Ej: ejemplo@ejemplo.ej"
                           type="email"
                           {...register("Email", { required: true })}
                        ></input>{" "}
                        {errors.Email?.type === "required" && <p className="alertWarning">El email es obligatorio</p>}{" "}
                     </div>
                     <div className="divTexArea">
                        <label>Mensaje</label>
                        <textarea
                           placeholder="Queria un parapente que no teneis en la tienda..."
                           {...register("Mensaje", { required: true, minLength: 10, maxLength: 500 })}
                        ></textarea>
                        {errors.Mensaje?.type === "required" && <p className="alertWarning">Necesitamos un mensaje.</p>}
                        {errors.Mensaje?.type === "minLength" && <p className="alertDanger">El mensaje no puede tener menos de 10 caracteres</p>}
                        {errors.Mensaje?.type === "maxLength" && <p className="alertDanger">El mensaje no puede tener mas de 500 caracteres</p>}
                     </div>
                     <div>
                        <button className="botonEnviarContacto" type="submit">
                           <span>Mandar mensaje</span>
                           <img src="https://img.icons8.com/external-filled-agus-raharjo/32/null/external-send-social-media-filled-agus-raharjo.png" />
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>{" "}
         <Toaster position="top-left" reverseOrder={false} />
         <Footer></Footer>
      </>
   );
};

export default Contacto;
