import {Para} from '../../Template'
import {Div} from 'atomize'

const Project = ({theme,themeUse, prj}) => {
    const dateFormer = (date) =>{
        let dateArr = date.split('T')[0].split('-')
        return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`
    }
    return (
        <article>
            <Para color={themeUse.secondary} >Incredible things built with React, Next.js, and Typescript.</Para>
            <Div m={{b:'1.7em'}}/>
            <hr className={'hr'+theme}/>
            <Div>
                { prj.length === 0 ? <Para color={themeUse.secondary} >No project posted yet.</Para> :
                prj.map(item => (
                    <div key={item.id}>
                        <a target="_blank" rel="noreferrer" href={item.attributes.Link}>
                            <Div justify="space-between" align="center" d="flex" hoverBg={theme === 'light' ? "gray200" : '#222222'} rounded='12px' p="16px" transition m={{r:"-16px", l:"-16px"}}>
                                <Para margin="true" which="right" color={theme === 'light' ? '#171717' : "#ededed"}><strong>{item.attributes.Title}</strong></Para>
                                <hr className={'hr'+theme}/>
                                <Para margin="true" which="left" color={themeUse.secondary}>{dateFormer(item.attributes.createdAt)}</Para>
                            </Div>
                        </a>
                    </div>
                ))}
            </Div>
            <a target="_blank" rel="noreferrer" href="https://github.com/yunkhngn"><Div m={{t:"1em"}} textColor={themeUse.secondary} hoverTextColor={themeUse.hover} transition>View all my project...</Div></a>
        </article>
    );
}

export default Project;