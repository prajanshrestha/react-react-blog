import NavBar from './components/NavBar';
import Home from './components/Home';
import Create from "./components/BlogCreate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/create">
              <Create />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/blog/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
