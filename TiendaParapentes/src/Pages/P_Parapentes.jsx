import Producto from "../components/Componentes_Productos/Producto/Producto";

const P_Parapentes = () => {
   const data = {
      categoriaBuscador: "allParapentes",
      categoriaAxios: "parapentes",
      h1Titulo: "Velas o parapentes",
      descripcion:
         "Aunque la vela del parapente, también conocida como ala o dosel, puede parecerse de algún modo a la idea que tenemos de un paracaídas, sus formas son considerablemente diferentes. Un paracaídas puede tener forma redonda o rectangular y está diseñado para capturar el aire y descender con suavidad, mientras que el parapente está diseñado para planear y hacer vuelos. Tiene forma elíptica y está cuidadosamente diseñada para permitir que su estructura permanezca flotando en el aire, dependiendo de la meteorología, por horas… En nuestra tienda encontraras todo tipo de velas, desde velas o parapentes para principiantes hasta velas o parapentes de competicion.",
      producto: "PARAPENTES",
      placeholder: "Boomerang 13",
   };

   return <Producto data={data}></Producto>;
};

export default P_Parapentes;
