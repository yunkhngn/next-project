import {Template, Title} from '../components/Template/'
import {Intro} from '../components/Post/'
import {desc} from '../lib'

const about = ({themeUse,theme,content}) => {
    return (
        <Template description={desc.about} height="100%">
            <Title color={themeUse.primary}>About me</Title>
            <Intro content={content.attributes} themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export default about;

export async function getStaticProps() {
    const URL = require('../lib/url')
    const res = await fetch(`${URL.url}abouts`);
    const data = await res.json();
    const content = data.data[0];
    return {
        props: {content},
        revalidate: 30, 
    }
  }