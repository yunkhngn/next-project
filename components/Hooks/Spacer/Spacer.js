import {Div} from 'atomize'

const Spacer = ({theme}) => {
    return (
        <Div w="48px" m={{t:'1.2em',b:'1.2em'}} h="1px" rounded="xs" bg={theme === 'light' ? "hsl(0 0% 0% / 0.071)" : "hsl(0 0% 100% / 0.077)"}/>
    );
}

export default Spacer;