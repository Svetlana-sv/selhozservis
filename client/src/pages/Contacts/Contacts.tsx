import style from './Contacts.module.scss';
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import {Paragraphy} from '../../components/lib/Typography/Typography';

const Contacts = () => {
    return (
        <Wrapper>
            <Paragraphy weight={'600'}>Мы всегда рады помочь вам и ответить на ваши вопросы. Ниже вы найдете информацию о нашем адресе,
                контактных данных и графике работы.</Paragraphy>
            <br/>

            <div className={style.container}>
                <div className={style.blockMap}>
                    <iframe
                        src="https://yandex.com/map-widget/v1/?um=constructor%3Acd8664dd076757a3c98a2d33facb6b38e25d924c8e239ab4960a46432c1061a1&amp;source=constructor"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                    />
                </div>
                <div>
                    <Paragraphy>
                        <strong>Адрес:</strong> Москва, ул. Слободской переулок, д.6, строение
                        10, помещение 1
                    </Paragraphy>
                    <Paragraphy>
                        <strong>График работы:</strong> Пн-Пт с 10:00 до 17:00
                    </Paragraphy>
                    <Paragraphy>
                        <strong>Тел.:</strong> +7 (495) 647 00 58, +7 (916) 254 21 12 (WhatsApp,
                        Viber)
                    </Paragraphy>
                    <Paragraphy><strong>E-mail:</strong> selhozservis@internet.ru</Paragraphy>
                </div>
            </div>


            <Paragraphy>Если у вас возникли вопросы, предложения или нужна дополнительная информация, пожалуйста, не
                стесняйтесь обращаться к нам. Наша команда готова оказать вам помощь и предоставить необходимую
                информацию.</Paragraphy>
            <br/>
        </Wrapper>
    );
};

export default Contacts;
