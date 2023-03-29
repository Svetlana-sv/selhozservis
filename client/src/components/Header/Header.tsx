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
import {Badge} from "antd";
import {LockOutlined, SmileOutlined, SolutionOutlined, PoweroffOutlined, TranslationOutlined} from "@ant-design/icons";

const Header = () => {

    return <>
        <div className={style.header}>
            <div className={style.headerItem}>
                <button>
                    <Link to={"/catalog"}><IoGridOutline size={22} style={{marginRight: '10px'}}/>Каталог</Link>
                </button>
                <button>

                    <Link to={"/"}><IoPricetagsOutline size={22} style={{marginRight: '10px'}}/>Акции</Link>
                </button>
                {/*<button>*/}
                {/*    <Link to={"/"}><IoReaderOutline size={22}/>Справочник</Link>*/}
                {/*</button>*/}
            </div>
            <div className={style.headerItem}>
                <img src={logo} className={style.logo}/>
            </div>
            <div className={style.headerItem}>

                    <button>
                        <Link to={"/cart"}><IoHeartOutline size={28}/></Link>
                    </button>


                <button>
                    <Link to={"/cart"}><IoPersonOutline size={28}/></Link>
                </button>
                <button>
                    <Badge count={5}>
                        <Link to={"/cart"}><IoCartOutline size={28}/></Link></Badge>
                </button>
            </div>
        </div>
    </>
}

export default Header;