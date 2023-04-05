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
import DropdownMenu from "./DropdownMenu";
import {selectCart} from "../../store/reducer/cart";
import {useDispatch} from "react-redux";
import useAppSelector from "../../hooks/use-app-selector";

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

    return <>
        <div className={style.header}>
            <div className={style.headerItem}>
                <button>
                    <Link to={"/catalog"}><IoGridOutline size={22} style={{marginRight: '10px'}}/>Каталог</Link>
                </button>
                <button>

                    <Link to={"/"}><IoPricetagsOutline size={22} style={{marginRight: '10px'}}/>Акции</Link>
                </button>
                <button>
                    <Link to={"/"}><IoReaderOutline size={22} style={{marginRight: '10px'}}/>Справочник</Link>
                </button>
            </div>
            <div className={style.headerItem}>
                <img src={logo} className={style.logo}/>
            </div>

            <div className={style.headerItem}>

                <DropdownMenu
                    button={<button className={style.heart}>
                        <Link to={"/cart"}><IoHeartOutline size={28} style={{marginRight: '10px'}}/>Избранное</Link>
                    </button>}
                    label="Перейти в избранное ->"
                    options={[
                        {label: 'Fruit', value: 'fruit'},
                        // { label: 'Vegetable', value: 'vegetable' },
                        //
                        // { label: 'Meat', value: 'meat' },
                    ]}
                    value={'1'}
                    onChange={handleFoodChange}
                />

                <DropdownMenu
                    button={<button>
                        <Link to={"/account"}><IoPersonOutline size={28} style={{marginRight: '10px'}}/>Аккаунт</Link>
                    </button>}
                    label="Перейти в аккаунт ->"
                    options={[
                        {label: 'Fruit', value: 'fruit'},
                        // { label: 'Vegetable', value: 'vegetable' },
                        //
                        // { label: 'Meat', value: 'meat' },
                    ]}
                    value={'1'}
                    onChange={handleFoodChange}
                />


                <button>
                    <Badge count={cart.length}>
                        <Link to={"/cart"}><IoCartOutline size={28} style={{marginRight: '10px'}}/></Link></Badge>
                </button>



            </div>
        </div>
    </>
}

export default Header;