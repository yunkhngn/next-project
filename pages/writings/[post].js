import { postContent } from "../../lib";
import { useRouter } from "next/router";
import {Template, Title, Para} from '../../components/Template'
import {Spacer} from '../../components/Hooks/'
import Link from 'next/link';
import {Div} from 'atomize';

const postWeb = ({themeUse,theme}) => {
    const router = useRouter();
    const { post } = router.query;
    const postGet = postContent[post]
    const description = {
        title: 'Writings - Khoa Nguyễn',
        url: 'https://www.khoanguyen.dev/writings/' + post,
    }
    if (postGet){
        return (
        <Template description={description} height="100%">
            <Title color={themeUse.primary}>{postGet && postGet.title}</Title>
            <Para color={themeUse.secondary}>Date modified: {postGet && postGet.date} | {postGet && postGet.subtitle}</Para>
            <hr className={'hr'+theme}/>
            <Para color={themeUse.secondary}>
            {postGet && postGet.content}
            <br/>
            <i>Sign up for my newsletter to get the latest updates.</i>
            <br/>
            Khoa Nguyen
            </Para>
            <br/>
            <Link href="/writings"><a><Div textColor={themeUse.secondary} hoverTextColor={themeUse.hover} transition>Go back...</Div></a></Link>
        </Template>
    );
    } else {
        return (
            <Template description={description} height="100vh">
            <Title color={themeUse.primary} size="display1">Oops!</Title>
            <Para color={themeUse.secondary}>We can't seem to find the page you are looking for!<br/>Please go back to the homepage! <br/> <strong>Error code: 404</strong></Para>
            <Spacer theme={theme} length="80px"/>
            <Link href="/"><a><Div textColor={themeUse.secondary} hoverTextColor={themeUse.hover} transition>Go back...</Div></a></Link>
            </Template> 
        )
    }
}

export default postWeb;