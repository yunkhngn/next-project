import {Icon} from 'atomize'
import { useState } from 'react';
import { useRouter } from 'next/router'

const BarIcon = ({icon, name, url, clickHandler, changeColor}) => {
    const [bounce, setBounce] = useState(false);
    const changeHandler = () => {
        setBounce(true);
        setTimeout(() => {
        setBounce(false);
        }, 750);
    };

    const location = useRouter();
    const path = location.pathname;
    const displayNav = path === url;
    
    return (
        <div className="Icon--container" alt={name}>
            <div
                className={bounce ? "Icon--bounce icon2" : "icon2"}
            >
                <span
                className={"Icon Icon" + 'light'}
                onClick={() => {
                    changeHandler();
                    if (clickHandler) {
                    clickHandler();
                    }
                }}
                >
                <Icon name={bounce ? "Loading" : icon} color={changeColor ? "#858585" : "gray300"} size="22px"/>
                </span>
            </div>
            <Icon d={displayNav ? null : "none" } name="Dot" m="auto" color={changeColor ? "#dbdbdb" : "#212121"} size="10px"/>
        </div>
    );
}

export default BarIcon;