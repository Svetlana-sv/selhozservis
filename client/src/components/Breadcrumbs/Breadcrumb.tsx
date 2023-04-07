import useBreadcrumbs, {BreadcrumbComponentType} from "use-react-router-breadcrumbs";
import style from './Breadcrumb.module.scss'
import {Link} from 'react-router-dom'
import {IoChevronForwardOutline} from "react-icons/all";
import {useGetProductQuery} from "../../api/productApi";
import {Typography} from "antd";
import {TypographyProps} from "antd/es/typography";

const CatalogBreadcrumb: BreadcrumbComponentType<'id'> = ({match}) => {
  const {data: product} = useGetProductQuery(match.params.id || '');

  return <span>
    {product?.data.attributes.title}
  </span>
}

const routes = [
  {path: '/', breadcrumb: 'Главная'},
  {path: '/catalog', breadcrumb: 'Каталог'},
  {path: '/contacts', breadcrumb: 'Контакты'},
  {path: '/catalog/:id', breadcrumb: CatalogBreadcrumb},
  {path: '/about', breadcrumb: 'О компании'},
  {path: '/contacts', breadcrumb: 'Контакты'},
  {path: '/card', breadcrumb: 'Карточка'},
  {path: '/cart', breadcrumb: 'Корзина'},
  {path: '/account', breadcrumb: 'Аккаунт'},
  {path: '/cart', breadcrumb: 'Корзина'},
];

const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return <div className={style.breadcrumb}>
    {breadcrumbs.map(({match, breadcrumb}) => (
      <Link key={match.pathname} to={match.pathname}>
        {breadcrumb}<IoChevronForwardOutline/>
      </Link>
    ))}
  </div>
}

export default Breadcrumb;