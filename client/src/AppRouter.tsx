import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux';
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import {Content} from "antd/lib/layout/layout";
import Catalog from "./pages/Catalog/Catalog";
import About from "./pages/About/About";
import Card from "./pages/Card/Card";
import Contacts from "./pages/Contacts/Contacts";
import Account from "./pages/Account/Account";
import Order from "./pages/Order/Order";
import Wholesale from "./pages/Wholesale/Wholesale";

function AppRouter() {

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/catalog/:id' element={<Card/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/wholesale' element={<Wholesale/>}/>
        </Routes>
    )
}

export default AppRouter;
