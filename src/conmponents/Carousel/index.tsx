import { useState } from 'react';
import { getDays } from './definitions';
import arrow from './assets/arrow.svg';
import Slider from 'react-slick';
import DateCard from '../DateCard';

const settings = {
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
}

const Carousel = () => {
    let slider: Slider | null = null;
    const dayList = getDays(14);
    const [selectedDateIndex, setSelectedDateIndex] = useState(0);

	const NextArrow = () => (
		<div
			className="arrow next"
			onClick={() => !!slider && slider.slickNext()}
			onKeyUp={() => !!slider && slider.slickNext()}
			role="button"
			tabIndex={-1}
		>
			<img src={arrow} alt="next" />
		</div>
	);

	const PrevArrow = () => (
		<div
			className="arrow prev"
			onClick={() => !!slider && slider.slickPrev()}
			onKeyUp={() => !!slider && slider.slickPrev()}
			role="button"
			tabIndex={-1}
		>
			<img src={arrow} alt="prev" />
		</div>
	);
    return (
        <div className="carousel">
            <Slider 
                ref={a => {
                    slider = a;
                }}
                {... { settings, nextArrow: <NextArrow />, prevArrow: <PrevArrow /> }}
            >
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