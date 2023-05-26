import { Product } from '../../../../api/types/product';
import useAppDispatch from '../../../../hooks/use-app-dispatch';
import { deleteProduct } from '../../../../store/reducer/cart';
import { Button } from '../Button';

type ButtonDeleteProps = {
    product: Product;
    type?: 'icon' | 'button';
};

const ButtonDelete = (props: ButtonDeleteProps) => {
    const dispatch = useAppDispatch();

    const handleDeleteProductClick = () => {
        dispatch(deleteProduct(props.product));
    };

    return props.type === 'icon' ? (
        <Button onClick={handleDeleteProductClick}></Button>
    ) : (
        <Button onClick={handleDeleteProductClick}>Удалить</Button>
    );
};

export default ButtonDelete;
