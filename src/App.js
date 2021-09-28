import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Test from "./component/Test";
import Start from "./component/Start";

function App() {

  return (
      <Switch>
        <Route exact path={"/"} component = {Start}/>
        <Route path = {"/test"} component = {Test} />
        <Route render = { () => <h1>404</h1> }/>
      </Switch>
  )

}

export default App;
