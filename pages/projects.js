import {Template} from '../components/Template/'
import {Intro,Blog, Project} from '../components/Post/'
import {Footer} from '../components/Hooks/'

const description = {
    title: 'Projects - Khoa Nguyễn',
    url: 'https://www.khoanguyen.dev/projects',
}

const projects = ({themeUse,theme}) => {
    return (
        <Template description={description} height="100%">
            <Intro themeUse={themeUse} theme={theme}/>
            <Project themeUse={themeUse} theme={theme}/>
            <Blog themeUse={themeUse} theme={theme}/>
            <Footer themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export default projects;