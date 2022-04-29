//this is the main page
import {Metatags} from '../components/Hooks/'
import {Div} from 'atomize'

const description = {
  title: 'Home - Khoa Nguyễn',
  url: 'https://www.khoanguyen.dev',
}

export default function Home() {
  return (
    <Div bg="white" w="100%" h="100vh" maxH="-webkit-fill-available">
      <Metatags description={description}/>
    </Div>
  )
}
