import {Template, Title} from '../components/Template/'
import {Intro} from '../components/Post/'

const description = {
    title: 'About Me - Khoa Nguyễn',
    url: 'https://www.khoanguyen.dev/about',
}

const about = ({themeUse,theme}) => {
    return (
        <Template description={description} height="100vh">
            <Title color={themeUse.primary}>About me</Title>
            <Intro themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export default about;

