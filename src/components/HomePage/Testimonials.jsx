import Image from "next/image";

const Testimonials = () => {
    return (
        <section className="">
            <div className="space-y-3">
                <h1 className="md:text-4xl font-bold text-center">Testimonials</h1>
                <p className="text-xl pb-10 font-normal md:w-[70%] mx-auto text-center">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>

                {/* reviews */}
                <div className="text-black bg-[#F8F8F8] p-8 flex md:flex-row flex-col items-center gap-6 rounded-md md:w-[75%] w-full mx-auto">
                    <div>
                        <Image src="/assets/Ellipse 10.png" alt="review images" width={230} height={230}></Image>
                    </div>
                    {/* text */}
                    <div>
                    <p> <span className="text-[#FD6F00] text-2xl">{'"'}</span> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className="text-[#FD6F00] text-xl">{'"'}</span></p>
                    <p className="font-semibold">Name</p>
                    <p>CEO</p>
                    </div>
                </div>
                
                {/* slider indecadtor */}
                <div className="flex justify-center items-center gap-2 py-8">
                    <div className="h-[16px] w-[55px] rounded-lg bg-[#D9D9D9]"></div>
                    <div className="h-[16px] w-[55px] rounded-lg bg-[#FD6F00]"></div>
                    <div className="h-[16px] w-[55px] rounded-lg bg-[#D9D9D9]"></div>
                    <div className="h-[16px] w-[55px] rounded-lg bg-[#D9D9D9]"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;