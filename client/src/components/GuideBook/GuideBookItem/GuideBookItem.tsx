import style from './GuideBookItem.module.scss';
import { useNavigate } from 'react-router-dom';

const GuideBookItem = (props: { id: number; title: string }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/guidebook/${props.id}`);
    };

    return (
        <div className={style.card}>
            <a onClick={handleCardClick}>{props.title}</a>
        </div>
    );
};

export default GuideBookItem;
