import {Div, Text} from 'atomize'

const Footer = ({themeUse}) => {
    return (
        <footer>
            <Div textAlign="center" pos="absolute" w="90vw" left="5vw" right="5vw" bottom="0"  p={{b:'7em'}} textColor={themeUse.secondary} fontFamily={themeUse.para}>
            <Text>Website deployed using <strong>Nextjx</strong> and <strong>Vercel</strong>. Built and developed by <strong>Khoa Nguyen</strong>.</Text>
            <Text>Copyright &copy; {new Date().getFullYear()} - All rights reserved.</Text>
            </Div>
        </footer>
    );
}

export default Footer;