import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Movies from "./pages/movies.jsx";
import Navbar from "./components/NavBar/navbar";
import Geners from "./pages/geners";
import Register from "./components/Register/Register";
import GenereMovies from "./pages/singleGenrePage";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Provider store={store}>
          <Route exact path={"/geners"} exaxt component={Geners} />
          <Route exact path={"/movies/"} component={Movies} />
          <Route exact path={"/"} component={Movies} />

          <Route exact path={"/movies/:search"} component={Movies} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path="/genre/:id" component={GenereMovies} />
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
