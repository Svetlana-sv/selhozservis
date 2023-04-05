import style from './DropdownMenu.module.scss'
import {Link} from "react-router-dom";
import React from "react";

const DropdownMenu = (props: { button: JSX.Element, label: string, value: string, options: [{ label: string, value: string }], onChange: (e: any) => void }) => {
    return <div className={style.dropdown}>
        <div className={style.btn}>
            {props.button}
        </div>
        <div className={style.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <hr/>
            <a href="#">{props.label}</a>
        </div>
        {/*<ul>*/}
        {/*    {props.options.map((option) => (*/}
        {/*        <li> {option.label}</li>*/}

        {/*    ))}*/}
        {/*</ul>*/}
        {/*<select value={props.value} onChange={props.onChange} >*/}

        {/*    */}

        {/*</select>*/}

    </div>
}

export default DropdownMenu