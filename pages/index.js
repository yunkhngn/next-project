//this is the main page
import {Template, Title} from '../components/Template/'
import {Intro} from '../components/Post/'
import {useState, useEffect} from 'react'
import {desc} from '../lib'
import {Button, Div, Icon} from 'atomize'

export default function Home({theme, themeUse, content, counter, isLove, setIsLove}) {
  const [love, setLove] = useState(Number(counter.LoveCount))
  const URL = require('../lib/url')
  const Loved = () => {
    setLove(love + 1)
    setIsLove(true)
    const PUT = async () => {
      const res = await await fetch(`${URL.url}love-count`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "data": {
              "LoveCount" : love + 1,
            }
        }),
      })
      const data = await res.json()
    }
    PUT()
  }
  useEffect(() => {
    if(isLove === false){
      Loved()
    }
  }, [])
  return (
    <Template description={desc.home} height="100%">
      <Title color={themeUse.primary}>Khoa Nguyễn</Title>
      <Intro content={content.attributes} themeUse={themeUse} love={love} theme={theme}/>
      <Div d="flex">
        <Button
        h="2.5rem"
        p={{ x: "1rem" }}
        textSize="body"
        textColor={theme === 'light' ? "#858585" : "#EDEDED"}
        bg="transparent"
        border="1px solid"
        borderColor="light"
        onClick={() => window.open("https://drive.google.com/file/d/16TkugAV3TGyYNBGO4eNNe9fs2aPj3Llh/view?usp=sharing")}
        >Download CV</Button>
        <Button
        h="2.5rem"
        w="2.5rem"
        textSize="body"
        textColor={theme === 'light' ? "#858585" : "#EDEDED"}
        bg="transparent"
        border="1px solid"
        borderColor="light"
        m={{ l: "0.5em" }}  
        p="0"    
        onClick={() => window.open("https://www.facebook.com/yun.khngn/")}
        ><Icon name="Attachment" size="17px" color={theme === 'light' ? "#858585" : "#EDEDED"}/></Button>
      </Div>
    </Template>
  )
}

export async function getStaticProps() {
  const URL = require('../lib/url')
  const res = await fetch(`${URL.url}homepages`);
  const data = await res.json();
  const content = data.data[0];

  const res2 = await fetch(`${URL.url}love-count`);
  const data2 = await res2.json() 
  
  const loveNum = data2.data
  const counter = loveNum.attributes
  return {
      props: {content, counter},
      revalidate: 30, 
  }
}