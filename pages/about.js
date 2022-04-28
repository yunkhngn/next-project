import Link from "next/link";
import { Metatags } from "../components/Hooks";
const description = {
    title: 'About - Khoa Nguyễn',
    url: 'https://www.khoanguyen.dev/about',
}

  const about = () => {
    return (
        <div>
            <Metatags description={description}/>
        </div>
    );
}

export default about;