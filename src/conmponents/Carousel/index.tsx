import { useState } from 'react';
import Slider from 'react-slick';
import DateCard from '../DateCard';
import { getDays } from './definitions';

const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 7,
}

const Carousel = () => {
    const dayList = getDays(14);
    const [selectedDateIndex, setSelectedDateIndex] = useState(0)
    return (
        <div className="carousel">
            <Slider {... { settings }}>
                { dayList.map((day, index) => (
                    <DateCard
                        key={index}
                        day={day}
                        size="small"
                        onClick={() => setSelectedDateIndex(index)}
                    />
                ))}
            </Slider>
            <DateCard
                onClick={() => {}}
                day={dayList[selectedDateIndex]}
                size="full"
            />
        </div>
    )
}

export default Carousel