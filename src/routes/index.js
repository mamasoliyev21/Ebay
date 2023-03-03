import Slick from "../components/hero/Slick";
import { Route, Switch } from "react-router-dom";
import Registr from "./registr/Registr";
import Sign from "./sign_in/Sign";
import Home from "./home/Home";
import See_all from "./plp/Plp";
import Searchvalue from "./searchvalue/Searchvalue";
import Pdp from "./pdp/Pdp";
import Mainproduct from "../components/mainproduct/Mainproduct";
import Add_card from "../components/add-card/Add_card";
const Routes = () => {
  return (

    <Switch>
    <Route exact path='/'>
      <Home/>
    </Route>
    <Route  path='/registr'>
      <Registr/>
    </Route>
    <Route  path='/sign_in'>
      <Sign/>
    </Route>
    <Route  path='/category/:id'>
      <See_all/>
    </Route>
    <Route path="/product/:id">
       <Searchvalue/>
    </Route>
    <Route path="/pdp/:id">
       <Pdp/>
    </Route>
    <Route path="/mainproduct">
       <Mainproduct/>
    </Route>
      <Route path="/result/:productName">
      <Searchvalue/>
    </Route>
    <Route path="/korzinka">
      <Add_card/>
    </Route>
    <Route path="/sign">
    <Sign/>
    </Route>
   
   </Switch>
  )
}
export default Routes