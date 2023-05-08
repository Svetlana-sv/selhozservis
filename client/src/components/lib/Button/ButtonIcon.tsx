import {Link} from "react-router-dom";
import React from "react";
import {IconType} from "react-icons";
import {Title} from '../Typography/Typography'

type ButtonProps = {
  title?: string,
  link?: string,
  icon: IconType,
  onClick?: () => void,
  className?: string,
}

const ButtonIcon = (props: ButtonProps) => {
  return (props.link ?
      <button onClick={props.onClick} className={props.className}>
          <Link to={`/${props.link}`}><props.icon size={28} style={{marginRight: '10px'}}/><Title fontSize={'22px'} weight={'500'}>{props.title}</Title></Link>
      </button>
      :
      <button onClick={props.onClick} className={props.className}>
          <props.icon size={28} style={{marginRight: '10px'}}/>{props.title}
      </button>
  );
}

export default ButtonIcon