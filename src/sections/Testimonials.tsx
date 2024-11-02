import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import Bounded from "@/components/Bounded";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Gerard",
    email: "gerard01@gmail.com",
    text: "Seithati consistently demonstrates exceptional creativity and technical skill as a front-end developer. Their attention to detail and commitment to user-centered design shines through in every project, from sleek, responsive layouts to engaging UI elements.",
    avatar: "/assets/images/gerard.png",
  },
  {
    name: "Sarah",
    email: "sarah02@gmail.com",
    text: "Seithati's ability to bring designs to life with smooth animations and responsive layouts is impressive. Working with them has been a pleasure, and the final results always exceed my expectations.",
    avatar: "/assets/images/gerard.png",
  },
  {
    name: "Gerard",
    email: "gerard01@gmail.com",
    text: "Seithati consistently demonstrates exceptional creativity and technical skill as a front-end developer. Their attention to detail and commitment to user-centered design shines through in every project, from sleek, responsive layouts to engaging UI elements.",
    avatar: "/assets/images/gerard.png",
  },
  {
    name: "Gerard",
    email: "gerard01@gmail.com",
    text: "Seithati consistently demonstrates exceptional creativity and technical skill as a front-end developer. Their attention to detail and commitment to user-centered design shines through in every project, from sleek, responsive layouts to engaging UI elements.",
    avatar: "/assets/images/gerard.png",
  },
  {
    name: "Gerard",
    email: "gerard01@gmail.com",
    text: "Seithati consistently demonstrates exceptional creativity and technical skill as a front-end developer. Their attention to detail and commitment to user-centered design shines through in every project, from sleek, responsive layouts to engaging UI elements.",
    avatar: "/assets/images/gerard.png",
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
                    key={`${testimonial.name}-${testimonial.email}-${index}`}
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
                          {testimonial.email}
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
