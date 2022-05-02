import {Template, Title} from '../components/Template/'
import {Blog} from '../components/Post/'

const description = {
    title: 'Writings - Khoa Nguyễn',
    url: 'https://www.khoanguyen.dev/writings',
}

const writings = ({themeUse,theme}) => {
    return (
        <Template description={description} height="100vh">
            <Title color={themeUse.primary}>Writings</Title>
            <Blog themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export default writings;