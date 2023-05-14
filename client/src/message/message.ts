import {toast, TypeOptions} from "react-toastify";
import React from "react";

export const message = (props: {text: string, type: TypeOptions}) => toast(`${props.text}`, {
    type: props.type,
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});