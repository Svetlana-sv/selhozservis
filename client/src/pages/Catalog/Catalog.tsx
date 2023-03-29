import React from 'react';
import Search from "../../components/Search/Search";
import style from './Catalog.module.scss'
import CatalogFilter from "../../components/Catalog/CatalogFilter";
import {useGetAllProductsQuery} from '../../api/productApi';
import CardVertical from "../../components/Card/CardVertical/CardVertical";
import {useLocation} from "react-router-dom";

const Catalog = () => {
    const {data: products, isError, isFetching} = useGetAllProductsQuery();
    return <div className={style.catalog}>
        <div>
            <Search/>
        </div>

        <div>
            <CatalogFilter/>
        </div>

        <div className={style.catalogList}>
            {products?.data.map(
                product => <CardVertical key={product.id} product={product}/>)
            }
        </div>
    </div>
}

export default Catalog;