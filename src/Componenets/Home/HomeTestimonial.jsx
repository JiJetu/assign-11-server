import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeTestimonial = () => {
    const [reviews, setReviews] = useState([]);

    console.log(reviews);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);

    return (
        
    );
};

export default HomeTestimonial;
