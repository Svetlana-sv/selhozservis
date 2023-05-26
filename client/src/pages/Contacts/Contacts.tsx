import style from './Contacts.module.scss';
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import { Paragraphy } from '../../components/lib/Typography/Typography';

const Contacts = () => {
    return (
        <Wrapper>
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
                        Адрес: Москва, ул. Слободской переулок, д.6, строение
                        10, помещение 1
                    </Paragraphy>
                    <Paragraphy>
                        График работы: Пн-Пт с 10:00 до 17:00
                    </Paragraphy>
                    <Paragraphy>
                        Тел.: +7 (495) 647 00 58, +7 (916) 254 21 12 (WhatsApp,
                        Viber)
                    </Paragraphy>
                    <Paragraphy>E-mail: selhozservis@internet.ru</Paragraphy>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contacts;
