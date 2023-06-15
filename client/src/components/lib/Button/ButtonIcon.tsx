import { Link } from 'react-router-dom';
import React from 'react';
import { IconType } from 'react-icons';
import { Title } from '../Typography/Typography';
import { IoHeart, IoHeartSharp } from 'react-icons/io5';

type ButtonProps = {
    title?: string;
    link?: string;
    icon: IconType;
    colorIcon?: string
    statusButton?: boolean;
    onClick?: () => void;
    className?: string;
};

const ButtonIcon = (props: ButtonProps) => {
    return props.link ? (
        <button onClick={props.onClick} className={props.className}>
            <Link to={`/${props.link}`}>
                <props.icon size={28} />
                <Title fontSize={'22px'} weight={'500'}>
                    {props.title}
                </Title>
            </Link>
        </button>
    ) : (
        <button
            onClick={props.onClick}
            className={props.className}
        >
            {props.statusButton ? (
                <IoHeartSharp size={28} color={'#994C4C'} />
            ) : (
                <props.icon size={28} color={`${props.colorIcon}`}/>
            )}
            {props.title}
        </button>
    );
};

export default ButtonIcon;
