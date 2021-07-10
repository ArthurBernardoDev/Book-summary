import { Home } from "./pages/Home";

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Livros } from "./pages/Livros";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/livros" component={Livros} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
