import {Template, Title} from '../components/Template/'
import {Blog} from '../components/Post/'
import {desc} from '../lib'

const writings = ({content,themeUse,theme}) => {
    return (
        <Template description={desc.writings} height="100%">
            <Title color={themeUse.primary}>Writings</Title>
            <Blog data={content} themeUse={themeUse} theme={theme}/>
        </Template>
    );
}

export async function getServerSideProps() {
    console.log("Connected")
    const res = await fetch(`https://khoanguyen-backend.herokuapp.com/api/writings`);
    const data = await res.json();
    const content = data.data;
    return {
        props: {content},
    }
}

export default writings;