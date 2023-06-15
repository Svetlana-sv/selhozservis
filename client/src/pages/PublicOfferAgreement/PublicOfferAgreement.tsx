import Wrapper from '../../components/lib/Wrapper/Wrapper';
import {useGetPersonalDataProtectionQuery, useGetPublicOfferAgreementQuery} from "../../api/staticInfoApi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PublicOfferAgreement = () => {
    const { data: info } = useGetPublicOfferAgreementQuery();
    return (
        <Wrapper>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {info?.data.attributes.information!}
            </ReactMarkdown>
            <br />
        </Wrapper>
    );
};

export default PublicOfferAgreement;
