import React from 'react';
import Search from "../../components/Search/Search";
import Product from "../../components/Product/Product";
import useAppSelector from "../../hooks/use-app-selector";
import {selectCart} from "../../store/reducer/cart";
import CatalogFilter from "../../components/Catalog/CatalogFilter";
import CatalogList from "../../components/Catalog/CatalogList";

const Catalog = () => {


    return <React.Fragment>


        <Search/>
        <div>
            <div><CatalogFilter/></div>
            <div><CatalogList/></div>

        </div>
        <Product/>

    </React.Fragment>
}

export default Catalog;