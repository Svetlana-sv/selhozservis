import Wrapper from '../../components/lib/Wrapper/Wrapper';
import Search from '../../components/Search/Search';
import { useState } from 'react';
import style from './GuideBook.module.scss';
import GuideBookItem from '../../components/GuideBook/GuideBookItem/GuideBookItem';

import Calculator from '../../components/Calculator/Calculator';
import { useGetGuidesQuery } from '../../api/guideBookApi';

const GuideBook = () => {
    const [search, setSearch] = useState('');
    const { data: guideBook, isLoading } = useGetGuidesQuery();

    return (
        <Wrapper>
            <Search searchText={search} setSearchText={setSearch} />
            <div className={style.itemsList}>
                {guideBook?.data
                    .filter((item) =>
                        item.attributes.title.toLowerCase().includes(search)
                    )
                    .map((item) => (
                        <GuideBookItem
                            key={item.id}
                            id={item.id}
                            title={item.attributes.title}
                        />
                    ))}
            </div>
            <br />
            <p>Калькулятор</p>
            <br />
            <Calculator />
            <br />
        </Wrapper>
    );
};

export default GuideBook;
