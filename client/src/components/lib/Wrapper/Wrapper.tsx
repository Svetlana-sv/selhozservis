import React from "react";
import style from "./Wrapper.module.scss"

type WrapperProps = {
    children: React.ReactNode;
  }

const Wrapper = (props: WrapperProps) => {

    return <div className={style.wrapper}>
        {props.children}
    </div>
}

export default Wrapper