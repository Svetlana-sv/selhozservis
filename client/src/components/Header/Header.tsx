import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import style from './Header.module.scss';
import logo from '../../assets/logo/logo-temp.png';
import {Badge} from 'antd';
import {Title} from '../lib/Typography/Typography';

import {
    IoCartOutline,
    IoGridOutline,
    IoPersonOutline,
    IoPricetagsOutline,
    IoReaderOutline,
} from 'react-icons/io5';
import {selectCart} from '../../store/reducer/cart';
import useAppSelector from '../../hooks/use-app-selector';
import ButtonIcon from '../lib/Button/ButtonIcon';
import {selectUserToken} from '../../store/reducer/authSlice';
import useMediaQuery from '../../hooks/useMediaQuery';

const Header = () => {
    const cart = useAppSelector(selectCart);
    const [isOpen, setIsOpen] = useState(false);
    const authToken = useAppSelector(selectUserToken);
    const isMobile = useMediaQuery('(max-width: 1135px)');

    const changeStatusIsOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={style.wrapper}>
            {isMobile ? (
                <div className={style.hamburgerMenu}>
                    <input
                        type="checkbox"
                        id={style.menuToggle}
                        onChange={() => setIsOpen(!isOpen)}
                        checked={isOpen}
                    />
                    <label className={style.menuBtn} htmlFor={style.menuToggle}>
                        <span></span>
                    </label>
                    <div className={style.logoContainer}>
                        <img
                            src={logo}
                            className={style.logo}
                            alt={'СЕЛЬХОЗЭКОСЕРВИС'}
                        />
                    </div>
                    <div className={style.menuBox}>
                        <div className={style.menuItemContainer}>
                            <ButtonIcon
                                className={style.menuItem}
                                title={'Каталог'}
                                link={'catalog'}
                                icon={IoGridOutline}
                                onClick={changeStatusIsOpen}
                            />
                            <ButtonIcon
                                className={style.menuItem}
                                title={'Акции'}
                                link={'sale'}
                                icon={IoPricetagsOutline}
                                onClick={changeStatusIsOpen}
                            />
                            <ButtonIcon
                                className={style.menuItem}
                                title={'О препаратах'}
                                link={'guidebook'}
                                icon={IoReaderOutline}
                                onClick={changeStatusIsOpen}
                            />
                            {authToken ? (
                                <ButtonIcon
                                    className={style.menuItem}
                                    title={'Личный кабинет'}
                                    link={'account'}
                                    icon={IoPersonOutline}
                                    onClick={changeStatusIsOpen}
                                />
                            ) : (
                                <ButtonIcon
                                    className={style.menuItem}
                                    title={'Личный кабинет'}
                                    link={'authorization'}
                                    icon={IoPersonOutline}
                                    onClick={changeStatusIsOpen}
                                />
                            )}
                            <Link to={'/cart'} onClick={changeStatusIsOpen}>
                                <button className={style.menuItem}>
                                    <Badge count={cart.length} color="#994C4C">

                                        <IoCartOutline
                                            size={28}
                                            style={{marginRight: '10px'}}
                                        />

                                    </Badge>
                                    {cart.length > 0 ? (
                                        <Title
                                            style={{marginLeft: '9px'}}
                                            fontSize={'22px'}
                                            weight={'500'}
                                        >
                                            Корзина
                                        </Title>
                                    ) : (
                                        <Title fontSize={'22px'} weight={'500'}>
                                            Корзина
                                        </Title>
                                    )}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={style.header}>
                    <div
                        className={`${style.headerItem} ${style.headerLeftItem}`}
                    >
                        <ButtonIcon
                            className={style.buttonIcon}
                            title={'Каталог'}
                            link={'catalog'}
                            icon={IoGridOutline}
                        />
                        <ButtonIcon
                            className={style.buttonIcon}
                            title={'Акции'}
                            link={'sale'}
                            icon={IoPricetagsOutline}
                        />
                        <ButtonIcon
                            className={style.buttonIcon}
                            title={'О препаратах'}
                            link={'guidebook'}
                            icon={IoReaderOutline}
                        />
                    </div>

                    <div className={style.headerItem}>
                        <div className={style.headerItemLogo}>
                            <img
                                src={logo}
                                className={style.logo}
                                alt={'СЕЛЬХОЗЭКОСЕРВИС'}
                            />
                        </div>
                    </div>

                    <div
                        className={`${style.headerItem} ${style.headerRightItem}`}
                    >
                        {authToken ? (
                            <ButtonIcon
                                className={style.buttonIcon}
                                title={'Личный кабинет'}
                                link={'account'}
                                icon={IoPersonOutline}
                            />
                        ) : (
                            <ButtonIcon
                                className={style.buttonIcon}
                                title={'Личный кабинет'}
                                link={'authorization'}
                                icon={IoPersonOutline}
                            />
                        )}
                        <Link to={'/cart'}>
                            <button className={style.rightButton}>
                                <Badge count={cart.length} color="#994C4C">

                                    <IoCartOutline
                                        size={28}
                                        style={{marginRight: '10px'}}
                                    />

                                </Badge>
                                {cart.length > 0 ? (
                                    <Title
                                        style={{marginLeft: '9px'}}
                                        fontSize={'22px'}
                                        weight={'500'}
                                    >
                                        Корзина
                                    </Title>
                                ) : (
                                    <Title fontSize={'22px'} weight={'500'}>
                                        Корзина
                                    </Title>
                                )}
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
