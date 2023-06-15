import Wrapper from '../../components/lib/Wrapper/Wrapper';
import {useGetAboutCompanyQuery, useGetPersonalDataProtectionQuery} from "../../api/staticInfoApi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PersonalDataProtection = () => {
    const { data: info } = useGetPersonalDataProtectionQuery();
    return (
        <Wrapper>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {info?.data.attributes.information!}
            </ReactMarkdown>
            <br />
        </Wrapper>
    );
};

export default PersonalDataProtection;
