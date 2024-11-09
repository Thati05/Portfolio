import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import Bounded from "@/components/Bounded";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Tumelo Mokoena",
    position: "Network Support Technician",
    text: "Seithati consistently demonstrates exceptional creativity and technical skill as a developer. Her attention to detail and commitment to user-centered design shines through in every project, from sleek, responsive layouts to engaging UI elements.",
    avatar: "/assets/images/Ntate.png",
  },
  {
    name: "Kgothatso Annie",
    position: "Client",
    text: 
    "Having followed Seithati’s journey through software development, I’ve seen firsthand her dedication, skill, and creativity across every project. From her beautifully designed websites to her meticulous code, she consistently brings vision to life. Her work not only meets but exceeds expectations",
    avatar: "/assets/images/KG3.png",
  },
  {
    name: "Lebohang Khumalo",
    position: "Computer Scientist",
    text: "Seithati Mokoena is a skilled developer with a keen design eye. Her work, including impressive 3D modeling projects, highlights her creativity and commitment to learning. Seithati combines technical expertise with innovation, and I’m confident she’ll continue making a strong impact in the industry.",
    avatar: "/assets/images/lebo.png",
  },
  

   {
    name: "Milo Brook",
    position: "Technical Assistant",
    text: "Seithati is a driven and resilient software developer who consistently pushes herself to learn and grow. Her passion and persistence are evident in every project she takes on. She’s laying a strong foundation for a bright future in tech",
    avatar: "/assets/images/Milo.png",
  },
 
];

export default function Testimonials() {
  return (
    <div className="py-16">
      <Bounded className="">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />

        {/* Custom styling for mask effect */}
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0))] py-4 -my-4  ">
        <div
    className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]"
  >
          {Array(2).fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={`${testimonial.name}-${testimonial.position}-${index}`}
                    className="max-w-xs h-[270px] md:p-8 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="w-14 h-14 rounded-full bg-gray-200 inline-flex items-center justify-center flex-shrink-0">
                        <Image
                          width={50}
                          height={50}
                          className="rounded-full"
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </Bounded>

    </div>
  );
}
