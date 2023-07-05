import Image from 'next/image';

import { getTestimonials } from '@/sanity/sanity-utils';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { PortableText } from '@portabletext/react';

const Testimonials = async () => {
  const testimonials = await getTestimonials();
  return (
    <div id="testimonials" className="w-full h-screen  items-center">
      <section className="max-w-6xl h-full mt-16 p-6 mx-auto flex flex-col justify-center items-center">
        <h2 className="flex justify-center mt-24">Testimonials</h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="w-full pt-12 pb-12"
        >
          {testimonials.map((testimonial) => {
            return (
              <SwiperSlide
                key={testimonial._id}
                className=" bg-center bg-cover mt-24"
              >
                <div className="relative flex flex-col justify-center items-center h-[360px] w-[480px] rounded-sm">
                  <div className=" bg-white shadow-lg text-sm  p-6  rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                    <div className="text-gray-600 font-[400] ">
                      <PortableText value={testimonial.comment} />
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
                    </svg>

                    <div
                      className="absolute mt-6 w-0 h-0 left-1/2 transform -translate-x-1/2
                        border-l-[26px] border-l-transparent
                        border-t-[20px] border-t-gray-300 border-t-opacity-[0.5] 
                        border-r-[26px] border-r-transparent"
                    ></div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mt-4">
                    <div className=" flex items-center justify-self-end">
                      {testimonial.images && (
                        <Image
                          src={testimonial.images[0].asset.url}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className=" rounded-full "
                        />
                      )}
                    </div>
                    <div>
                      <div>{testimonial.name}</div>
                      <div>{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
