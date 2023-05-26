import { IoHeartOutline } from 'react-icons/io5';
import { Product } from '../../../../api/types/product';
import useAppDispatch from '../../../../hooks/use-app-dispatch';
import ButtonIcon from '../ButtonIcon';
import React, { useState } from 'react';
import { message } from '../../../../message/message';
import useAppSelector from '../../../../hooks/use-app-selector';
import {
    selectUserId,
    selectUserToken,
} from '../../../../store/reducer/authSlice';
import {
    useAddNewFavoriteProductMutation,
    useGetAllFavouritesQuery,
} from '../../../../api/productApi';

type ButtonToFavouriteProps = {
    product?: Product;
    title?: string;
    type?: 'link' | 'button';
    className?: string;
};

const ButtonToFavourite = (props: ButtonToFavouriteProps) => {
    const dispatch = useAppDispatch();
    const [status, setStatus] = useState(false);
    const authToken = useAppSelector(selectUserToken);
    const userId = useAppSelector(selectUserId);

    const [addFavorite, { data }] = useAddNewFavoriteProductMutation();
    var isFavourite = false;

    if (authToken) {
        const {
            data: favouriteProducts,
            isError,
            isFetching,
        } = useGetAllFavouritesQuery(userId || -1);
        isFavourite = !!favouriteProducts?.data.find(
            (favoriteMemo) =>
                favoriteMemo.attributes.product.data?.id === props.product?.id
        );
    }
    const handleClickProductToFavourite = () => {
        if (authToken) {
            addFavorite(props.product);
            message({
                text: `${props.product?.attributes.title} добавлено в избранное`,
                type: 'info',
            });
            setStatus(true);
        } else
            message({
                text: `Для добавления товара в избранное войдите в личный кабинет!`,
                type: 'error',
            });
    };

    return props.type === 'link' ? (
        <ButtonIcon
            title={`${props.title}`}
            link={'cart'}
            icon={IoHeartOutline}
        />
    ) : (
        <ButtonIcon
            className={`${props.className}`}
            title={''}
            icon={IoHeartOutline}
            statusButton={isFavourite}
            onClick={handleClickProductToFavourite}
        />
    );
};

export default ButtonToFavourite;
