import About from "@/components/HomePage/About";
import Contact from "@/components/HomePage/Contact";
import Projects from "@/components/HomePage/Projects";
import Services from "@/components/HomePage/Services";


export default function Home() {
  return (
    <div>
        <About></About>
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
    </div>
  );
}
