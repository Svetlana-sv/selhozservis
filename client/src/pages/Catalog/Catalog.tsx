import React, {useState} from 'react';
import Search from "../../components/Search/Search";
import style from './Catalog.module.scss'
import CatalogFilter from "../../components/Catalog/CatalogFilter";
import {useGetAllProductsQuery} from '../../api/productApi';
import CardVertical from "../../components/Card/CardVertical/CardVertical";
import {IoMenuOutline, IoReorderThreeOutline} from "react-icons/all";
import {IoGridOutline} from "react-icons/io5";
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import Card from '../../components/Card/Card';
import ButtonIcon from '../../components/lib/Button/ButtonIcon';
import { Skeleton } from 'antd';

const Catalog = () => {
    const [search, setSearch] = useState('');
    const {data: products, isError, isFetching} = useGetAllProductsQuery();
    const [sortingType, setSortingType] = useState('vertical');

    return <Wrapper>
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
                    <ButtonIcon icon={IoMenuOutline} onClick={() => setSortingType('horizontal')} />
                    <ButtonIcon icon={IoGridOutline} onClick={() => setSortingType('vertical')}/>
                </div>
            </div>
            <div className={style.catalogList}>
                { isFetching? 
                <Skeleton active/>
                :           
                products?.data
                    .filter(product => product.attributes.title.toLowerCase().includes(search))
                    .map(    
                        product => <Card key={product.id} product={product} type={sortingType}/>
                        )
                }
            </div>
        </div>

    </div></Wrapper>
}

export default Catalog;