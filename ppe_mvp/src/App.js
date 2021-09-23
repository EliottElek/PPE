import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Home from "./components/Home/Home";
import SearchPage from "./components/SearchPage/SearchPage";
import AppBar from "./components/AppBar/AppBar";
import Begin from "./components/Begin/Begin";

function App() {
  return (
    <>
      <AppBar />

      <div className="main_app">
        <div className="main_app_content">
          <div className="main_app_content_title">
            <Typography color="primary" variant="h4">
              Planifiez votre moment !
            </Typography>
            <Typography color="primary" variant="h6">
              PlanYourMoment t'aide à trouver une activité à faire pour votre journée, soirée...
            </Typography>
          </div>
          <div className="main_app_content_inputs">
            <Router>
              <Switch>
              <Route exact path="/">
                  <Begin />
                </Route>
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route exact path="/search">
                  <SearchPage />
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
