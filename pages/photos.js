import {Template} from '../components/Template/'
import {Intro} from '../components/Post/'


const description = {
    title: 'Photos - Khoa Nguyễn',
    url: 'https://www.khoanguyen.dev/photos',
}

const photos = ({themeUse,theme}) => {
    return (
        <Template description={description} height="100vh">
            <Intro themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export default photos;