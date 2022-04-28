import {Metatags} from '../components/Hooks/'

const description = {
    title: 'Photos - Khoa Nguyễn',
    url: 'https://www.khoanguyen.dev/photos',
}

const photos = () => {
    return (
        <div>
            <Metatags description={description}/>
            Enter
        </div>
    );
}

export default photos;