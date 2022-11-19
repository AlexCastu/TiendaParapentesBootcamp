import Producto from "../components/Componentes_Productos/Producto/Producto";

const P_Accesorios = () => {
   const data = {
      categoriaBuscador: "allAccesorios",
      categoriaAxios: "accesorios",
      h1Titulo: "Accesorios",
      descripcion:
         "Aceleradores, mosquetones, soportes, mandos... Encuentra esa pieza que te falta para conseguir un vuelo perfecto, para mejorar en la competición, o el repuesto de seguridad para tener un equipo completo incluso ante los imprevistos. Utiliza nuestro comparador para elegir exactamente lo que necesitas o pregunta en la sección de contacto.",
      producto: "ACCESORIOS",
      placeholder: "Casco",
   };

   return <Producto data={data}></Producto>;
};

export default P_Accesorios;
