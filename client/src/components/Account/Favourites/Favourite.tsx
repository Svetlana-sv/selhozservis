import Wrapper from '../../lib/Wrapper/Wrapper';
import style from './Favourite.module.scss';
import { useGetAllFavouritesQuery } from '../../../api/favouriteApi';
import Card from '../../Card/Card';
import React from 'react';
import { Skeleton } from 'antd';
import useAppSelector from '../../../hooks/use-app-selector';
import { selectUserId } from '../../../store/reducer/authSlice';
import {Button} from "../../lib/Button/Button";
import {Text} from "../../lib/Typography/Typography";

const Favourite = () => {
    const userId = useAppSelector(selectUserId);
    const {
        data: favouriteProducts,
        isError,
        isFetching,
    } = useGetAllFavouritesQuery(userId || -1);
    return (
        <Wrapper>
            <div className={style.container}>
                {isFetching ? (
                    <Skeleton active />
                ) : (
                    favouriteProducts?.data.map((fav) => {
                        return (
                            <Card
                                // key={fav.attributes.product.data[0].id}
                                product={fav.attributes.product?.data}
                                type={'vertical'}
                            />
                        );
                    })
                )}
                { favouriteProducts?.data.length === 0 &&
                    <Text  margin={'auto'} weight={'300'}>
                        Добавьте товары
                    </Text>
              }
            </div>
        </Wrapper>
    );
};

export default Favourite;
