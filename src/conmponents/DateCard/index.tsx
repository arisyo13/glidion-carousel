import { format } from 'date-fns';

type Props = {
    day: Date;
    size: 'small' | 'full';
    onClick: () => void;
    disabled?: boolean;
}

const DateCard = ({ day, onClick, size, disabled }: Props) => {
    const title =  size === "full" ? format(day, "EEEE") : format(day, "EEE");
    const sub = size === "full" ? format(day, "MMMM io") : format(day, "dd MMM");
    return (
        <div
            onClick={() => onClick()}
            className={`date-card ${size === "full" && "full"} ${disabled && "disabled"}`}
        >
            { size === "small" ? 
            <>
                <h3>{title}</h3>
                <h3>{sub}</h3>
            </> :
            <h3>{title + " " + sub}</h3> }
        </div>
    )
}

export default DateCard