import {Template} from '../components/Template/'
import {Intro} from '../components/Post/'

const description = {
    title: 'About - Khoa Nguyễn',
    url: 'https://www.khoanguyen.dev/about',
}

const about = ({themeUse,theme}) => {
    return (
        <Template description={description} height="100vh">
            <Intro themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export default about;

