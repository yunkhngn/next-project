import {Template, Title} from '../components/Template/'
import {Intro} from '../components/Post/'
import {desc} from '../lib'

const about = ({themeUse,theme}) => {
    return (
        <Template description={desc.about} height="100vh">
            <Title color={themeUse.primary}>About me</Title>
            <Intro themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export default about;

