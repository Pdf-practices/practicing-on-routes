import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";
import Home from "../page/home";
import RedirectPage from "../page/redirect";

const Routers = () => {
   const isLoggedIn = false;

   return (
      <Router>
         <Switch>
            <Route exact path="/">
               <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/redirect" component={RedirectPage} />
         </Switch>
      </Router>
   );
};

export default Routers;
