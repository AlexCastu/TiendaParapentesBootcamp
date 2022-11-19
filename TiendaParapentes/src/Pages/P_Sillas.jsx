import Producto from "../components/Componentes_Productos/Producto/Producto";

const P_Sillas = () => {
   const data = {
      categoriaBuscador: "allSillas",
      categoriaAxios: "sillas",
      h1Titulo: "Sillas",
      descripcion:
         "En realidad, una silla es mucho más que un simple asiento. Es enlace que conecta al piloto con su vela y permite la transmisión de informaciones y el pilotaje. Igual que las botas permiten al esquiador controlar sus esquís, la silla juega un papel muy importante en el pilotaje de la vela.Forma parte de un trío (piloto/silla/vela) que alcanza su equilibrio óptimo cuando esos tres elementos se complementan entre sí. La vela, al volar en una masa de aire activa, transmite informaciones al piloto a través de la silla. El piloto reacciona a esas informaciones actuando directamente sobre la vela con los frenos, pero también con toda la parte de su cuerpo que está en contacto con la silla. La silla permite por tanto al piloto estar en sintonía con su vela. La mejor vela del mundo únicamente rendirá si los otros 2 elementos del trío trabajan en armonía con ella. En nuestra tienda encontraras la silla perfecta para ti!",
      producto: "SILLAS",
      placeholder: "Genie Race 4",
   };

   return <Producto data={data}></Producto>;
};

export default P_Sillas;
