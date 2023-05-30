import { IoSearchOutline } from 'react-icons/io5';
import style from './Search.module.scss';

import React from 'react';

import { Input } from 'antd';

const { Search } = Input;
type searchProps = {
    searchText: string;
    setSearchText: (search: string) => void;
};

const SearchText = (props: searchProps) => {
    const { searchText, setSearchText } = props;

    const onSearch = (value: string) => setSearchText(value);
    return (
        <div className={style.search}>
            {/*<input*/}
            {/*    value={searchText}*/}
            {/*    placeholder="Поиск по каталогу..."*/}
            {/*    type="text"*/}
            {/*    onChange={(e) => setSearchText(e.target.value)}*/}
            {/*/>*/}
            <Search
                placeholder="Поиск по каталогу..."
                size={'large'}
                onSearch={onSearch}
                onChange={(e) => setSearchText(e.target.value)}
                className={style.searchInput}
            />
            {/*<button>*/}
            {/*    <IoSearchOutline size={28} className={style.icon} />*/}
            {/*</button>*/}
        </div>
    );
};

export default SearchText;
