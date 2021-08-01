import { format } from 'date-fns';

type Props = {
    day: Date;
    size: 'small' | 'full';
    onClick: () => void;
}

const DateCard = ({ day, onClick, size }: Props) => {
    const currentDay = format(day, 'dd MMM')
    return (
        <div 
            onClick={() => onClick()}
            className={`date-card ${size === "full" && "full"}`}
        >
            <h3>{currentDay}</h3>
        </div>
    )
}

export default DateCard