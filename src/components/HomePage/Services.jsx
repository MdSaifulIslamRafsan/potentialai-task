import { serviceData } from "@/lib/ServicesData";
import Image from "next/image";

const Services = () => {
    return (
        <div id="services" className="mb-10">
           <div className="max-w-xl py-10 text-center space-y-5 mx-auto">
                <h1 className="text-4xl font-bold">Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
               { serviceData?.map((service, index) => <div className="py-8 space-y-2 text-black rounded-2xl px-3 bg-[#F8F8F8]" key={index}>
                    <Image width="60" height="30" src={service?.img} className="h-16" alt="logo" />
                    <h4 className="font-bold  text-xl ">{service?.title}</h4>
                    <p>{service?.des}</p>
               </div>)}
           </div>
        </div>
    );
};

export default Services;