import {Text} from 'atomize'

const Title = ({children, color, size}) => {
    return (
        <Text textWeight="550" fontFamily='Playfair Display' textSize={size} textColor={color}>
            {children}
        </Text>
    );
}

export default Title;