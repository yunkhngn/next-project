import {Template, Title, Para} from '../../components/Template'
import { useRouter } from 'next/router'

const post = ({themeUse}) => {
    const router = useRouter()
    const { pid } = router.query
    const description = {
        title: pid +' - Khoa Nguyễn',
        url: 'https://www.khoanguyen.dev/writings/' + pid,
    }
    
    return (
        <Template description={description} height="100vh">
            <Title color={themeUse.primary} size="heading">{pid}</Title>
            <Para color={themeUse.secondary} >A collection of my (un)organized musings.</Para>
            {/* create content due to post */}
        </Template>
    );
}

export default post;