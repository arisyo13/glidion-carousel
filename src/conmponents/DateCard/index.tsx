import { format } from 'date-fns';

type Props = {
    day: Date;
    size: 'small' | 'full';
    onClick: () => void;
    state?: 'selected' | 'disabled' | 'regular';
}

const DateCard = ({ day, onClick, size, state }: Props) => {
    let title = format(day, 'EEE');
    let subTitle = format(day, 'dd MMM');
    if (size === 'full'){
        title = format(day, 'EEEE');
        subTitle = format(day, 'MMMM do');
    }
    return (
        <div 
            onClick={() => onClick()}
            className={`date-card ${size === "full" && "full"} ${state}`}
        >
            <>
                <h3>{title}</h3>
                <h3>{subTitle}</h3>
            </>
        </div>
    )
}

export default DateCard