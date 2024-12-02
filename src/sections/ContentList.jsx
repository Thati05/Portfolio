"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ContentList = ({ items }) => {
  const itemsRef = useRef([]);
  const revealRef = useRef(null); // Hover reveal element
  const component = useRef(null); // For GSAP context cleanup
  const lastMousePos = useRef({ x: 0, y: 0 }); // Store last mouse position
  const [currentItemIndex, setCurrentItemIndex] = useState(null); // Track hovered item index

  // Determine the URL prefix based on contentType dynamically
  const urlPrefix = "/blog";

  useEffect(() => {
    // Animate each item with individual ScrollTrigger
    itemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 }, // Initial state
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px", // Trigger when the top of the item is 100px above the bottom of the viewport
              end: "top center", // End when the item reaches the center of the viewport
              toggleActions: "play none none reverse", // Replay animation on re-scroll
              delay: index * 0.15, // Stagger effect
            },
          }
        );
      }
    });

    return () => {
      // Clean up ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Call for the images ahead of time
  useEffect(() => {
    items.forEach((item) => {
      if (item.fallbackItemImage) {
        const img = new Image();
        img.src = item.fallbackItemImage; // Preload the image
      }
    });
  }, [items]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      const speed = Math.sqrt(
        Math.pow(mousePos.x - lastMousePos.current.x, 2) +
          Math.pow(mousePos.y - lastMousePos.current.y, 2)
      );

      if (currentItemIndex !== null && revealRef.current) {
        const maxX = window.innerWidth - 250;
        const maxY = window.scrollY + window.innerHeight - 350;

        gsap.to(revealRef.current, {
          x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
          y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
          rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
          opacity: 1,
          visibility: "visible",
          ease: "back.out(2)",
          duration: 1.3,
        });
      }

      lastMousePos.current = mousePos;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentItemIndex]);

  const handleMouseEnter = (index) => {
    setCurrentItemIndex(index);
  };

  const handleMouseLeave = () => {
    setCurrentItemIndex(null);
  };

  return (
    <div className="relative" ref={component}>
      {/* Content Items */}
      <ul
        className="grid mt-10 border-b border-b-slate-200"
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item, index) => (
          <li
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            className="list-item opacity-0"
          >
            <Link
              href={`${urlPrefix}/${item.items.replace(/\s+/g, "-").toLowerCase()}`}
              className="flex flex-col justify-between md:items-center border-t border-t-slate-200 py-5 md:flex-row"
            >
              <div className="flex flex-col">
                <span className="item-title font-bold text-lg">{item.items}</span>
                {item.tags?.length > 0 && (
                  <div className="item-tags flex gap-3 mt-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="tag inline-block bg-slate-200 text-slate-700 text-sm px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span className="view-more text-gray-400 hover:underline mt-3 md:mt-0 flex items-center gap-2">
                {item.viewMoreText}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7312/7312623.png"
                  width={20}
                  height={20}
                  alt="arrowUpRight"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hover Effect */}
      <div
        className={`pointer-events-none absolute left-0 -top-[290px] -z-10 h-[190px] w-40 rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300 ${
          currentItemIndex !== null ? "opacity-100" : ""
        }`}
        style={{
          backgroundImage:
            currentItemIndex !== null
              ? `url(${items[currentItemIndex]?.fallbackItemImage})`
              : "",
        }}
        ref={revealRef}
      ></div>
    </div>
  );
};

export default ContentList;
