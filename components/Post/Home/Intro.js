import {SocialLink, Spacer} from '../../Hooks'
import {Para} from '../../Template'
import ElementSpace from '../ElementSpace';

const Intro = ({theme,themeUse}) => {
    return (
        <article>
            <Para color={themeUse.secondary}>Senior Designer/Developer</Para>
            <Spacer theme={theme} length="140px"/>
            <Para color={themeUse.secondary}>Khoa Nguyen is a software engineer and graphic designer in Hanoi, Vietnam. He enjoys building software with Reactjs, Nextjs, typing safe code with Typescript or dealing with algorithms and data structures.</Para> 
            <Para color={themeUse.secondary}><i>Tip: Use to quickly navigate this site by using </i><strong>Ctrl + K</strong><i> or </i><strong>Command + K</strong>.</Para>
            <SocialLink theme={theme}/>
            <Spacer theme={theme} length="80px"/>
            <ElementSpace/>
        </article>
    );
}

export default Intro;