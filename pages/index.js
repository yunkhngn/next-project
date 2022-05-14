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
          bg="transparent"
          rounded="lg"
          border="1px solid"
          borderColor={theme === 'light' ? "#858585" : "#7e7e7e"}
          m={{ r: "1em" }}
          onClick={Loved}
          disabled={isLove}
        >
          <Icon name="HeartSolid" size="20px" color={theme === 'light' ? "danger700" : "danger600"} />
        </Button>
        <Button
          h="2.5rem"
          w="2.5rem"
          bg="transparent"
          rounded="lg"
          border="1px solid"
          borderColor={theme === 'light' ? "#858585" : "#7e7e7e"}
          m={{ r: "1em" }}
          onClick={() => window.open("https://m.me/yun.khngn", "_blank")}
        >
          <Icon name="MessageSolid" size="20px" color={theme === 'light' ? "success700" : "success600"} />
        </Button>
        <Button
            h="2.5rem"
            p={{ x: "1rem" }}
            textSize="body"
            textColor={theme === 'light' ? "#858585" : "#7e7e7e"}
            bg="transparent"
            hoverBg={theme === 'light' ? "gray200": null}
            border="1px solid"
            borderColor={theme === 'light' ? "#858585" : "#7e7e7e"}
            m={{ r: "1em" }}      
            onClick={() => window.open("https://drive.google.com/file/d/16TkugAV3TGyYNBGO4eNNe9fs2aPj3Llh/view?usp=sharing")}
        >Download CV</Button>
      <Button
          h="2.5rem"
          w="2.5rem"
          bg="transparent"
          hoverBg={theme === 'light' ? "gray200": null}
          border="1px solid"
          borderColor="light"
          m={{ r: "1em" }}
          onClick={() => alert("Chưa code cái này")}
        >
          <Icon name="SettingsSolid" size="20px" color={theme === 'light' ? "#858585" : "#7e7e7e"} />
        </Button>
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