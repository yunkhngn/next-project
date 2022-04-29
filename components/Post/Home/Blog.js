import {Spacer} from '../../Hooks'
import {Title, Para} from '../../Template'
import Link from 'next/link'
import {Div} from 'atomize'
import ElementSpace from '../ElementSpace'

const Blog = ({theme,themeUse}) => {
    const post = [
        {
            id: 1,
            title: 'My first blog post in my year.',
            date: '12/04/2021',
        },
        {
            id: 2,
            title: 'Coding a website seems to be easy.',
            date: '06/05/2021',
        },
        {
            id: 3,
            title: 'Crush on you?',
            date: '07/12/2021',
        },
        {
            id: 4,
            title: 'Learing Nextjs like a pro?',
            date: '16/04/2022',
        },
        {
            id: 5,
            title: 'Reactjs or Nextjs?',
            date: '30/04/2022',
        },
    ]
    return (
        <div>
            <Title color={themeUse.primary} size="heading">Writings</Title>
            <Para color={themeUse.secondary}>This is my writings, you can check it out below!</Para>
            <Spacer theme={theme} length="100%"/>
            <Div>
                {post.map(item => (
                    <div key={item.id}>
                        <Link href='/writings'>
                            <a>
                                <Div justify="space-between" d="flex">
                                    <Para color={themeUse.secondary}><strong>{item.title}</strong></Para>
                                    <Para color={themeUse.secondary}>{item.date}</Para>
                                </Div>
                            </a>
                        </Link>
                        <Spacer theme={theme} length="100%"/>
                    </div>
                ))}
            </Div>
            <Link href="/writings"><a><Div textColor={themeUse.secondary} hoverTextColor={themeUse.hover} transition>View all my writings...</Div></a></Link>
            <ElementSpace/>
        </div>
    );
}

export default Blog;