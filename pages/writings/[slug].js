import {Template, Title, Para} from '../../components/Template'
import Link from 'next/link';
import {Div} from 'atomize';
import ElementSpace from '../../components/Post/ElementSpace';
import ReactMarkdown from 'react-markdown'

const Writings = ({content, themeUse, theme, slug}) => {
    const description = {
        title: content.Title + '- Khoa Nguyễn',
        url: `https://www.khoanguyen.dev/writings/${slug}`,
    }
    const dateFormer = (date) =>{
        let dateArr = date.split('T')[0].split('-')
        let timeArr = date.split('T')[1].split(':')
        return `${timeArr[0]}:${timeArr[1]} on ${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`
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
            <div className="essay">
            <Para margin="true" which="top" color={themeUse.secondary}><strong>Date modified:</strong> {dateFormer(content.updatedAt)}</Para>
            <Para color={themeUse.secondary}><strong>Subtitle:</strong> {content.Subtitle} </Para>
            <hr className={'hr'+theme}/>
            <ReactMarkdown>{content.Content}</ReactMarkdown>
            <br/>
            <i>Sign up for my newsletter to get the latest updates.</i>
            <br/>
            Khoa Nguyen
            <br/>
            <Link href="/writings"><a><Div textColor={themeUse.secondary} hoverTextColor={themeUse.hover} transition>Go back...</Div></a></Link>
            </div>
            <ElementSpace/>
            <br/>
        </Template>
    );
    }
}

export async function getStaticPaths() {
    const URL = require('../../lib/url')
    const res = await fetch(`${URL.url}writings`);
    const data = await res.json();
    const paths = data.data.map(({attributes}) => {
        return {
            params: {
                slug: attributes.slug,
            }
        }
    })
    return {
        paths,
        fallback: 'blocking'
    }
} 

export async function getStaticProps({params}){ 
    const { slug } = params;
    const URL = require('../../lib/url')
    const res = await fetch(`${URL.url}writings?filters\[slug\]=${slug}`);
    const data = await res.json();
    const content = data.data[0].attributes;
    return {
        props: {content, slug},
        revalidate: 30, 
    }
}

export default Writings;
