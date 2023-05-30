import React, {useState} from 'react';
import Search from '../../components/Search/Search';
import style from './Catalog.module.scss';
import CatalogFilter from '../../components/Catalog/CatalogFilter';
import {useGetAllProductsQuery} from '../../api/productApi';
import {IoMenuOutline} from 'react-icons/all';
import {IoGridOutline} from 'react-icons/io5';
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import Card from '../../components/Card/Card';
import ButtonIcon from '../../components/lib/Button/ButtonIcon';
import {Pagination, Select, Skeleton} from 'antd';
import {Paragraphy} from '../../components/lib/Typography/Typography';
import {toast} from 'react-toastify';
import {Key} from 'antd/lib/table/interface';
import {Product} from '../../api/types/product';

enum Sort {
    ASC = 'asc',
    DESC = 'desc',
    DEFAULT = 'default',
}

const sortTypes = [
    {
        name: Sort.ASC,
        sortFn: (n1: Product, n2: Product) =>
            n1.attributes.price - n2.attributes.price,
    },
    {
        name: Sort.DESC,
        sortFn: (n1: Product, n2: Product) =>
            n2.attributes.price - n1.attributes.price,
    },
    {
        name: Sort.DEFAULT,
        sortFn: (n1: Product, n2: Product) => 1,
    },
];

const Catalog = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<Key[]>([]);
    const [filterStatus, setFilterStatus] = useState(true);

    const {data: products, isError, isFetching} = useGetAllProductsQuery();
    const [sortingCard, setSortingCard] = useState('vertical');
    const [sortingType, setSortingType] = useState(Sort.DEFAULT);
    const [currentPage, setCurrentPage] = useState(0);

    const pageSize = 10;
    const pageCount = Math.ceil(products?.data.length || 0 / pageSize);

    const arr = products?.data.slice(
        currentPage * pageSize,
        currentPage * pageSize + pageSize
    );

    const PaginationChange = (page: number, pageSize: number) => {
        setCurrentPage(page - 1);
    };

    const handleChange = (value: Sort) => {
        setSortingType(value);
    };

    return (
        <Wrapper>
            <div className={style.catalog}>
                <div className={style.catalogFilter}>
                    <CatalogFilter
                        setFilter={setFilter}
                        setFilterStatus={setFilterStatus}
                    />
                </div>
                <div>
                    <Search searchText={search} setSearchText={setSearch}/>

                    <div>
                        <div>
                            <div className={style.sortingBlock}>
                                <div className={style.sorting}>
                                    <Paragraphy
                                        fontSize={'18px'}
                                        weight={'400'}
                                        margin={'0px 10px 0px 0px'}
                                    >
                                        Сортировать:{' '}
                                    </Paragraphy>
                                    <Select
                                        defaultValue={Sort.DEFAULT}
                                        style={{width: 200}}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: Sort.DEFAULT,
                                                label: 'не выбрано',
                                            },
                                            {
                                                value: Sort.ASC,
                                                label: 'по возрастанию цены',
                                            },
                                            {
                                                value: Sort.DESC,
                                                label: 'по убыванию цены',
                                            },
                                        ]}
                                    />
                                </div>

                                <div className={style.sortingCard}>
                                    <Paragraphy
                                        className={style.sortingCardTitle}
                                        fontSize={'18px'}
                                        weight={'400'}
                                    >
                                        Вид:
                                    </Paragraphy>
                                    <div>
                                        <ButtonIcon
                                            icon={IoMenuOutline} colorIcon={sortingCard ==='horizontal' ? '#592b33' : '#656464'}
                                            onClick={() => setSortingCard('horizontal')}
                                        />
                                        <ButtonIcon
                                            className={style.rightButton} colorIcon={sortingCard ==='vertical' ? '#592b33' : '#656464'}
                                            icon={IoGridOutline}
                                            onClick={() => setSortingCard('vertical')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={style.catalogList}>
                                {isFetching ? (
                                    <Skeleton active/>
                                ) : (
                                    products?.data
                                        .filter((product) =>
                                            product.attributes.title
                                                .toLowerCase()
                                                .includes(search)
                                        )
                                        .filter((product, index) => {
                                            if (filterStatus) {
                                                return true;
                                            }
                                            const a =
                                                product.attributes.categories.data.find(
                                                    () => true
                                                );
                                            if (a) {
                                                return filter.includes(a.id.toString());
                                            }
                                        })
                                        .sort(
                                            (n1, n2) =>
                                                sortTypes
                                                    .find(
                                                        (type) =>
                                                            type.name === sortingType
                                                    )
                                                    ?.sortFn(n1, n2) || -1
                                        )
                                        .slice(
                                            currentPage * pageSize,
                                            currentPage * pageSize + pageSize
                                        )
                                        .map((product) => (

                                            <Card
                                                key={product.id}
                                                product={product}
                                                type={sortingCard}
                                            />
                                        ))
                                )}
                            </div>

                            <div className={style.paginationBlock}>
                                <Pagination
                                    defaultPageSize={pageSize}
                                    defaultCurrent={1}
                                    total={products?.data.length}
                                    onChange={PaginationChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Wrapper>
    );
};

export default Catalog;
