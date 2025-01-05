import Title from '@/components/resume/Title';

interface OwnProps {
    detailTitle?: string,
    deatilPeriod?: string,
}

const DetailExperienceTitle:React.FC<OwnProps> = ({detailTitle, deatilPeriod}) => {
    return (
        <div>
            <Title title={ detailTitle } size="S" />
            <p className="text-xs sm:text-sm text-gray-600">{ deatilPeriod }</p>
        </div>
    )
}

export default DetailExperienceTitle