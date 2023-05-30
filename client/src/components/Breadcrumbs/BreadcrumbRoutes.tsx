import { BreadcrumbComponentType } from 'use-react-router-breadcrumbs';
import { useGetProductQuery } from '../../api/productApi';
import React from 'react';
import { useGetOrderQuery } from '../../api/orderApi';
import { useGetGuidesByIdQuery } from '../../api/guideBookApi';

const CatalogBreadcrumb: BreadcrumbComponentType<'id'> = ({ match }) => {
    const { data: product } = useGetProductQuery(match.params.id || '');

    return <span>{product?.data.attributes.title}</span>;
};

const GuideBookBreadcrumb: BreadcrumbComponentType<'id'> = ({ match }) => {
    const { data: guideBook } = useGetGuidesByIdQuery(match.params.id || '');
    return <span>{guideBook?.data[0].attributes.title}</span>;
};

const OrderHistoryBreadcrumb: BreadcrumbComponentType<'id'> = ({ match }) => {
    const { data: order } = useGetOrderQuery(match.params.id || '');

    return <span>Заказ №{order?.data[0].id}</span>;
};

export const routes = [
    { path: '/', breadcrumb: 'Главная' },
    { path: '/catalog', breadcrumb: 'Каталог' },
    { path: '/contacts', breadcrumb: 'Контакты' },
    { path: '/catalog/:id', breadcrumb: CatalogBreadcrumb },
    { path: '/about', breadcrumb: 'О компании' },
    { path: '/contacts', breadcrumb: 'Контакты' },
    { path: '/card', breadcrumb: 'Карточка' },
    { path: '/cart', breadcrumb: 'Корзина' },
    { path: '/account', breadcrumb: 'Личный кабинет' },
    { path: '/order', breadcrumb: 'Оформление заказа' },
    { path: '/wholesale', breadcrumb: 'Оптовым покупателям' },
    { path: '/manufacturers', breadcrumb: 'Производители' },
    { path: '/sale', breadcrumb: 'Акции' },
    { path: '/guidebook', breadcrumb: 'О препаратах' },
    { path: '/guidebook/:id', breadcrumb: GuideBookBreadcrumb },
    { path: '/PublicOfferAgreement', breadcrumb: 'Договор публичной оферты' },
    {
        path: '/PersonalDataProtection',
        breadcrumb: ' Защита персональных данных',
    },
    { path: '/paymentAndDelivery', breadcrumb: 'Оплата и доставка' },
    { path: '/authorization', breadcrumb: 'Авторизация' },
    { path: '/registration', breadcrumb: 'Регистрация' },
    { path: '/account/history', breadcrumb: 'История заказов' },
    { path: '/account/favourites', breadcrumb: 'Избранные товары' },
    { path: '/account/personalData', breadcrumb: 'Персональные данные' },
    { path: '/account/history/:id', breadcrumb: OrderHistoryBreadcrumb },
];
