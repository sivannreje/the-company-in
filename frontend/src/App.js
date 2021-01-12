import "./App.css";
import Company from "./components/pages/Company";
import WishList from "./components/pages/WishList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact={true} path="/" component={WishList} />
          <Route exact={true} path="/:name" component={Company} />
      </Router>
    </div>
  );
}

export default App;
