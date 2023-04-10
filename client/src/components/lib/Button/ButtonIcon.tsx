import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";

import {IconType} from "react-icons";

const ButtonIcon = (props: {title?: string, link?: string, icon: IconType, onClick?: () => void, className?: string}) => {
  return (<>
  {props.link ?
      <button onClick={props.onClick} className={props.className}>
          <Link to={`/${props.link}`}><props.icon size={28} style={{marginRight: '10px'}}/>{props.title}</Link>
      </button>
      :
      <button onClick={props.onClick} className={props.className}>
          <props.icon size={28} style={{marginRight: '10px'}}/>{props.title}
      </button>}
  </>);
}

export default ButtonIcon