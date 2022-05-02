//this is the main page
import {Template, Title} from '../components/Template/'
import {Intro} from '../components/Post/'

const description = {
  title: 'Home Page - Khoa Nguyễn',
  url: 'https://www.khoanguyen.dev',
}

export default function Home({theme, themeUse}) {
  return (
    <Template description={description} height="100vh">
      <Title color={themeUse.primary}>Khoa Nguyễn</Title>
      <Intro themeUse={themeUse} theme={theme}/>
    </Template>
  )
}
