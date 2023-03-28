import React from 'react';
import Search from "../../components/Search/Search";
import Product from "../../components/Card/Card";
import style from './Catalog.module.scss'
import CatalogFilter from "../../components/Catalog/CatalogFilter";
import {useGetAllProductsQuery, useGetProductQuery} from '../../api/productApi';
import CatalogItem from "../../components/Catalog/CatalogItem"
import {Input} from "../../components/lib/Input/Input";
import {Typography} from "../../components/lib/Typography/Typography";

const Catalog = () => {
    const {data: products, isError, isFetching} = useGetAllProductsQuery();
    console.log(products);

    return <div className={style.catalog}>
        <div>
            <Search/>
        </div>

        <div>
            <CatalogFilter/>
        </div>

        <div className={style.catalogList}>
            {products?.data.map(
                product => <CatalogItem key={product.id} product={product}/>)
            }
        </div>
    </div>
}

export default Catalog;