import Wrapper from '../../components/lib/Wrapper/Wrapper';
import {
    useGetAboutCompanyQuery,
    useGetSaleInfoQuery,
} from '../../api/staticInfoApi';
import ReactMarkdown from 'react-markdown';
import MarkdownIt from 'markdown-it';
import remarkGfm from 'remark-gfm';
import style from './Sale.module.scss'

const Sale = () => {
    const { data: saleInfo } = useGetSaleInfoQuery();
    // var md = new MarkdownIt();
    // var result = md.render(saleInfo?.data.attributes.sale_text.toString()!);
    return (
        <Wrapper>
            <ReactMarkdown className={style.markdown} remarkPlugins={[remarkGfm]}>
                {saleInfo?.data.attributes.sale_text!}
            </ReactMarkdown>
            <br />
        </Wrapper>
    );
};

export default Sale;
