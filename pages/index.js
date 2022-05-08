//this is the main page
import {Template, Title} from '../components/Template/'
import {Intro} from '../components/Post/'
import {desc} from '../lib'

export default function Home({theme, themeUse}) {
  return (
    <Template description={desc.home} height="100vh">
      <Title color={themeUse.primary}>Khoa Nguyễn</Title>
      <Intro themeUse={themeUse} theme={theme}/>
    </Template>
  )
}
  