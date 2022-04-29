//this is the main page
import {Metatags, Spacer} from '../components/Hooks/'
import {Div, Text} from 'atomize'

const description = {
  title: 'Home - Khoa Nguyễn',
  url: 'https://www.khoanguyen.dev',
}

export default function Home({theme}) {
  return (
    <Div maxW="720px" m="auto" textColor="white" p={{t:{xs:"40px", md:"120px"}, l:"16px", r:"16px"}}>
      <Metatags description={description}/>
        <Text fontFamily="Playfair Display" textColor={theme === 'light' ? 'dark' : 'white'} textWeight="550" textSize="heading">Khoa Nguyen</Text>
        <Text fontFamily="Magnat Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue" 
        textColor={theme === 'light' ? 'hsl(0 0% 43.5%)' : 'hsl(0 0% 62.8%)'} 
        textWeight="400" textSize="paragraph"
        >
          A Software Engineer and a Senior Designer.
        </Text>
        <Spacer length="50px" theme={theme}/>
        <Text fontFamily="Magnat Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue" 
        textColor={theme === 'light' ? 'hsl(0 0% 43.5%)' : 'hsl(0 0% 62.8%)'} 
        textWeight="400" textSize="paragraph"
        >
          Khoa Nguyen is a software engineer in Hanoi, Vietnam. He enjoys building software with Reactjs, Nextjs, typing safe code with Typescript or dealing with algorithms and data structures.
        </Text>
    </Div>
  )
}
