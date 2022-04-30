import {Template} from '../components/Template/'
import {Project} from '../components/Post/'

const description = {
    title: 'Projects - Khoa Nguyễn',
    url: 'https://www.khoanguyen.dev/projects',
}

const projects = ({themeUse,theme}) => {
    return (
        <Template description={description} height="100vh">
            <Project themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export default projects;