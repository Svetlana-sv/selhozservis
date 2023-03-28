import useBreadcrumbs from "use-react-router-breadcrumbs";
import style from './Breadcrumb.module.scss'
import { Link } from 'react-router-dom'
import {IoChevronForwardOutline} from "react-icons/all";

const routes = [
    { path: '/products/:id', breadcrumb: 'Example 1' },
    { path: '/', breadcrumb: 'Главная' },
    { path: '/catalog', breadcrumb: 'Каталог' },
    { path: '/contacts', breadcrumb: 'Контакты' },
    ];

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return <div className={style.breadcrumb}>
    {breadcrumbs.map(({ match, breadcrumb }) => (
<Link key={match.pathname} to={match.pathname}>
{breadcrumb}<IoChevronForwardOutline/>
</Link>
))}
    </div>
}

export default Breadcrumb;