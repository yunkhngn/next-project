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
    {
    id: 4,
    name: "Photos",
    icon: "CameraSolid",
    url: "/photos",
    },  
]
  
const openURL = (url) => {
setTimeout(() => {
    window.open(url, "_blank");
}, 750);
};

const Bar = () => {
  const changeColor = true
    return (
        <div className="Bar--container">
            <div className="Bar">
                <div className="Bar--section">
                <Link href="/" passHref>
                  <a className="Bar--section">
                  <Icon
                        icon="HomeSolid2"
                        name="Home"
                        url="/"
                        alt="Home"
                        changeColor={changeColor}
                    >
                    </Icon>
                  </a>
                </Link>
                </div>
        <Spacer />
        <div className="Bar--section ">
          {BarNavigate.map((item) => (
             <Link href={item.url} passHref key={item.id}>
              <a className="Bar--section">
                <Icon
                  icon={item.icon}
                  name={item.name}
                  alt={item.name}
                  changeColor={changeColor}
                  url={item.url}
                />
              </a>
            </Link>
          ))}
        </div>

        <Spacer />

        <div className="Bar--section ">
          {SocialMedia.map((item) => (
            <Icon
              icon={item.icon}
              name={item.name}
              key={item.id}
              clickHandler={() => openURL(item.link)}
              alt={item.name}
              changeColor={changeColor}
            />
          ))}
        </div>

        <Spacer />

        <div className="Bar--section ">
          <Icon
            icon="SettingsSolid"
            name="Change Theme"
            alt="Change Theme"
            changeColor={changeColor}
          />
        </div>
        <div className="Bar--section ">
          <Icon
            icon="UpArrow"
            name="Scroll up"
            alt="Scroll up"
            changeColor={changeColor}
            clickHandler={() => window.scrollTo(0, 0)}
          />
        </div>
      </div>
    </div>
    );
}


export default Bar;