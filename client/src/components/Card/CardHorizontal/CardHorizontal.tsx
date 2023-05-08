import style from './CardHorizontal.module.scss'
import {Product} from "../../../api/types/product";
import {Image} from 'antd'
import {useNavigate} from "react-router-dom";
import ButtonToFavorite from "../../lib/Button/ButtonToFavorite/ButtonToFavorite";
import ButtonToCart from "../../lib/Button/ButtonToCart/ButtonToCart";

const CardHorizontal = (props: {product: Product}) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/catalog/${props.product.id}`)
    }

    return <div className={style.card} >
        <div className={style.info}>Топ продаж</div>
        <ButtonToFavorite className={style.heart} product={props.product} type='button'/>
        <div className={style.img}>
            <Image loading={'lazy'}
                   height={200}
                   src={`http://localhost:1337${props.product.attributes.image.data.attributes.url}`} />
        </div>
        <div style={{marginLeft: '13px', textAlign: 'left',marginTop: '7px'}}>
            <a className={style.title} onClick={handleCardClick}>{props.product.attributes.title}</a>
            <p className={style.description}>100x14 см, Фасовка: 60 шт в коробке</p>

            <div className={style.priceBlock} >
                <p className={style.price} >Цена {props.product.attributes.price} ₽</p>
               <ButtonToCart product={props.product} type='button'/>
            </div>
        </div>

    </div>
}

export default CardHorizontal