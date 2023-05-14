import Wrapper from "../../lib/Wrapper/Wrapper";
import style from './Favourite.module.scss'
import {useGetAllFavouritesQuery, useGetAllProductsQuery} from "../../../api/productApi";
import Card from "../../Card/Card";
import React from "react";

const Favourite = () => {
  // todo получение "избранных" продуктов
  const {data: products, isError, isFetching} = useGetAllFavouritesQuery();

  return <Wrapper>
    <div className={style.container}>
      {products?.data
      .map(
      product => <Card key={product.id} product={product} type={'vertical'}/>
      )}
    </div>
  </Wrapper>
}

export default Favourite