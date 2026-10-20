import { Route, Router, Switch } from "wouter";
import Index from "./pages/index";
import { Provider } from "./components/provider";

function App() {
  return (
    <Provider>
      {/* base keeps the router working when the app is served from a sub-path (GitHub Pages) */}
      <Router base={import.meta.env.BASE_URL}>
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
