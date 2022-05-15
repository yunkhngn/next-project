import {SocialLink, Spacer} from '../../Hooks'
import {Para} from '../../Template'
import {Button} from 'atomize'
import ReactMarkdown from 'react-markdown'

const Intro = ({theme,themeUse, content, love}) => {
    return (
        <article>
            <Para color={themeUse.secondary}>Graphic Designer / FullStack Developer</Para>
            <Spacer theme={theme} length="140px"/>
            <ReactMarkdown>{content.Description}</ReactMarkdown>
            <Para theme={themeUse}>{ (love) ? `Visit counts: ${love} Views` : null } </Para> 
            <SocialLink theme={theme}/>
            <Spacer theme={theme} length="80px"/>
            <ReactMarkdown>{content.Content}</ReactMarkdown>
        </article>
    );
}

export default Intro;