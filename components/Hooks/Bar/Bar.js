import Icon from "./BarIcon";
import Link from "next/link";
import Spacer from "./Spacer";
const SocialMedia = [
    {
      id: 4,
      name: "Facebook",
      icon: "Facebook",
      link: "https://www.facebook.com/yun.khngn",
    },
    {
      id: 5,
      name: "Instagram",
      icon: "Instagram",
      link: "https://instagram.com/yun.khngn_",
    },
    {
      id: 6,
      name: "Github",
      icon: "Github",
      link: "https://github.com/yunkhngn",
    },
    {
      id: 7,
      name: "Behance",
      icon: "Behance",
      link: "https://www.behance.net/yunkhngn",
    },
  ];

const BarNavigate = [
    {
    id: 1,
    name: "About",
    icon: "UserCircle",
    url: "/about",
    },
    {
    id: 2,
    name: "Projects",
    icon: "Draft",
    url: "/projects",
    },
    {
    id: 3,
    name: "Writings",
    icon: "Mail",
    url: "/writings",
    }, 
]
  
const openURL = (url) => {
setTimeout(() => {
    window.open(url, "_blank");
}, 750);
};

const Bar = ({setTheme, theme, setThemeUse, themeProvider}) => {
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setThemeUse(theme === 'light' ? themeProvider[1] : themeProvider[0]);
  };
    return (
        <nav className={"Bar--container Bar--"+theme}>
            <div className="Bar">
                <div className="Bar--section">
                <Link href="/" passHref>
                  <a className="Bar--section">
                  <Icon
                        icon="HomeSolid2"
                        name="Home"
                        url="/"
                        alt="Home"
                        changeColor={theme === 'light' ? true : false}
                        theme={theme}
                    >
                    </Icon>
                  </a>
                </Link>
                </div>
        <Spacer theme={theme}/>
        <div className="Bar--section ">
          {BarNavigate.map((item) => (
             <Link href={item.url} passHref key={item.id}>
              <a className="Bar--section">
                <Icon
                  icon={item.icon}
                  name={item.name}
                  alt={item.name}
                  changeColor={theme === 'light' ? true : false}
                  url={item.url}
                  theme={theme}
                />
              </a>
            </Link>
          ))}
        </div>

        <Spacer theme={theme}/>

        <div className="Bar--section ">
          {SocialMedia.map((item) => (
            <Icon
              icon={item.icon}
              name={item.name}
              key={item.id}
              clickHandler={() => openURL(item.link)}
              alt={item.name}
              changeColor={theme === 'light' ? true : false}
              theme={theme}
            />
          ))}
        </div>

        <Spacer theme={theme}/>

        <div className="Bar--section ">
          <Icon
            icon="SettingsSolid"
            name="Change Theme"
            alt="Change Theme"
            changeColor={theme === 'light' ? true : false}
            clickHandler={changeTheme}
            theme={theme}
          />
        </div>
        <div className="Bar--section ">
          <Icon
            icon="UpArrow"
            name="Scroll up"
            alt="Scroll up"
            changeColor={theme === 'light' ? true : false}
            clickHandler={() => window.scrollTo(0, 0)}
            theme={theme}
          />
        </div>
      </div>
    </nav>
    );
}


export default Bar;