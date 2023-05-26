import { IoAddOutline } from 'react-icons/io5';
import { Product } from '../../../../api/types/product';
import useAppDispatch from '../../../../hooks/use-app-dispatch';
import { message } from '../../../../message/message';
import { addProduct } from '../../../../store/reducer/cart';
import { Button } from '../Button';

type ToCartButtonProps = {
    product: Product;
    type?: 'icon' | 'button';
};

const ButtonToCart = (props: ToCartButtonProps) => {
    const dispatch = useAppDispatch();

    function handleClickAddProduct() {
        dispatch(addProduct(props.product));
        message({
            text: `${props.product.attributes.title} добавлено в корзину`,
            type: 'info',
        });
    }

    return props.type === 'icon' ? (
        <Button onClick={handleClickAddProduct} width={'40px'}>
            <IoAddOutline size={28} />
        </Button>
    ) : (
        <Button onClick={handleClickAddProduct}>Добавить в корзину</Button>
    );
};

export default ButtonToCart;
