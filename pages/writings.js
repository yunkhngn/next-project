import {Template, Title} from '../components/Template/'
import {Blog} from '../components/Post/'
import {desc} from '../lib'

const writings = ({content,themeUse,theme}) => {
    console.log(content)
    return (
        <Template description={desc.writings} height="100%">
            <Title color={themeUse.primary}>Writings</Title>
            <Blog data={content} themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export async function getStaticProps() {
    const URL = require('../lib/url')
    const res = await fetch(`${URL.url}writings`);
    const data = await res.json();
    const content = data.data;
    return {
        props: {content},
        revalidate: 30, 
    }
}

export default writings;