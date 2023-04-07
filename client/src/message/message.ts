import {toast, TypeOptions} from "react-toastify";

export const message = (props: {text: string, type: TypeOptions}) => toast(`${props.text}`, {
    // position: toast.POSITION.TOP_RIGHT,
    type: props.type,
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});