import '../styles/globals.css'
import '../styles/Bar.css'
import '../styles/BarIcon.css'
import { Bar, Metatags } from '../components/Hooks/'
import {styletron} from '../styletron'
import { Provider as StyletronProvider } from 'styletron-react'
import {StyleReset} from 'atomize'



function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
        <Metatags description='null'/>
        <StyleReset/>
        <Component {...pageProps} />
        <Bar/>
    </StyletronProvider>
  )
}

export default MyApp
