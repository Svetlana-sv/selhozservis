import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from "./Header.module.scss"
import logo from "../../assets/logo/logo-temp.png"
import type {MenuProps} from 'antd'

import {
    IoCartOutline,
    IoGridOutline,
    IoHeartOutline,
    IoPersonOutline, IoPricetagsOutline, IoReaderOutline,
} from "react-icons/io5";
import {Badge} from "antd";
import {selectCart} from "../../store/reducer/cart";
import useAppSelector from "../../hooks/use-app-selector";
import ButtonIcon from "../lib/Button/ButtonIcon";
import ButtonToFavorite from "../lib/Button/ButtonToFavorite/ButtonToFavorite";

const Header = () => {
    const data = [{title: 'aaa'}, {title: 'bbb'}];
    const items: MenuProps['items'] = data.map((item, index) => {
        return {
            label: item.title,
            key: index
        }
    });

    const cart = useAppSelector(selectCart);

    function handleFoodChange() {

    }

    return <div className={style.wrapper}>
        <div className={style.header}>
            <div className={`${style.headerItem} ${style.headerLeftItem}`}>
                <ButtonIcon title={'Каталог'} link={'catalog'} icon={IoGridOutline}/>
                <ButtonIcon title={'Акции'} icon={IoPricetagsOutline}/>
                <ButtonIcon title={'Справочник'} icon={IoReaderOutline}/>
            </div>

            <div className={style.headerItem}>
                <img src={logo} className={style.logo}/>
            </div>

            <div className={`${style.headerItem} ${style.headerRightItem}`}>
                <div className={style.dropdown}>
                    <div className={style.btn}>
                        <ButtonToFavorite type='link' title="Избранное"/>
                    </div>
                    <div className={style.dropdown_content}>
                        <a href="">cdcdcd</a>
                        <hr/>
                        <Link to={'/favourite'}>Перейти в избранное</Link>
                    </div>
                </div>

                <div className={style.dropdown}>
                    <div className={style.btn}>
                        <ButtonIcon title={'Аккаунт'} link={'account'} icon={IoPersonOutline}/>
                    </div>
                    <div className={style.dropdown_content}>
                        <a href="">cdcdcd</a>
                        <hr/>
                        <Link to={'/account'}>Перейти в личный кабинет</Link>
                    </div>
                </div>


                <button>
                    <Badge count={cart.length}>
                        <Link to={"/cart"}><IoCartOutline size={28} style={{marginRight: '10px'}}/></Link></Badge>
                </button>


            </div>
        </div>
    </div>
}

export default Header;