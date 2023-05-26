import Wrapper from '../../lib/Wrapper/Wrapper';
import style from './Favourite.module.scss';
import { useGetAllFavouritesQuery } from '../../../api/productApi';
import Card from '../../Card/Card';
import React from 'react';
import { Skeleton } from 'antd';
import useAppSelector from '../../../hooks/use-app-selector';
import { selectUserId } from '../../../store/reducer/authSlice';

const Favourite = () => {
    const userId = useAppSelector(selectUserId);
    console.log('userId', userId);
    const {
        data: favouriteProducts,
        isError,
        isFetching,
    } = useGetAllFavouritesQuery(userId || -1);
    console.log('favouriteProducts', favouriteProducts);
    return (
        <Wrapper>
            <div className={style.container}>
                {isFetching ? (
                    <Skeleton active />
                ) : (
                    favouriteProducts?.data.map((fav) => {
                        console.log(fav.attributes.product.data);
                        return (
                            <Card
                                // key={fav.attributes.product.data[0].id}
                                product={fav.attributes.product?.data}
                                type={'vertical'}
                            />
                        );
                    })
                )}
            </div>
        </Wrapper>
    );
};

export default Favourite;
