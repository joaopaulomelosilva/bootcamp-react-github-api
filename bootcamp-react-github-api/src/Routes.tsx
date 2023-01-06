import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from './pages/Search';




const Routes = () => (
    <BrowserRouter>
        <Navbar></Navbar>

        <Switch>
            <Route path="/" exact>
                <Home></Home>
            </Route>
            <Route path="/search" exact>
                <Search></Search>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;