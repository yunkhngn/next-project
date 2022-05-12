//this is the main page
import {Template, Title} from '../components/Template/'
import {Intro} from '../components/Post/'
import {desc} from '../lib'

export default function Home({theme, themeUse, content}) {
  return (
    <Template description={desc.home} height="100%">
      <Title color={themeUse.primary}>Khoa Nguyễn</Title>
      <Intro content={content.attributes} themeUse={themeUse} theme={theme}/>
    </Template>
  )
}

export async function getStaticProps() {
  const URL = require('../lib/url')
  const res = await fetch(`${URL.url}homepages`);
  const data = await res.json();
  const content = data.data[0];
  return {
      props: {content},
      revalidate: 30, 
  }
}