import '../styles/globals.css'
import '../styles/Bar.css'
import '../styles/BarIcon.css'
import { Bar } from '../components/Hooks/'
import {styletron} from '../styletron'
import { Provider as StyletronProvider } from 'styletron-react'
import {StyleReset} from 'atomize'
import {useState, useEffect} from 'react'
import {Div} from 'atomize'
import Metatags from '../components/Template/Metatags'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')
  const themeProvider = [
    {
      name: 'light',
      styles: {
        bg: 'white',
        primary: '#171717',
        secondary: '#6f6f6f',
        titleWeight: '550',
        paraWeight: '450',
        title: 'Playfair Display',
        body: 'Magnat Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue',
        hover: 'dark', 
      },
    },
    {
      name: 'dark',
      styles: {
        bg: '#161616',
        primary: '#ededed',
        secondary: '#A0A0A0',
        titleWeight: '550',
        paraWeight: '450',
        title: 'Playfair Display',
        body: 'Magnat Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue',
        hover: '#f5f5f5',
      },
    },
  ]
  const [themeUse,setThemeUse] = useState(theme === 'light' ? themeProvider[0] : themeProvider[1])
  return (
    <StyletronProvider value={styletron}>
      <Div bg={themeUse.styles.bg} w="100%">
        <div className={'webkit selection'+theme}>
          <Metatags description='null'/>
          <StyleReset/>
          <Component themeUse={themeUse.styles} theme={theme} {...pageProps} />
          <Bar theme={theme} setTheme={setTheme} setThemeUse={setThemeUse} themeProvider={themeProvider}/>
        </div>
     </Div>
    </StyletronProvider>
  )
}

export default MyApp
