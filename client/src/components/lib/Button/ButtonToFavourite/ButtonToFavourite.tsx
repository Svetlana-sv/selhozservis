import { IoHeartOutline, IoHeart } from 'react-icons/io5';
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
    useDeleteFavoriteProductMutation,
    useGetAllFavouritesQuery,
    useGetFavouriteQuery,
    useLazyGetFavouriteQuery,
} from '../../../../api/favouriteApi';
import { isNum } from 'react-toastify/dist/utils';

type ButtonToFavouriteProps = {
    product?: Product;
    title?: string;
    type?: 'link' | 'button';
    className?: string;
};

const ButtonToFavourite = (props: ButtonToFavouriteProps) => {
    const dispatch = useAppDispatch();
    const [status, setStatus] = useState(false);
    const [favId, setfavId] = useState(-1);
    const authToken = useAppSelector(selectUserToken);
    const userId = useAppSelector(selectUserId);

    const [addFavorite, { data: addData }] = useAddNewFavoriteProductMutation();
    const [deleteFavorite, { data: deleteData }] =
        useDeleteFavoriteProductMutation();
    const [getFavourite] = useLazyGetFavouriteQuery();
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
            if (isFavourite) {
                if (props.product?.id !== undefined) {
                    getFavourite({ userId, productId: props.product?.id })
                        .unwrap()
                        .then((response) =>
                            deleteFavorite(response?.data[0].id)
                        );
                    message({
                        text: `${props.product?.attributes.title} удалено из избранного`,
                        type: 'info',
                    });
                }
            } else {
                addFavorite({
                    data: {
                        user_id: userId,
                        product: props.product,
                    },
                });
                message({
                    text: `${props.product?.attributes.title} добавлено в избранное`,
                    type: 'info',
                });
                setStatus(true);
            }
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
