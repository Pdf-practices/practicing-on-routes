import { BaseSyntheticEvent, useState } from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
import Home from "./home";

const RedirectPage = () => {
   const [rutas, setRutas] = useState(false);

   const RedirectHome = () => {
      // e.preventDefault();
      // console.log("Hola mundo");
      return (
         <BrowserRouter>
            <Redirect to="/home" />
         </BrowserRouter>
      );
   };

   return (
      <div>
         <h3>Redirect</h3>
         <br />
         <button onClick={RedirectHome}>Ir al home</button>
      </div>
   );
};

export default RedirectPage;
