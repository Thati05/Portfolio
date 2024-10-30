import Hero from "@/components/Hero/Hero";
//import Hero_2nd from "@/components/Hero_2nd";
import Projects from "@/components/Projects";
import Tape from "@/sections/Tape";
import Testimonials from "@/sections/Testimonials";



export default function Home() {
  return (
   <main className=" font-Urbanist max-w-7xl mx-auto relative justify-center  ">
  
      <Hero/>
      <Projects />
      <Tape/>
      <Testimonials/>
      
    
     
   </main>
  );
}
