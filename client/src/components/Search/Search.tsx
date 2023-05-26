import { IoSearchOutline } from 'react-icons/io5';
import style from './Search.module.scss';

type searchProps = {
    searchText: string;
    setSearchText: (search: string) => void;
};

const Search = (props: searchProps) => {
    const { searchText, setSearchText } = props;
    return (
        <div className={style.search}>
            <input
                value={searchText}
                placeholder="Поиск по каталогу..."
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button>
                <IoSearchOutline size={28} className={style.icon} />
            </button>
        </div>
    );
};

export default Search;
