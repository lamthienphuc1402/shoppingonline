import React from 'react'
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const HottestComponent = ({product}) => {
console.log(product);
  return (
    <>
    <h1 className='text-center font-bold my-4 text-4xl uppercase'>Best Seller</h1>
    <div >
        
        <Swiper pagination={true} navigation={true} loop={true} autoplay={true} modules={[Pagination, Navigation, Autoplay]}  className="mySwiper max-w-full shadow-2xl rounded-3xl dark:shadow-primary">
            {product.map(p => (
                <SwiperSlide >
                    <div className='flex sm:flex-row flex-col sm:justify-start justify-center items-center py-10 px-10'>
                        <div className='sm:w-3/5 w-full'>
                            <img className='rounded-lg w-full shadow-1xl' src={"data:image/jpg;base64," + p.image} alt="image" />
                        </div>
                        <div className='sm:w-2/5 w-full flex flex-col justify-center items-center'>
                            <h1 className='font-bold lg:text-5xl md:text-3xl sm:text-xl'>{p.name}</h1>
                            <div className='underline font-semibold text-2xl'><label className='underline'>Price: </label> <span className='font-bold'>{`${p.price} $`}</span></div>
                            <Link to={'/product/' + p._id}><Button variant="primary" className=' mt-3'>See detail</Button></Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
           
        </Swiper>
    </div>
    </>
  )
}

export default HottestComponent