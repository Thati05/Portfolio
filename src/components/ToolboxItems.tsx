import Image from "next/image";
import { twMerge } from "tailwind-merge";

type ToolboxItemsProps = {
  items: {
    title: string;
    icon: string;
  
  }[];  
  className?:string;
  itemsWrapperClassName?:string
};

export function ToolboxItems({ items, className, itemsWrapperClassName }: ToolboxItemsProps) {
  return (
    <div className={twMerge(" flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div className={twMerge(" flex py-0.5 flex-none gap-6 pr-6", itemsWrapperClassName)}>

      {items.map((item) => (
        <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-[1px] outline-[#E6E6E6] rounded-lg">
          <Image width={25} height={25} src={item.icon} alt={`${item.title} icon`} />
          <span className="font-semibold">{item.title}</span>
        </div>
      ))}
      </div>
    </div>
  );
}