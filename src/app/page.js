import About from "@/components/HomePage/About";
import Banner from "@/components/HomePage/Banner";
import Contact from "@/components/HomePage/Contact";
import Projects from "@/components/HomePage/Projects";
import Services from "@/components/HomePage/Services";
import Testimonials from "@/components/HomePage/Testimonials";


export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Projects></Projects>
        <Testimonials></Testimonials>
        <Contact></Contact>
    </div>
  );
}
