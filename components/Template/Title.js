import {Text} from 'atomize'

const Title = ({children, color, size}) => {
    return (
        <header>
            <Text textWeight="550" fontFamily='Playfair Display' textSize={size} textColor={color}>
                {children}
            </Text>
        </header>
    );
}

export default Title;