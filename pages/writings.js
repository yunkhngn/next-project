import {Metatags} from '../components/Hooks/'

const description = {
  title: 'Writings - Khoa Nguyễn',
  url: 'https://www.khoanguyen.dev/writings',
}

const writing = () => {
    return (
        <div>
            <Metatags description={description}/>
        </div>
    );
}

export default writing;