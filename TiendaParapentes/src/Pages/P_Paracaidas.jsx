import Producto from "../components/Componentes_Productos/Producto/Producto";

const P_Paracaidas = () => {
   const data = {
      categoriaBuscador: "allParacaidas",
      categoriaAxios: "paracaidas",
      h1Titulo: "Paracaidas",
      descripcion:
         "El paracaídas de emergencia o reserva es una parte fundamental de nuestro equipo de vuelo, una “segunda oportunidad” en caso de que las cosas se tuerzan allá arriba, y por ello debemos prestar especial atención tanto a su correcto mantenimiento, como al uso correcto del mismo. en nuestra tienda encontraras los mejores paracaidas para que vueles seguso, aunque esperemos que nunca te hagan falta.",
      producto: "PARACAIDAS",
      placeholder: "Yeti",
   };

   return <Producto data={data}></Producto>;
};

export default P_Paracaidas;
