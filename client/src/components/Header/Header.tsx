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
import {Badge, Divider, Dropdown, Space, theme} from "antd";
import {selectCart} from "../../store/reducer/cart";
import useAppSelector from "../../hooks/use-app-selector";
import ButtonIcon from "../lib/Button/ButtonIcon";
import ButtonToFavorite from "../lib/Button/ButtonToFavorite/ButtonToFavorite";
import {DownOutlined} from "@ant-design/icons";
import {Button} from "../lib/Button/Button";

const { useToken } = theme;

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
    // const data = [{title: 'aaa'}, {title: 'bbb'}];
    // const items: MenuProps['items'] = data.map((item, index) => {
    //     return {
    //         label: item.title,
    //         key: index
    //     }
    // });

    const cart = useAppSelector(selectCart);

    function handleFoodChange() {

    }

    const { token } = useToken();

    const contentStyle = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };

    const menuStyle = {
        boxShadow: 'none',
    };

    return <div className={style.wrapper}>
        <div className={style.header}>
            <div className={`${style.headerItem} ${style.headerLeftItem}`}>
                <ButtonIcon title={'Каталог'} link={'catalog'} icon={IoGridOutline}/>
                <ButtonIcon title={'Акции'} link={'catalog'} icon={IoPricetagsOutline}/>
                <ButtonIcon title={'О препаратах'} link={'catalog'} icon={IoReaderOutline}/>
            </div>

            <div className={style.headerItem}>
                <img src={logo} className={style.logo}/>
            </div>

            <div className={`${style.headerItem} ${style.headerRightItem}`}>
                {/*<div className={style.dropdown}>*/}
                {/*    <div className={style.btn}>*/}
                {/*        <ButtonToFavorite type='link' title="Избранное"/>*/}
                {/*    </div>*/}
                {/*    <div className={style.dropdown_content}>*/}
                {/*        <a href="">cdcdcd</a>*/}
                {/*        <hr/>*/}
                {/*        <Link to={'/favourite'}>Перейти в избранное</Link>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className={style.dropdown}>*/}
                {/*    <div className={style.btn}>*/}
                {/*        <ButtonIcon title={'Личный кабинет'} link={'account'} icon={IoPersonOutline}/>*/}
                {/*    </div>*/}
                {/*    <div className={style.dropdown_content}>*/}
                {/*        <Link to={'/favorite'}>Избранные товары</Link>*/}
                {/*        <hr/>*/}
                {/*        <Link to={'/account'}>Перейти в личный кабинет</Link>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <Dropdown
                    className={style.dropdown}
                    menu={{ items }}
                    dropdownRender={(menu) => (
                        <div style={contentStyle}>
                            {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
                            <Divider style={{ margin: 0 }} />
                            <Space style={{ padding: 8 }}>
                                <Button><Link to={'/account'}>Войти/зарегистрироваться</Link></Button>
                            </Space>
                        </div>
                    )}
                >
                    <a onClick={(e) => e.preventDefault()}>
                            <ButtonIcon title={'Личный кабинет'} link={'account'} icon={IoPersonOutline}/>
                            {/*<DownOutlined />*/}
                    </a>
                </Dropdown>


                <button>
                    <Badge count={cart.length} color='#994C4C'>
                        <Link to={"/cart"}><IoCartOutline size={28} style={{marginRight: '10px'}}/></Link></Badge>
                    <p style={{marginLeft: '12px'}}>Корзина</p>
                </button>


            </div>
        </div>
    </div>
}

export default Header;