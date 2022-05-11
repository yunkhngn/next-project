import {Template, Title, Para} from '../../components/Template'
import Link from 'next/link';
import {Div} from 'atomize';

const Writings = ({content, themeUse, theme, slug}) => {
    const description = {
        title: content.Title + '- Khoa Nguyễn',
        url: `https://www.khoanguyen.dev/writings/${slug}`,
    }
    if(content.slug !== slug) {
        return (
            <Template description={description} height="100%">
                <Title color={themeUse.primary}>404 Not found</Title>
                <hr className={'hr'+theme}/>
                <Para color={themeUse.secondary}>
                Your page you are looking for is not found.
                </Para>
                <br/>
                <Link href="/writings"><a><Div textColor={themeUse.secondary} hoverTextColor={themeUse.hover} transition>Go back...</Div></a></Link>
            </Template>
        );
    } 
    else {
    return (
        <Template description={description} height="100%">
            <Title color={themeUse.primary}>{content.Title}</Title>
            <Para color={themeUse.secondary}>Date modified:  {content.Date} | {content.Subtitle} </Para>
            <hr className={'hr'+theme}/>
            <Para color={themeUse.secondary}>
            <text className="essay">{content.Content}</text>
            <br/>
            <br/>
            <i>Sign up for my newsletter to get the latest updates.</i>
            <br/>
            Khoa Nguyen
            </Para>
            <br/>
            <Link href="/writings"><a><Div textColor={themeUse.secondary} hoverTextColor={themeUse.hover} transition>Go back...</Div></a></Link>
        </Template>
    );
    }
}

export default Writings;

export async function getServerSideProps(context) {
    const { slug } = context.query
    const res = await fetch(`https://khoanguyen-backend.herokuapp.com/api/writings?slug=${slug}`);
    const data = await res.json();
    const content = data.data[0].attributes;
    return {
        props: {content, slug},
    }
}
