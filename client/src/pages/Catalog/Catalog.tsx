import React from 'react';
import Search from "../../components/Search/Search";
import Product from "../../components/Card/Card";
import style from './Catalog.module.scss'
import CatalogFilter from "../../components/Catalog/CatalogFilter";
import {useGetAllProductsQuery, useGetProductQuery} from '../../api/productApi';
import CatalogItem from "../../components/Catalog/CatalogItem"
import {Input} from "../../components/Input/Input";
import {Typography} from "../../components/Typography/Typography";

const Catalog = () => {
    const {data: products, isError, isFetching} = useGetAllProductsQuery();
    console.log(products);

    return <div className={style.catalog}>
        <div>
            {/*<Search/>*/}
            <Input/>
            <Typography>Vbrf</Typography>
        </div>

        <div>
            <CatalogFilter/>
        </div>

        <div className={style.catalogList}>
            {products?.data.map(
                product => <CatalogItem product={product}/>)
            }
        </div>
    </div>
}

export default Catalog;