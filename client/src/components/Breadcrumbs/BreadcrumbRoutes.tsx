import { BreadcrumbComponentType } from "use-react-router-breadcrumbs";
import { useGetProductQuery } from "../../api/productApi";
import React from "react";
import {Route} from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

const CatalogBreadcrumb: BreadcrumbComponentType<'id'> = ({match}) => {
    const {data: product} = useGetProductQuery(match.params.id || '');
  
    return <span>
      {product?.data.attributes.title}
    </span>
  }

export const routes = [
    {path: '/', breadcrumb: 'Главная'},
    {path: '/catalog', breadcrumb: 'Каталог'},
    {path: '/contacts', breadcrumb: 'Контакты'},
    {path: '/catalog/:id', breadcrumb: CatalogBreadcrumb},
    {path: '/about', breadcrumb: 'О компании'},
    {path: '/contacts', breadcrumb: 'Контакты'},
    {path: '/card', breadcrumb: 'Карточка'},
    {path: '/cart', breadcrumb: 'Корзина'},
    {path: '/account', breadcrumb: 'Личный кабинет'},
    {path: '/order', breadcrumb: 'Оформление заказа'},
    {path: '/wholesale', breadcrumb: 'Оптовым покупателям'},
    {path: '/manufacturers', breadcrumb: 'Производители'},
    {path: '/sale', breadcrumb: 'Акции'},
    {path: '/guidebook', breadcrumb: 'О препаратах'},
    {path: '/PublicOfferAgreement', breadcrumb: 'Договор публичной оферты'},
    {path: '/PersonalDataProtection', breadcrumb: ' Защита персональных данных'},
    {path: '/paymentAndDelivery', breadcrumb: 'Оплата и доставка'},
    {path: '/authorization', breadcrumb: 'Авторизация'},
    {path: '/registration', breadcrumb: 'Регистрация'},
  ];