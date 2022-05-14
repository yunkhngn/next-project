import {Para} from '../../Template'
import Link from 'next/link'
import {Div} from 'atomize'
import ElementSpace from '../ElementSpace'

const Blog = ({data,theme,themeUse}) => {
    const dateFormer = (date) =>{
        let dateArr = date.split('T')[0].split('-')
        return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`
    }
    return (
        <article>
            <Para color={themeUse.secondary} >A collection of my (un)organized musings.</Para>
            <Div m={{b:'1.7em'}}/>
            <hr className={'hr'+theme}/>
            <Div>
                {
                    data.map((item) => {
                        return (
                            <Link href={'/writings/'+item.attributes.slug} key={item.id}>
                                <a>
                                        <Div justify="space-between" align="center" d="flex" hoverBg={theme === 'light' ? "gray200" : '#222222'} rounded='12px' p="16px" transition m={{r:"-16px", l:"-16px"}}>
                                            <Para margin="true" which="right" color={theme === 'light' ? '#171717' : "#ededed"}><strong>{item.attributes.Title}</strong></Para>
                                            <Para d={{xs:"none",md:"flex"}} margin="true" which="right" color={themeUse.secondary}>{item.attributes.Subtitle}</Para>
                                            <hr className={'hr'+theme}/>
                                            <Para margin="true" which="left" color={themeUse.secondary}>{dateFormer(item.attributes.Date)}</Para>
                                        </Div>
                                </a>
                            </Link>
                        )
                }
            )}
            </Div>
            <ElementSpace space="12em"/>
        </article>
    );
}

export default Blog;
