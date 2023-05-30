import Wrapper from '../../components/lib/Wrapper/Wrapper';
import { Paragraphy, Title } from '../../components/lib/Typography/Typography';
import { useGetAboutCompanyQuery } from '../../api/staticInfoApi';
import ReactMarkdown from 'react-markdown';

const About = () => {
    const { data: aboutCompany } = useGetAboutCompanyQuery();
    return (
        <Wrapper>
            <ReactMarkdown>
                {aboutCompany?.data.attributes.about_text!}
            </ReactMarkdown>
            <br />
        </Wrapper>
    );
};

export default About;
