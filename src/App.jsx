import NavBar from './components/NavBar';
import Home from './components/Home';
import Create from "./components/BlogCreate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import BlogEdit from './components/BlogEdit';

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
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blog/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/blog/edit/:id">
              <BlogEdit />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
