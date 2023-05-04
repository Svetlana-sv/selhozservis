import useBreadcrumbs, {BreadcrumbComponentType} from "use-react-router-breadcrumbs";
import style from './Breadcrumb.module.scss'
import {Link} from 'react-router-dom'
import {IoChevronForwardOutline} from "react-icons/all";
import Wrapper from "../lib/Wrapper/Wrapper";
import {Text} from "../lib/Typography/Typography";
import { routes } from "./BreadcrumbRoutes";

const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return <Wrapper>
  <div className={style.breadcrumb}>
    {breadcrumbs.map(({match, breadcrumb}) => (
      <Link key={match.pathname} to={match.pathname}>
        <Text type={'title'} fontSize={'20px'}>{breadcrumb}</Text><IoChevronForwardOutline/>
      </Link>
    ))}
  </div> 
   </Wrapper>
}

export default Breadcrumb;