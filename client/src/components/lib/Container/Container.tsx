import style from './Container.module.scss'
import React from "react";

type ContainerProps = {
    children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  return <div className={style.container}>
      {props.children}
  </div>
}

export default Container