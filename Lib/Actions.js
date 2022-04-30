import {createAction} from 'kbar'
import {useRouter} from 'next/router'

const actions = [
  {
    id: "homeAction",
    name: "Home",
    shortcut: ["h"],
    keywords: "back",
    section: "Navigation",
    perform: () => console.log('cliced'),
    subtitle: "Subtitles can help add more context.",
  },
  {
    id: "docsAction",
    name: "Docs",
    shortcut: ["g", "d"],
    keywords: "help",
    section: "Navigation",
    perform: () => console.log('cliced'),
    subtitle: "Subtitles can help add more context.",
  },
  {
    id: "contactAction",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email hello",
    section: "Navigation",
    perform: () => console.log('cliced'),
    subtitle: "Subtitles can help add more context.",
  },
  {
    id: "twitterAction",
    name: "Twitter",
    shortcut: ["t"],
    keywords: "social contact dm",
    section: "Navigation",
    perform: () => console.log('cliced'),
    subtitle: "Subtitles can help add more context.",
  },
  {
    id: "changeThemeAction",
    name: "Change Theme",
    shortcut: ["c",'t'],
    keywords: "theme change",
    section: "Preferences",
    perform: () => console.log('cliced'),
    subtitle: "Subtitles can help add more context.",
  },
  createAction({
    name: "Github",
    shortcut: ["g", "h"],
    keywords: "sourcecode",
    section: "Navigation",
    perform: () => console.log('cliced'),
    subtitle: "Subtitles can help add more context.",
  }),
];

export default actions