import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"
import Card from "@/components/Card"

const testimonials = [
  {
    name: "Gerard",
    email:"gerard01@gmail.com",
    text:"Seithati consistently demonstrates exceptional creativity and technical skill as a front-end developer. Their attention to detail and commitment to user-centered design shines through in every project, from sleek, responsive layouts to engaging UI elements.",
    avatar:"/assets/images/gerard.png",
  },
  {
    name: "Gerard",
    email:"gerard01@gmail.com",
    text:"Seithati consistently demonstrates exceptional creativity and technical skill as a front-end developer. Their attention to detail and commitment to user-centered design shines through in every project, from sleek, responsive layouts to engaging UI elements.",
    avatar:"/assets/images/gerard.png",
  },
]




export default function Testimonials() {
  return (
    <div className="pb-16 md:px-10 md:py-14 px-5 py-10 lg:py-24 flex place-content-center" >
      <div className="mt-10 place-content-center flex flex-col justify-center ">

    <SectionHeader eyebrow="Happy Clients" title="What Clients Say About Me" description="Don't just take my word for it, See what mu clients have to say abour my work."
    />

     
<div className=" mt-16 flex">
  <div className=" flex flex-none">


    {testimonials.map((testimonial) => (
      <Card key={testimonial.name} className=" max-w-xs" >
        <div className=" flex gap-4 items-center ">
          <div className=" size-14 rounded-full bg-gray-200 inline-flex items-center justify-center ">


        <Image width={50} height={50} className=" rounded-full" src={testimonial.avatar} alt={testimonial.name} />
          </div>
        <div>

        <div className=" font-semibold ">{testimonial.name}</div>
        <div className=" text-sm  text-gray-400 ">{testimonial.email}</div>
        </div>
        </div>
        <p className=" mt-4 text-sm" >{testimonial.text}</p>
        </Card>

))}
</div>
    </div>
    </div>
    </div>
  )
}