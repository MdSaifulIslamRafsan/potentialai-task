import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
           <div className="relative">
           <Image width="500" height="400" src="/assets/Group 7.png" alt="aboutImage" className="mx-auto"/>
           <Image width="400" className="absolute top-[14%] h-[80px] max-w-[370px] w-full left-1/2 -translate-x-1/2" height="50" src="/assets/Rectangle 4.png" alt="logo" />

           </div>
           <div className="space-y-5">
                <h1 className="text-4xl font-bold">About Me </h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

          <div className="space-y-5">
          <div className="font-bold mb-5">
            UX
            <div className="bg-gray-300 rounded-full w-full h-2.5 mx-auto mt-4">
            <div className="w-11/12 h-full rounded-full bg-[#FD6F00] flex items-center relative">
                <span className="absolute text-xs right-0.5 bg-white w-3 h-5 rounded-full"></span>
            </div>
        </div>
            </div>
            <div className="font-bold mb-5">
            Website Design
            <div className="bg-gray-300 rounded-full w-full h-2.5 mx-auto mt-4">
            <div className="w-10/12 h-full rounded-full bg-[#FD6F00] flex items-center relative">
                <span className="absolute text-xs right-0.5 bg-white w-3 h-5 rounded-full"></span>
            </div>
        </div>
            </div>
            <div className="font-bold mb-5">
            App Design 
            <div className="bg-gray-300 rounded-full w-full h-2.5 mx-auto mt-4">
            <div className="w-[97%] h-full rounded-full bg-[#FD6F00] flex items-center relative">
                <span className="absolute text-xs right-0.5 bg-white w-3 h-5 rounded-full"></span>
            </div>
        </div>
            </div>
           
            <div className="font-bold mb-5">
            Graphic Design 
            <div className="bg-gray-300 rounded-full w-full h-2.5 mx-auto mt-4">
            <div className="w-11/12 h-full rounded-full bg-[#FD6F00] flex items-center relative">
                <span className="absolute text-xs right-0.5 bg-white w-3 h-5 rounded-full"></span>
            </div>
        </div>
            </div>
          </div>
           </div>
        </div>
    );
};

export default About;