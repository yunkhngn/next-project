import {Template, Title} from '../components/Template/'
import {Project} from '../components/Post/'
import {desc} from '../lib'

const projects = ({themeUse,theme,prj}) => {
    return (
        <Template description={desc.projects} height="100%">
            <Title color={themeUse.primary}>Projects</Title>
            <Project prj={prj} themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export async function getStaticProps(){
    const URL = require('../lib/url')
    const res = await fetch(`${URL.url}projects/`);
    const data = await res.json();
    const prj = data.data;
    prj.sort((a,b) => {
        return b.id - a.id
    })
    return {
        props: {prj},
        revalidate: 30,
    }
}

export default projects;