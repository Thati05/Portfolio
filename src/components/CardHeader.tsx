import Image from "next/image";
import StarIcon from "@/app/Icons/star.png"
import { twMerge } from "tailwind-merge";
type Props = {
  title: string;
  description: string;
  className?:string;
};

export default function CardHeader({ title, description, className }: Props) {
  return (
    <div className={twMerge("flex flex-col",className)}>
      <div className="inline-flex items-center gap-2">
        <Image src={StarIcon} alt="star-icon" width={35} height={35} />
        <h3 className="text-3xl">{title}</h3>
      </div>
      <p className="text-[#737373] text-sm mt-2">{description}</p>
    </div>
  );
}
