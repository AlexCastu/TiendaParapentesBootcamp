import { useState } from "react";
import { createContext } from "react";

export const ContextoCesta = createContext();

export const DatosContexto = ({ children }) => {
  const [estado, setEstado] = useState(localStorage.getItem("cesta"));
  return (
    <ContextoCesta.Provider value={{ estado, setEstado }}>
      {children}
    </ContextoCesta.Provider>
  );
};
