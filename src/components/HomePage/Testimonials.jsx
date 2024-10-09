"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section className="my-10">
            <div className="text-center space-y-5 mb-10 max-w-xl mx-auto">
             <h1 className="text-4xl font-bold">Testimonials</h1>
             <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            </div>
            <Swiper  pagination={{
          clickable: true,
        }} modules={[Pagination]} className="mySwiper">

                <SwiperSlide> 
                    <div className="text-black bg-[#F8F8F8] p-8 flex md:flex-row flex-col items-center gap-6 rounded-md md:w-3/4 w-full mx-auto">
                    <div>
                        <Image src="/assets/Ellipse 10.png" alt="review images" width={230} height={230}></Image>
                    </div>
                    <div>
                    <span className="text-[#FD6F00] relative top-6 -left-3 text-3xl">&quot;</span> 
                    <p>
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                    <span className="text-[#FD6F00] pt-5 text-3xl relative top-5">&quot;</span>
                    </p>

                    <p className="font-semibold">Name</p>
                    <p>CEO</p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide> 
                    <div className="text-black bg-[#F8F8F8] p-8 flex md:flex-row flex-col items-center gap-6 rounded-md md:w-3/4 w-full mx-auto">
                    <div>
                        <Image src="/assets/Ellipse 10.png" alt="review images" width={230} height={230}></Image>
                    </div>
                    <div>
                    <span className="text-[#FD6F00] relative top-6 -left-3 text-3xl">&quot;</span> 
                    <p>
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                    <span className="text-[#FD6F00] pt-5 text-3xl relative top-5">&quot;</span>
                    </p>

                    <p className="font-semibold">Name</p>
                    <p>CEO</p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide> 
                    <div className="text-black bg-[#F8F8F8] p-8 flex md:flex-row flex-col items-center gap-6 rounded-md md:w-3/4 w-full mx-auto">
                    <div>
                        <Image src="/assets/Ellipse 10.png" alt="review images" width={230} height={230}></Image>
                    </div>
                    <div>
                    <span className="text-[#FD6F00] relative top-6 -left-3 text-3xl">&quot;</span> 
                    <p>
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                    <span className="text-[#FD6F00] pt-5 text-3xl relative top-5">&quot;</span>
                    </p>

                    <p className="font-semibold">Name</p>
                    <p>CEO</p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide> 
                    <div className="text-black bg-[#F8F8F8] p-8 flex md:flex-row flex-col items-center gap-6 rounded-md md:w-3/4 w-full mx-auto">
                    <div>
                        <Image src="/assets/Ellipse 10.png" alt="review images" width={230} height={230}></Image>
                    </div>
                    <div>
                    <span className="text-[#FD6F00] relative top-6 -left-3 text-3xl">&quot;</span> 
                    <p>
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                    <span className="text-[#FD6F00] pt-5 text-3xl relative top-5">&quot;</span>
                    </p>

                    <p className="font-semibold">Name</p>
                    <p>CEO</p>
                    </div>
                </div>
                </SwiperSlide>
                
            </Swiper>
        </section>
    );
};

export default Testimonials;
