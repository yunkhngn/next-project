import {Para} from '../../Template'
import Link from 'next/link'
import {Div} from 'atomize'
import ElementSpace from '../ElementSpace'

const Project = ({theme,themeUse, prj}) => {
    return (
        <article>
            <Para color={themeUse.secondary} >Incredible things built with React, Next.js, and TypeScript.</Para>
            <Div m={{b:'1.7em'}}/>
            <hr className={'hr'+theme}/>
            <Div>
                {prj.map(item => (
                    <div key={item.id}>
                        <a target="_blank" href={item.attributes.Link}>
                            <Div justify="space-between" align="center" d="flex" hoverBg={theme === 'light' ? "gray200" : '#222222'} rounded='12px' p="16px" transition m={{r:"-16px", l:"-16px"}}>
                                <Para margin="true" which="right" color={theme === 'light' ? '#171717' : "#ededed"}><strong>{item.attributes.Title}</strong></Para>
                                <hr className={'hr'+theme}/>
                                <Para margin="true" which="left" color={themeUse.secondary}>{item.attributes.Date}</Para>
                            </Div>
                        </a>
                    </div>
                ))}
            </Div>
            <a target="_blank" href="https://github.com/yunkhngn"><Div m={{t:"1em"}} textColor={themeUse.secondary} hoverTextColor={themeUse.hover} transition>View all my project...</Div></a>
            <ElementSpace space="12em"/>
        </article>
    );
}

export default Project;