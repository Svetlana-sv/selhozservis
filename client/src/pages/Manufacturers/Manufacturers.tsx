import Wrapper from '../../components/lib/Wrapper/Wrapper';
import {Text,Paragraphy} from '../../components/lib/Typography/Typography';

const Manufacturers = () => {
    return (
        <Wrapper>

            <Paragraphy><strong>Наши основные партнеры</strong> - известные и авторитетные производители, продукция которых отличается высоким
                качеством и надежностью:
            </Paragraphy>
            <ul>
                <li>ООО «Агросинтез»</li>
                <li>ООО «Биофарминвест»</li>
                <li>ТПК «Техноэкспорт»</li>
                <li>ООО «Фирма «Зеленая аптека садовода»»</li>
                <li>АО Фирма «Август»</li>
                <li>ООО «Ваше хозяйство» ( г. Нижний Новгород)</li>
                <li>ННП «НЭСТ М»</li>
                <li>ООО «РусАгроХим»</li>
                <li>ООО «МосАгро»</li>
                <li>ООО «Лайф Форс Групп», удобрения Сила жизни ( г.Саратов)</li>
            </ul>
            <br/>
        </Wrapper>
    );
};

export default Manufacturers;
