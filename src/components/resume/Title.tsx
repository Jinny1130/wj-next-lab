interface OwnProps {
    title: String,
    size: String   
}

const Title:React.FC<OwnProps> = ({title, size}) => {
    return (
        <div className={`text-sky-500 font-semibold ${size === 'M' ? 'text-2xl sm:text-3xl'  : size === 'S' ? 'text-lg sm:text-xl' : 'text-4xl'}`}>
            {title}.
        </div>
    )
}

export default Title