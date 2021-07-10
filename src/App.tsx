import { Home } from "./pages/Home";

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Livros } from "./pages/Livros";
import { HabitosAtomicos } from "./pages/habitosAtomicos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/livros" component={Livros} />
        <Route path="/habitos-atomicos" component={HabitosAtomicos}></Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
