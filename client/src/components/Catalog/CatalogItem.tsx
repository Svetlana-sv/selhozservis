import {Product} from "../../api/types/product";
import style from './CatalogItem.module.scss';
import {Image} from 'antd'
import useAppDispatch from "../../hooks/use-app-dispatch";
import {addProduct} from "../../store/reducer/cart";

const CatalogItem = (props: {product: Product}) => {
    const dispatch = useAppDispatch();

    const handleAddProductClick = () => {
        dispatch(addProduct(props.product))
    }


    return <div className={style.card}>
    <h2>{props.product.attributes.title}</h2>
        <img
            // @ts-ignore
            src={`http://localhost:1337${props.product.attributes.image.data.attributes.url}`} />
        <p>{props.product.attributes.price} ₽</p>
        <button>Добавить</button>
    </div>
}

export default CatalogItem;