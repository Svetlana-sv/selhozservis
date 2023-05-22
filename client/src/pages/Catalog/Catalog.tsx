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
import {Pagination, Skeleton} from 'antd';
import {Text,Paragraphy} from '../../components/lib/Typography/Typography'
import {toast} from "react-toastify";
import dark = toast.dark;
import {Button} from "../../components/lib/Button/Button";
import {Key} from "antd/lib/table/interface";

const Catalog = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<Key[]>([]);
    const [filterStatus, setFilterStatus] = useState(true);

    const {data: products, isError, isFetching} = useGetAllProductsQuery();
    console.log('products', products)
    const [sortingType, setSortingType] = useState('vertical');
    const [currentPage, setCurrentPage] = useState(0);

    const pageSize = 10;
    const pageCount = Math.ceil(products?.data.length || 0 / pageSize);

    const arr = products?.data.slice(currentPage * pageSize, currentPage * pageSize + pageSize);

    const PaginationChange = (page: number, pageSize: number) => {
        setCurrentPage(page - 1);
    }


    const applyFilters = () => {
        setFilterStatus(false);
    }

    const resetFilters = () => {
        setFilterStatus(true);
    }

    return <Wrapper>
    <div className={style.catalog}>
        <div className={style.catalogFilter}>
            <CatalogFilter setFilter={setFilter} setFilterStatus={setFilterStatus}/>
            <div className={style.catalogFilterButtons}>
                {/*<Button onClick={applyFilters}>Применить</Button>*/}
                {/*<Button onClick={resetFilters}>Сбросить фильтры</Button>*/}
            </div>
        </div>
        <div>
            <Search searchText={search} setSearchText={setSearch}/>
        </div>

        <div>
            <div className={style.sorting}>
                <Paragraphy fontSize={'18px'} weight={'400'}>Сортировать: по возрастанию цены</Paragraphy>
                <div className={style.sortingCard}>
                    <Paragraphy className={style.sortingCardTitle} fontSize={'18px'} weight={'400'}>Вид:</Paragraphy>
                    <div>
                        <ButtonIcon icon={IoMenuOutline} onClick={() => setSortingType('horizontal')} />
                        <ButtonIcon className={style.rightButton} icon={IoGridOutline} onClick={() => setSortingType('vertical')}/>
                    </div>
                </div>
            {/*todo сбросить все, применить фильтры (кнопки сделать)*/}
            </div>
            <div className={style.catalogList}>
                { isFetching? 
                <Skeleton active/>
                :           
                products?.data
                    // todo фильтр по категориям
                    .filter(product => product.attributes.title.toLowerCase().includes(search))

                    .filter((product, index) => {
                        if (filterStatus) return true;
                        const a = product.attributes.categories.data.find(()=>true)
                        console.log(a)
                        if (a){
                            return filter.includes(a.id.toString())
                        }
                        return false;
                    })
                    .slice(currentPage * pageSize, currentPage * pageSize + pageSize)
                    .map(
                        product => <Card key={product.id} product={product} type={sortingType}/>
                        )
                }
            </div>

            <div className={style.paginationBlock}>
                <Pagination defaultPageSize={pageSize} defaultCurrent={1} total={products?.data.length} onChange={PaginationChange}/>
            </div>
        </div>

    </div></Wrapper>
}

export default Catalog;