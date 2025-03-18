import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import App from './App.jsx';  
import TodasLavanderias from './TodasLavanderias.jsx'; 
import DetalhesLavanderia from './DetalhesLavanderia.jsx';  
import Sobre from "./sobre.jsx";
import Cadastro from "./Cadastro.jsx";
import Login from "./Login.jsx";
import NovoCadastro from './NovoCadastro.jsx';  

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
  },
  {
    path: "/todaslavanderias", 
    element: <TodasLavanderias />,  
  },
  {
    path: "/lavanderia/:id",  
    element: <DetalhesLavanderia />,  
  },
  {
    path: "/sobre", 
    element: <Sobre />,  
  },
  {
    path: "/cadastro", 
    element: <Cadastro />,  
  },
  {
    path: "/login", 
    element: <Login />,  
  },
  {
    path: "/novocadastro",  
    element: <NovoCadastro />,  
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
