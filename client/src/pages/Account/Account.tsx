import React from "react";
import Wrapper from "../../components/lib/Wrapper/Wrapper";
import {Text} from "../../components/lib/Typography/Typography";
import Container from '../../components/lib/Container/Container';
import SubscriptionBlock from "../../components/SubscriptionBlock/SubscriptionBlock";
import PersonalData from "../../components/Account/PersonalData/PersonalData";
import OrderHistory from "../../components/Account/OrderHistory/OrderHistory";
import Favourite from "../../components/Account/Favourites/Favourite";
import {Tabs} from "antd";
import {useNavigate, useParams} from "react-router-dom";


const Account = () => {
    const params = useParams();
    const tabKey = params.tabKey;
    const navigate = useNavigate();

    const handleChange = (activeTabKey: string) => {
        navigate(`/account/${activeTabKey}`);
    }
    return <Container>
        <Wrapper>
            <Tabs
                defaultActiveKey={tabKey}
                onChange={handleChange}
                items={[
                    {
                        label: (
                            <Text>Персональные данные</Text>
                        ),
                        key: 'personalData',
                        children: <PersonalData/>,
                    },
                    {
                        label: (
                            <Text>Избранное</Text>
                        ),
                        key: 'favourites',
                        children: <Favourite/>,
                    },
                    {
                        label: (
                            <Text>История заказов</Text>
                        ),
                        key: 'history',
                        children: <OrderHistory/>,
                    },
                ]}
            />
        </Wrapper>
        <SubscriptionBlock/>
    </Container>
}

export default Account;