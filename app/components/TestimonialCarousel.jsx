
'use client';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Testimonial from './Testimonial';
import testimonials from '../testimonialData';

const TestimonialCarousel = ({testimonials}) => {
    return(
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
            showIndicators={true}
        >
            {
                testimonials.map((testimonialSlide, index) => (
                   <div key={index} className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white">
                       {testimonialSlide.map((testimonial, index) => (
                           <Testimonial key={index} name={testimonial.name} quote={testimonial.quote} date={testimonial.date} />
                       ))}
                   </div>
                ))
            }
        </Carousel>
    )
 } 

export default TestimonialCarousel;