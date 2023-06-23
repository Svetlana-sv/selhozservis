import style from './FeedbackBlock.module.scss';
import { Paragraphy, Title } from '../lib/Typography/Typography';
import React, {useState} from 'react';
import { IoArrowForwardOutline } from 'react-icons/all';
import TextArea from "antd/lib/input/TextArea";
import ButtonIcon from "../lib/Button/ButtonIcon";

const FeedbackBlock = () => {
    // TODO add logic
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message.length > 1){
            console.log(message)
        }
    }

    return (
        <div className={style.containerblockSubscription}>
            <div className={style.blockSubscription}>
                <div className={style.blockSubscriptionLeftItem}>
                    <div className={style.text}>
                        <Title color={'#EFEFEF'}>Форма обратной связи</Title>
                        <Paragraphy
                            color={'#EFEFEF'}
                            weight={'300'}
                            align={'center'}
                        >
                            Если у вас есть какие-то пожелания или предложения оставьте комментарий!
                        </Paragraphy>
                    </div>
                </div>
                <div className={style.blockSubscriptionRightItem}>
                    <TextArea placeholder="Введите комментарий..." rows={4} onChange={(e)=> setMessage(e.target.value)}/>
                    <ButtonIcon icon={IoArrowForwardOutline} colorIcon={'#EFEFEF'} onClick={sendMessage}/>
                </div>
            </div>
        </div>
    );
};

export default FeedbackBlock;
