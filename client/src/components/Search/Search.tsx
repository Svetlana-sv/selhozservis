import {IoSearchOutline} from "react-icons/io5";
import style from './Search.module.scss'

const Search = () => {
  return <div className={style.search}>
      <input placeholder="Поиск по каталогу..." type="text"/>
      <button>
      <IoSearchOutline size={24} className={style.icon}/>
      </button>
  </div>
}

export default Search;