import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ResultPage from "./components/ResultPage/ResultPage";
import AppBar from "./components/AppBar/AppBar";
import Begin from "./components/Begin/Begin";

function App() {
  return (
    <>
      <AppBar />

      <div className="main_app">
        <div className="main_app_content">
          <div className="main_app_content_inputs">
            <Router>
              <Switch>
              <Route exact path="/">
                  <Begin />
                </Route>
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route exact path="/result">
                  <ResultPage />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
