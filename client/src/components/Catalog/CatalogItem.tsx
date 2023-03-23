import {Product} from "../../api/types/product";

const CatalogItem = (props: {product: Product}) => {
    return <>
    <h2>{props.product.attributes.title}</h2>
    <img src={props.product.attributes.image} alt="" />
    </>
}

export default CatalogItem;