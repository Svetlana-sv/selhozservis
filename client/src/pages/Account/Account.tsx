import React from 'react';
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import { Paragraphy, Text } from '../../components/lib/Typography/Typography';
import Container from '../../components/lib/Container/Container';
import SubscriptionBlock from '../../components/SubscriptionBlock/SubscriptionBlock';
import PersonalData from '../../components/Account/PersonalData/PersonalData';
import OrderHistory from '../../components/Account/OrderHistory/OrderHistory';
import Favourite from '../../components/Account/Favourites/Favourite';
import { Tabs } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import useAppSelector from '../../hooks/use-app-selector';
import { selectUserToken } from '../../store/reducer/authSlice';
import style from './Account.module.scss'
import FeedbackBlock from "../../components/FeedbackBlock/FeedbackBlock";

const Account = () => {
    const params = useParams();
    const tabKey = params.tabKey;
    const navigate = useNavigate();
    const authToken = useAppSelector(selectUserToken);

    const handleChange = (activeTabKey: string) => {
        navigate(`/account/${activeTabKey}`);
    };
    return (
        <Container>
            <Wrapper>
                {authToken ? (
                    <Tabs
                        defaultActiveKey={tabKey}
                        onChange={handleChange}
                        items={[
                            {
                                label: <Text>Персональные данные</Text>,
                                key: 'personalData',
                                children: <div className={style.container}><PersonalData /></div>,
                            },
                            {
                                label: <Text>Избранное</Text>,
                                key: 'favourites',
                                children: <div className={style.container}><Favourite /></div>,
                            },
                            {
                                label: <Text>История заказов</Text>,
                                key: 'history',
                                children: <div className={style.container}><OrderHistory /></div>,
                            },
                        ]}
                    />
                ) : (
                    <Paragraphy
                        style={{
                            display: 'flex',
                            minHeight: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        Вы не авторизированы!
                    </Paragraphy>
                )}
            </Wrapper>
            {!!authToken ? <FeedbackBlock /> : <div></div>}
            {/*<br/>*/}
        </Container>
    );
};

export default Account;
