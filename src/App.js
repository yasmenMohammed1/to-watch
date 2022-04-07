import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Movies from "./pages/movies.jsx";
import Navbar from "./components/NavBar/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/movies"} component={Movies} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
