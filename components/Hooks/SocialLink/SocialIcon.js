import {Icon} from 'atomize'
const SocialIcon = ({icon,link}) => {
    const open = () => {
        window.open(link, '_blank');
    }
    return (
        <Icon onClick={open} name={icon}  color="#858585" m={{r:'2em'}}/>
    );
}

export default SocialIcon;