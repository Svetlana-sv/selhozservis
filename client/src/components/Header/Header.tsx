import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from "./Header.module.scss"
import logo from "../../assets/logo/logo-temp.png"

import {
    IoCartOutline,
    IoGridOutline,
    IoHeartOutline,
    IoMenuOutline,
    IoPersonOutline, IoPricetagsOutline, IoReaderOutline,
    IoSearchOutline
} from "react-icons/io5";



const Header = () => {


    return <>
        <div className={style.header}>
            <div className={style.headerItem}>
                <nav>
                    <ul>
                    <li>
                        <div>
                            <IoGridOutline size={22}/>
                            <a>Каталог</a>
                        </div>
                    </li>

                    <li>
                        <div>

                            <IoPricetagsOutline size={22}/>
                            <Link to={"/"}>Акции</Link>
                        </div>
                    </li>

                    {/*<li>*/}
                    {/*    <IoReaderOutline/>*/}
                    {/*    <Link to={"/"}>Справочник</Link>*/}
                    {/*</li>*/}
                    </ul>
                </nav>
            </div>
            <div className={style.headerItem}>
                <img src={logo} className={style.logo}/>
            </div>
            <div className={style.headerItem}>
                <nav className={style.headerItemRight}>

                    <ul>
                    <li>
                    <IoHeartOutline size={28}/>

                    </li>
                        <li>
                        <IoPersonOutline size={28}/>

                        </li>
                        <li>
                        <IoCartOutline size={28}/>

                        </li>
                    </ul>
                </nav>



            </div>

        </div>
    </>
}

export default Header;