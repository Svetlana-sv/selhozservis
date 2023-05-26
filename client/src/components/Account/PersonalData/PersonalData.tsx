import Wrapper from '../../lib/Wrapper/Wrapper';
import style from './PersonalData.module.scss';
import PersonalDataForm from './PersonalDataForm/PersonalDataForm';
import { Button } from '../../lib/Button/Button';
import { useState } from 'react';
import { IUserInfo } from '../../../api/types/user';

const PersonalData = () => {
    const [userInfo, setUserInfo] = useState<IUserInfo>();

    const handleUpdateData = () => {
        console.log(userInfo);
    };

    return (
        <Wrapper>
            <div className={style.container}>
                <PersonalDataForm setUserInfo={setUserInfo} />
                <Button
                    className={style.buttonUpdate}
                    onClick={handleUpdateData}
                >
                    Сохранить
                </Button>
            </div>
        </Wrapper>
    );
};

export default PersonalData;
