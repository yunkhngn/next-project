import {Title, Para} from '../../Template'
import Link from 'next/link'
import {Div} from 'atomize'
import ElementSpace from '../ElementSpace'

const Project = ({theme,themeUse}) => {
    const post = [
        {
            id: 1,
            title: 'React webapp.',
            date: '12/04/2021',
            url: '/react-webapp',
        },
        {
            id: 2,
            title: 'Portfolio using html/css/js.',
            date: '06/05/2021',
            url: '/portfolio-using-html-css-js',
        },
        {
            id: 3,
            title: 'Portfolio using Reactjs.',
            date: '07/12/2021',
            url: '/portfolio-using-reactjs',
        },
        {
            id: 4,
            title: 'Counting down to my birthday.',
            date: '16/04/2022',
            url: '/counting-down-to-my-birthday',
        },
        {
            id: 5,
            title: 'My first project using Nextjs.',
            date: '30/04/2022',
            url: '/my-first-project-using-nextjs',
        },
    ]
    return (
        <article>
            <Title color={themeUse.primary} size="heading">Projects</Title>
            <Para color={themeUse.secondary} >Incredible things built with React, Next.js, and TypeScript.</Para>
            <Div m={{b:'1.7em'}}/>
            <hr className={'hr'+theme}/>
            <Div>
                {post.map(item => (
                    <div key={item.id}>
                        <Link href={'/projects/'+item.url}>
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
            <Link href="/projects"><a><Div m={{t:"1em"}} textColor={themeUse.secondary} hoverTextColor={themeUse.hover} transition>View all my project...</Div></a></Link>
            <ElementSpace space="12em"/>
        </article>
    );
}

export default Project;