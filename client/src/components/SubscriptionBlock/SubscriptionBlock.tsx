import style from "./SubscriptionBlock.module.scss";
import {Paragraphy, Title} from "../lib/Typography/Typography";
import React from "react";
import {Input} from "antd";
import {IoArrowForwardOutline} from "react-icons/all";

const SubscriptionBlock = () => {
    return <div className={style.containerblockSubscription}>
        <div className={style.blockSubscription}>
            <div className={style.blockSubscriptionLeftItem}>
                <div className={style.text}>
                    <Title color={'#EFEFEF'}>Подпишитесь на рассылку</Title>
                    <Paragraphy color={'#EFEFEF'} weight={'300'} align={'center'}>Подпишитесь на рассылку выгодных
                        предложений и узнавайте первыми о новых акциях</Paragraphy>
                </div>

            </div>
            <div className={style.blockSubscriptionRightItem}>
                <Input placeholder="Введите email"/>
                <IoArrowForwardOutline color={'#EFEFEF'} size={'28px'}/>
            </div>
        </div>
    </div>
}

export default SubscriptionBlock
