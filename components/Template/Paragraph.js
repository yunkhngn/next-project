import {Text} from 'atomize'

const Paragraph = ({children, color}) => {
    return (
        <Text textWeight="450" textSize="paragraph" fontFamily='Magnat Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue' textColor={color}>
        {children}
    </Text>
    );
}

export default Paragraph;