import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from "./Header.module.scss";
import logo from "../../assets/logo/logo-temp.png"
import type {MenuProps} from 'antd'
import {Title} from '../lib/Typography/Typography'

import {
    IoCartOutline,
    IoGridOutline,
    IoHeartOutline,
    IoPersonOutline, IoPricetagsOutline, IoReaderOutline,
} from "react-icons/io5";
import {Badge, Divider, Dropdown, Space, theme} from "antd";
import {selectCart} from "../../store/reducer/cart";
import useAppSelector from "../../hooks/use-app-selector";
import ButtonIcon from "../lib/Button/ButtonIcon";
import ButtonToFavourite from "../lib/Button/ButtonToFavourite/ButtonToFavourite";
import {DownOutlined} from "@ant-design/icons";
import {Button} from "../lib/Button/Button";
import {selectUserToken} from "../../store/reducer/authSlice";
import useMediaQuery from "../../hooks/useMediaQuery";

const {useToken} = theme;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link to={'/favorite'}>Избранные товары</Link>
        ),
        disabled: true,
    },
    {
        key: '2',
        label: (
            <Link to={'/account'}>Перейти в личный кабинет</Link>
        ),

    }
];

const Header = () => {
    const cart = useAppSelector(selectCart);

    const authToken = useAppSelector(selectUserToken);
    const isMobile = useMediaQuery("(max-width: 1135px)");

    return <div className={style.wrapper}>
        {isMobile ? <div className={style.hamburgerMenu}>
                <input type="checkbox" id={style.menuToggle}/>
                <label className={style.menuBtn} htmlFor={style.menuToggle}>
                    <span></span>
                </label>
                <div className={style.logoContainer}>
                    <img src={logo} className={style.logo}/>
                </div>
                <div className={style.menuBox}>
                    <div className={style.menuItemContainer}>
                        <ButtonIcon className={style.menuItem} title={'Каталог'} link={'catalog'} icon={IoGridOutline}/>
                        <ButtonIcon className={style.menuItem} title={'Акции'} link={'sale'} icon={IoPricetagsOutline}/>
                        <ButtonIcon className={style.menuItem} title={'О препаратах'} link={'guidebook'}
                                    icon={IoReaderOutline}/>
                        {authToken ?
                            <ButtonIcon className={style.menuItem} title={'Личный кабинет'} link={'account'}
                                        icon={IoPersonOutline}/>
                            :
                            <ButtonIcon className={style.menuItem} title={'Личный кабинет'} link={'authorization'}
                                        icon={IoPersonOutline}/>
                        }
                        <button className={style.menuItem}>
                            <Badge count={cart.length} color='#994C4C'>
                                <Link to={"/cart"}><IoCartOutline size={28} style={{marginRight: '10px'}}/></Link></Badge>
                            {cart.length > 0 ?
                                <Title style={{marginLeft: '9px'}} fontSize={'22px'} weight={'500'}>Корзина</Title>
                                :
                                <Title fontSize={'22px'} weight={'500'}>Корзина</Title>
                            }
                        </button>
                    </div>
                </div>
            </div>
            :
            <div className={style.header}>
                <div className={`${style.headerItem} ${style.headerLeftItem}`}>
                    <ButtonIcon title={'Каталог'} link={'catalog'} icon={IoGridOutline}/>
                    <ButtonIcon title={'Акции'} link={'sale'} icon={IoPricetagsOutline}/>
                    <ButtonIcon title={'О препаратах'} link={'guidebook'} icon={IoReaderOutline}/>
                </div>

                <div className={style.headerItem}>
                    <img src={logo} className={style.logo}/>
                </div>

                <div className={`${style.headerItem} ${style.headerRightItem}`}>
                    {authToken ?
                        <ButtonIcon title={'Личный кабинет'} link={'account'} icon={IoPersonOutline}/>
                        :
                        <ButtonIcon title={'Личный кабинет'} link={'authorization'} icon={IoPersonOutline}/>
                    }
                    <button className={style.rightButton}>
                        <Badge count={cart.length} color='#994C4C'>
                            <Link to={"/cart"}><IoCartOutline size={28} style={{marginRight: '10px'}}/></Link></Badge>
                        {cart.length > 0 ?
                            <Title style={{marginLeft: '9px'}} fontSize={'22px'} weight={'500'}>Корзина</Title>
                            :
                            <Title fontSize={'22px'} weight={'500'}>Корзина</Title>
                        }
                    </button>
                </div>
            </div>
        }
    </div>
}

export default Header;