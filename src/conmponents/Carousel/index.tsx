import Slider from 'react-slick';
import DateCard from '../DateCard';
import { getDays } from './definitions';

const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
}

const Carousel = () => {
    const dayList = getDays(14);
    return (
        <div className="carousel">
            <Slider {... { settings }}>
                { dayList.map((day, index) => (<DateCard key={index} day={day} />))}
            </Slider>
        </div>
    )
}

export default Carousel