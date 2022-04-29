import {Div} from 'atomize'
import Metatags from './Metatags'

const Template = ({children, description, height}) => {
    return (
    <Div maxW="720px" m="auto" p={{t:{xs:"40px", md:"120px"}, l:"16px", r:"16px"}} h={height}>
        <Metatags description={description}/>
        {children}
    </Div>
    );
}

export default Template;