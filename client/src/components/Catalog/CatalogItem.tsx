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
    {/*<img src={props.product.attributes.image} alt="" />*/}
    {/*<img src="../../assets/16.jpg" alt={props.product.attributes.title}/>*/}
        <Image width={200}
               preview={false}
            src="client/src/assets/16.jpg"/>
        <p>{props.product.attributes.price} ₽</p>
        <button onClick={handleAddProductClick}>Добавить</button>
    </div>
}

export default CatalogItem;