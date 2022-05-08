import {Template, Title} from '../components/Template/'
import {Project} from '../components/Post/'
import {desc} from '../lib'

const projects = ({themeUse,theme}) => {
    return (
        <Template description={desc.projects} height="100vh">
            <Title color={themeUse.primary}>Projects</Title>
            <Project themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export default projects;