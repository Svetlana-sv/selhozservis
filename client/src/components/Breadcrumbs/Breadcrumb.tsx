import { Link, useLocation } from 'react-router-dom'
import style from './Breadcrumb.module.scss'

function Breadcrumb() {
    // const location = useLocation();
    // todo Breadcrumb
    return <>
    <div className={style.breadcrumb}>
        <p>Главная / Каталог</p>
    </div>
    </>
}

export default Breadcrumb;