import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
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
      </Switch>
    </Router>
  );
}

export default App;
