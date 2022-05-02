import {Text} from 'atomize'

const Title = ({children, color, size}) => {
    return (
        <header>
            <h1>
                <Text textWeight="550" fontFamily='Playfair Display' textSize={size} textColor={color}>
                    {children}
                </Text>
            </h1>
        </header>
    );
}

export default Title;