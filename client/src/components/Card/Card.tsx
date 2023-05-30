import { Product } from '../../api/types/product';
import CardVertical from './CardVertical/CardVertical';
import CardHorizontal from './CardHorizontal/CardHorizontal';

const Card = (props: { product: Product; type: string }) => {
    return (
        <>
            {props.type === 'vertical' ? (
                <CardVertical key={props.product.id} product={props.product} />
            ) : (
                <CardHorizontal
                    key={props.product.id}
                    product={props.product}
                />
            )}
        </>
    );
};

export default Card;
