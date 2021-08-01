import { format } from 'date-fns';

type Props = {
    day: Date;
    size: 'small' | 'full';
    onClick: () => void;
    disabled?: boolean;
}

const DateCard = ({ day, onClick, size, disabled }: Props) => {
    const currentDay = format(day, 'dd MMM');
    return (
        <div 
            onClick={() => onClick()}
            className={`date-card ${size === "full" && "full"} ${disabled && "disabled"}`}
        >
            <h3>{currentDay}</h3>
        </div>
    )
}

export default DateCard