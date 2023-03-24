import React from "react";
import useAppDispatch from "../../hooks/use-app-dispatch";
import {addProduct} from "../../store/reducer/cart";

type ProductActionButtonsProps = {
  shortName: string;
  setShortName: (shortName: string) => void;
}

const ProductActionButtons = (props: ProductActionButtonsProps) => {
  const {shortName, setShortName} = props;
  const dispatch = useAppDispatch();

  const handleAddProductClick = () => {
    // dispatch(addProduct({title: shortName}))
  }

  return <div>
    <input value={shortName} onChange={(e) => setShortName(e.target.value)}/>
    <input value={'Добавить в корзину'} type={"button"} onClick={handleAddProductClick}/>
    {shortName.slice(0, 5)}...
  </div>
}

export default ProductActionButtons;