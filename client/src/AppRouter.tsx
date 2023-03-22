import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux';
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import {Content} from "antd/lib/layout/layout";
import Catalog from "./pages/Catalog/Catalog";

function AppRouter() {

    return (

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
        </Routes>


    )
}

export default AppRouter;
