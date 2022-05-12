import {SocialLink, Spacer} from '../../Hooks'
import {Para} from '../../Template'
import ElementSpace from '../ElementSpace';
import ReactMarkdown from 'react-markdown'
import {Div} from 'atomize'

const Intro = ({theme,themeUse, content}) => {
    return (
        <article>
            <Para color={themeUse.secondary}>Senior Designer/Developer</Para>
            <Spacer theme={theme} length="140px"/>
            <ReactMarkdown>{content.Description}</ReactMarkdown>
            <SocialLink theme={theme}/>
            <Spacer theme={theme} length="80px"/>
            <ReactMarkdown>{content.Content}</ReactMarkdown>
            <ElementSpace/>
        </article>
    );
}

export default Intro;