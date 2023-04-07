import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";

import {IconType} from "react-icons";

const Button = (props: {title?: string, link?: string, icon: IconType}) => {
  return <>
      <button>
          <Link to={`/${props.link}`}><props.icon size={28} style={{marginRight: '10px'}}/>{props.title}</Link>
      </button>
  </>
}

export default Button