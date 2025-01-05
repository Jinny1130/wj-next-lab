import Title from '@/components/resume/Title';

interface OwnProps {
    detailTitle?: string,
    detailPeriod?: string,
}

const DetailExperienceTitle:React.FC<OwnProps> = ({detailTitle, detailPeriod}) => {
    return (
        <div className='pb-2'>
            { detailTitle && <Title title={ detailTitle } size="S" /> }
            { detailPeriod && <p className="text-xs sm:text-sm text-gray-600">{ detailPeriod }</p> }
        </div>
    )
}

export default DetailExperienceTitle