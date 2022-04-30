import '../styles/globals.css'
import '../styles/Bar.css'
import '../styles/BarIcon.css'
import { Bar, CmdBar} from '../components/Hooks/'
import {styletron} from '../styletron'
import { Provider as StyletronProvider } from 'styletron-react'
import {StyleReset} from 'atomize'
import {useState} from 'react'
import {Div} from 'atomize'
import Metatags from '../components/Template/Metatags'
import {KBarProvider} from 'kbar'
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')
  const router = useRouter()  
  const actions = [
    {
      id: "homeAction",
      name: "Home",
      shortcut: ["h"],
      keywords: "back",
      section: "Navigation",
      perform: () => router.push('/'),
      subtitle: "Subtitles can help add more context.",
    },
    {
      id: "aboutMeAction",
      name: "About me",
      shortcut: ["a"],
      keywords: "about me description",
      section: "Navigation",
      perform: () => router.push('/about'),
      subtitle: "Subtitles can help add more context.",
    },
    {
      id: "projectsAction",
      name: "Projects",
      shortcut: ["p"],
      keywords: "project projects work featured",
      section: "Navigation",
      perform: () => router.push('/projects'),
      subtitle: "Subtitles can help add more context.",
    },
    {
      id: "writingsAction",
      name: "Writings",
      shortcut: ["w"],
      keywords: "writing writings blog",
      section: "Navigation",
      perform: () => router.push('/writings'),
      subtitle: "Subtitles can help add more context.",
    },
    {
      id: "photosAction",
      name: "Photos",
      shortcut: ["p","t"],
      keywords: "photo photos picture pictures gallery",
      section: "Navigation",
      perform: () => router.push('/photos'),
      subtitle: "Subtitles can help add more context.",
    },
    {
      id: "scrollToTopAction",
      name: "Scroll to top",
      shortcut: ["s","t"],
      keywords: "scroll top",
      section: "Preferences",
      perform: () => window.scrollTo(0, 0),
      subtitle: "Subtitles can help add more context.",
    },
    {
      id: "scrollToBotAction",
      name: "Scroll to bottom",
      shortcut: ["s","b"],
      keywords: "scroll top",
      section: "Preferences",
      perform: () => window.scrollTo(0, document.body.scrollHeight),
      subtitle: "Subtitles can help add more context.",
    },
  ];
  
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
        <KBarProvider
      options={{
        enableHistory: true,
      }}
      actions={actions}
      setTheme={setTheme}
      >
          <div className={'webkit selection'+theme}>
            <CmdBar theme={theme}/>
            <Metatags description='null'/>
            <StyleReset/>
            <Component themeUse={themeUse.styles} theme={theme} {...pageProps} />
            <Bar theme={theme} setTheme={setTheme} setThemeUse={setThemeUse} themeProvider={themeProvider}/>
          </div>
          </KBarProvider>
      </Div>
    </StyletronProvider>
  )
}

export default MyApp
