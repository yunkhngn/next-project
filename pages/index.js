//this is the main page
import {Template, Title} from '../components/Template/'
import {Intro} from '../components/Post/'
import {useState} from 'react'
import {desc} from '../lib'
import {Button, Div, Icon} from 'atomize'
import {Para} from '../components/Template/'

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
  return (
    <Template description={desc.home} height="100%">
      <Title color={themeUse.primary}>Khoa Nguyễn</Title>
      <Intro content={content.attributes} themeUse={themeUse} theme={theme}/>
      <Para margin="true" which="bottom" theme={themeUse}>Love counts: {love}
      <br/><i>Data will be delayed for a while.</i>
      </Para>
      <Div d="flex">
        <Button
          h="2.5rem"
          w="2.5rem"
          bg={theme === 'light' ? "danger400" : "danger200"}
          rounded="lg"
          hoverBg={theme === 'light' ? "danger200" : "danger400"}
          hoverBorderColor="transparent"
          m={{ r: "0.5em" }}
          onClick={Loved}
          disabled={isLove}
        >
          <Icon name="HeartSolid" size="20px" color={theme === 'light' ? "danger700" : "danger600"} />
        </Button>
        <Button
            h="2.5rem"
            p={{ x: "1rem" }}
            textSize="body"
            textColor={theme === 'light' ? 'dark' : 'light'}
            bg="transparent"
            hoverBg={theme === 'light' ? "gray200": null}
            border="1px solid"
            borderColor="light"
            m={{ r: "0.5rem" }}      
            transition
            onClick={() => window.open("https://drive.google.com/file/d/16TkugAV3TGyYNBGO4eNNe9fs2aPj3Llh/view?usp=sharing")}
        >Download CV</Button>
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