type Props = {
    day: string;
}

const DateCard = ({ day }: Props) => {
    return (
        <div>
            <h3>{day}</h3>
        </div>
    )
}

export default DateCard