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
            title: 'Learning Nextjs like a pro?',
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
            <Para color={themeUse.secondary} >A collection of my (un)organized musings.</Para>
            <Div m={{b:'1.7em'}}/>
            <hr className={'hr'+theme}/>
            <Div>
                {post.map(item => (
                    <div key={item.id}>
                        <Link href='/projects'>
                            <a>
                                <Div justify="space-between" align="center" d="flex" hoverBg={theme === 'light' ? "gray200" : '#222222'} rounded='12px' p="16px" transition m={{r:"-16px", l:"-16px"}}>
                                    <Para margin="true" which="right" color={theme === 'light' ? '#171717' : "#ededed"}><strong>{item.title}</strong></Para>
                                    <hr className={'hr'+theme}/>
                                    <Para margin="true" which="left" color={themeUse.secondary}>{item.date}</Para>
                                </Div>
                            </a>
                        </Link>
                    </div>
                ))}
            </Div>
            <Link href="/writings"><a><Div m={{t:"1em"}} textColor={themeUse.secondary} hoverTextColor={themeUse.hover} transition>View all my project...</Div></a></Link>
            <ElementSpace space="12em"/>
        </div>
    );
}

export default Blog;