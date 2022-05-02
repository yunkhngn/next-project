const Title = ({children, color}) => {
    console.log(color)
    return (
        <header>
            <h1 className={color === '#171717' ? "dark" : 'light'}>
                {children}
            </h1>
        </header>
    );
}

export default Title;