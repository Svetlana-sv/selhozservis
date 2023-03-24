import React, {useState} from "react";
import ProductActionButtons from "./ProductActionButtons";
import {useGetProductQuery} from "../../api/productApi";
import {skipToken} from "@reduxjs/toolkit/query";

const Card = () => {
  // const {data: product, isFetching, isError: isProductError, error} = useGetProductQuery('1' ?? skipToken);
  const [name, setName] = useState('Пояс Ловчий'); // todo убрать, тут будут данные с бэка
  // console.log(error)
  return <div>
    <div>
      {/*{isFetching ? <div> Загрузка ...</div> :*/}
      {/*  product ? <div> {product.name}</div> :*/}
      {/*    <div>Пусто</div>}*/}
    </div>
    <h3>{name}</h3>
    <ProductActionButtons shortName={name} setShortName={setName}/>
  </div>
}

export default Card;