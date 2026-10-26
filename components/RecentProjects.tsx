"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useState } from "react";

const RecentProjects = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="py-20 w-full" id="projects">
      <h1 className="heading">
        Recent <span className="text-purple ml-3">projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] min-h-[500px]"
            key={item.id}
          >
            <PinContainer title={item.link.replace("https://", "")} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h2>

              <p
                className={`lg:text-xl lg:font-normal font-light text-sm min-h-[112px] ${
                  isHovered ? "" : "line-clamp-4"
                }`}
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                  height: "auto",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                  >
                    {item.link.includes("github.com") ? "View code" : "Live demo"}
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
