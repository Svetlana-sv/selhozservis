import Wrapper from "../../lib/Wrapper/Wrapper";
import style from './Favourite.module.scss'
import {useGetAllFavouritesQuery, useGetAllProductsQuery} from "../../../api/productApi";
import Card from "../../Card/Card";
import React from "react";
import {Skeleton} from "antd";
import {Product} from "../../../api/types/product";

const Favourite = () => {
  const {data: favouriteProducts, isError, isFetching} = useGetAllFavouritesQuery();
  return <Wrapper>
    <div className={style.container}>
      { isFetching?
          <Skeleton active/>
          :
          favouriteProducts?.data
      .map(
      fav => {
        console.log(fav.attributes.product)
        return <Card key={fav.attributes.product.data.id} product={fav.attributes.product?.data} type={'vertical'}/>
      }
      )}
    </div>
  </Wrapper>
}

export default Favourite