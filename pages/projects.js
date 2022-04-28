import {Metatags} from '../components/Hooks/'

const description = {
    title: 'Projects - Khoa Nguyễn',
    url: 'https://www.khoanguyen.dev/projects',
}

const projects = () => {
    return (
        <div>
            <Metatags description={description}/>
        </div>
    );
}

export default projects;