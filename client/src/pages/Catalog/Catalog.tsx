import React, {useState} from 'react';
import Search from "../../components/Search/Search";
import style from './Catalog.module.scss'
import CatalogFilter from "../../components/Catalog/CatalogFilter";
import {useGetAllProductsQuery} from '../../api/productApi';
import CardVertical from "../../components/Card/CardVertical/CardVertical";
import {IoMenuOutline, IoReorderThreeOutline} from "react-icons/all";
import {IoGridOutline} from "react-icons/io5";

const Catalog = () => {
    const [search, setSearch] = useState('');
    const {data: products, isError, isFetching} = useGetAllProductsQuery();
    return <div className={style.wpapper}>
    <div className={style.catalog}>
        <div>
            <Search searchText={search} setSearchText={setSearch}/>
        </div>
        <div>
            <CatalogFilter/>
        </div>
        <div>
            <div className={style.sorting}>
                <p>Сортировать: по возрастанию цены</p>
                <div className={style.sortingCard}>
                    <IoMenuOutline size={20}/>
                    <IoGridOutline size={20}/>
                </div>
            </div>
            <div className={style.catalogList}>
                {products?.data
                    .filter(product => product.attributes.title.toLowerCase().includes(search))
                    .map(
                        product => <CardVertical key={product.id} product={product}/>)
                }
            </div>
        </div>

    </div></div>
}

export default Catalog;