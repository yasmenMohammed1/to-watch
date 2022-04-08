import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Movies from "./pages/movies.jsx";
import Navbar from "./components/NavBar/navbar";
import Geners from "./pages/geners";
import Register from "./components/Register/Register";
import GenereMovies from "./pages/singleGenrePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/geners"} exaxt component={Geners} />
        <Route exact path={"/movies"} component={Movies} />

        <Route path={"/movies/:search"} component={Movies} />
        <Route path={"/register"} component={Register} />
        <Route exact path="/genre/:id" component={GenereMovies} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
