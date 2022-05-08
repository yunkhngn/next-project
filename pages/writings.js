import {Template, Title} from '../components/Template/'
import {Blog} from '../components/Post/'
import {desc} from '../lib'

const writings = ({themeUse,theme}) => {
    return (
        <Template description={desc.writings} height="100vh">
            <Title color={themeUse.primary}>Writings</Title>
            <Blog themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export default writings;