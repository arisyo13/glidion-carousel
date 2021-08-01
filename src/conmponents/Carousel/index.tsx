import Slider from 'react-slick';
import DateCard from '../DateCard';

const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
}

const Carousel = () => {
    return (
        <div className="carousel">
            <Slider {... { settings }}>
                <DateCard day={"1st Aug"}/>
                <DateCard day={"1st Aug"}/>
                <DateCard day={"1st Aug"}/>
            </Slider>
        </div>
    )
}

export default Carousel