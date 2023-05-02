import useBreadcrumbs, {BreadcrumbComponentType} from "use-react-router-breadcrumbs";
import style from './Breadcrumb.module.scss'
import {Link} from 'react-router-dom'
import {IoChevronForwardOutline} from "react-icons/all";
import {useGetProductQuery} from "../../api/productApi";
import {Typography} from "antd";
import {TypographyProps} from "antd/es/typography";
import Wrapper from "../lib/Wrapper/Wrapper";
import { routes } from "./BreadcrumbRoutes";

const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return <Wrapper>
  <div className={style.breadcrumb}>
    {breadcrumbs.map(({match, breadcrumb}) => (
      <Link key={match.pathname} to={match.pathname}>
        {breadcrumb}<IoChevronForwardOutline/>
      </Link>
    ))}
  </div> 
   </Wrapper>
}

export default Breadcrumb;