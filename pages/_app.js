import '../styles/globals.css'
import '../styles/Bar.css'
import '../styles/BarIcon.css'
import { Bar, Metatags } from '../components/Hooks/'
import {styletron} from '../styletron'
import { Provider as StyletronProvider } from 'styletron-react'
import {StyleReset} from 'atomize'
import {useState} from 'react'
import {Div} from 'atomize'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')

  return (
    <StyletronProvider value={styletron}>
      <Div bg={theme === "light" ? "white" : "#161616"} w="100%">
        <div className={'webkit selection'+theme}>
          <Metatags description='null'/>
          <StyleReset/>
          <Component theme={theme} {...pageProps} />
          <Bar theme={theme} setTheme={setTheme}/>
        </div>
     </Div>
    </StyletronProvider>
  )
}

export default MyApp
