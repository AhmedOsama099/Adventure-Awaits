import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import SignUp from "./Components/Pages/SignUp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// import "../node_modules/jquery/dist/jquery";
// import "../node_modules/bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
