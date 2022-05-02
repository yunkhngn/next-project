import {Template, Title, Para} from '../../components/Template'
const description = {
    title: 'Writings - Khoa Nguyễn',
    url: 'https://www.khoanguyen.dev/writings/my-first-blog',
}

const post1 = ({themeUse,theme}) => {
    return (
        <Template description={description} height="100%">
            <Title color={themeUse.primary}>First Blog: Painting the internet!</Title>
            <Para color={themeUse.secondary}>Date modified: 02/05/2022 | Reflecting on the past and looking forward.</Para>
            <hr className={'hr'+theme}/>
            <Para color={themeUse.secondary}>
            Over the past year, I've started to experiment with user interfaces after growing tired of re-cycling and building the same shit again and again. The intention was never to really undermine, oppose, or conduct meaningful change, but rather to tinker, have fun, and provoke an emotion.
            <br/>
            <br/>
            There's just something very exciting in building novel stuff just for fun. It feels very much like a return to the roots back when I was entering this magical, technological world of infinite possibilities. I actually tried to become a designer at first but failed. Sitting down and working with drawing tools just didn't click for me. It felt very static, foreign, and especially intimidating to stare at a blank canvas.
            <br/>
            <br/>
            After being rejected a couple of times, I decided I would just build my own designs, instead. Blasting up CodePen 5 years ago I had no idea what kind of a path I set myself on.
            <br/>
            <br/>
            The intention was not to become an engineer, but to have fun by giving life to my wildest dreams and ideas. Changing variables and colors in code felt fascinating and immediate. I had no idea what I was doing, but it was incredible.
            <br/>
            <br/>
            For some reason, those early days were some of the most fun I ever had with interfaces, despite frantically googling and copy-pasting every single thing I didn't understand.
            <br/>
            <br/>
            Today, I am working remotely from Hanoi, Vietnam. I moved here around 12 years ago temporarily from Saigon just to explore, feel, and experience something new. So far, my creativity and inspiration have been through the roof. It's not like I wasn't doing anything back home, but new environments seem to trigger and spark new ideas, like these. I think it's also because I'm here completely solo.
            <br/>
            <br/>
            <i>Sign up for my newsletter to get the latest updates.</i>
            <br/>
            Khoa Nguyen
            </Para>
        </Template>
    );
}

export default post1;