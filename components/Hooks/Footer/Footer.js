import {Div, Text} from 'atomize'

const Footer = ({themeUse}) => {
    return (
        <Div textAlign="center" m="auto" p={{b:'7em'}} textColor={themeUse.secondary} fontFamily={themeUse.para}>
           <Text>Website deployed by <i>Nextjx</i> and <i>Vercel</i>. Built and developed by <strong>Khoa Nguyen</strong>.</Text>
           <Text>Copyright &copy; {new Date().getFullYear()} - All rights reserved.</Text>
        </Div>
    );
}

export default Footer;