import About from "@/components/HomePage/About";
import Banner from "@/components/HomePage/Banner";
import Contact from "@/components/HomePage/Contact";
import Projects from "@/components/HomePage/Projects";
import Services from "@/components/HomePage/Services";


export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
    </div>
  );
}
