import Hero from "@/components/Hero/Hero";
//import Hero_2nd from "@/components/Hero_2nd";
import Projects from "@/components/Projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Tape from "@/sections/Tape";
import Testimonials from "@/sections/Testimonials";
import Footer from "@/sections/Footer";
import { FloatingNav } from "@/components/FloatingNav";



export default function Home() {
  return (
   <main className=" font-Urbanist max-w-7xl mx-auto relative justify-center  ">
    
    <FloatingNav
  navItems={[
    { name: 'Home', link: '/' },
    { name: 'About', link: '/#about' },
    { name: 'Work', link: '/#work' },
    { name: 'Blog', link: '/blog' },
  ]}
/>

     {/* Home Section */}
     <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>
     <section id="work">

      <Projects />
     </section>
      <Tape/>
      <Testimonials/>
      <section id="contact">

      <Contact/>
      </section>
    
      
    
     
   </main>
  );
}
