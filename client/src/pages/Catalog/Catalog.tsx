import React from 'react';
import Search from "../../components/Search/Search";
import Product from "../../components/Product/Product";
import useAppSelector from "../../hooks/use-app-selector";
import {selectCart} from "../../store/reducer/cart";
import CatalogFilter from "../../components/Catalog/CatalogFilter";
import { useGetAllProductsQuery, useGetProductQuery } from '../../api/productApi';
import CatalogItem from "../../components/Catalog/CatalogItem"

const Catalog = () => {
    const {data: products, isError, isFetching} = useGetAllProductsQuery();
    console.log(products);
    
    return <React.Fragment>


        <Search/>
        <div>
            <CatalogFilter/>

            
            
        </div>
        products:
        {
            products?.data.map(
                product => <CatalogItem product={product}/>)
            }
        end;
        <Product/>

    </React.Fragment>
}

export default Catalog;