import { format } from 'date-fns';

type Props = {
    day: Date;
}

const DateCard = ({ day }: Props) => {
    const currentDay = format(day, 'dd MMM')
    return (
        <div>
            <h3>{currentDay}</h3>
        </div>
    )
}

export default DateCard