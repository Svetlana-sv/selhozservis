import useBreadcrumbs from "use-react-router-breadcrumbs";
import style from './Breadcrumb.module.scss'
import { Link } from 'react-router-dom'

const routes = [
      { path: '/products/:id', breadcrumb: 'Example 1' },
      { path: '/', breadcrumb: 'Главная' },
    { path: '/catalog', breadcrumb: 'Каталог' },
    { path: '/contacts', breadcrumb: 'Контакты' },
    ];

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return <>
    {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link key={match.url} to={match.url}>
          {breadcrumb} / 
        </Link>
      ))}
    </>
}

export default Breadcrumb;