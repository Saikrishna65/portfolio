"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import React from "react";
import { content } from "../data/content";
import { usePortfolio } from "../context/PortfolioContext";
import Link from "next/link";

const Projects = () => {
  const { mode, language } = usePortfolio();
  const data = content.projects[mode][language];
  return (
    <div className="w-full">
      <div className="text-center font-[space] text-[2.2rem] font-bold tracking-tight text-white md:text-[4rem] lg:text-[6rem]">
        {data.heading}
      </div>
      <div className="mx-auto mt-14 mb-24 grid w-[90%] items-center gap-x-10 gap-y-10 md:w-4/5 md:gap-y-24 lg:w-3/4 lg:grid-cols-2 2xl:w-2/4">
        <div className="h-110 rounded-3xl bg-[#111111] p-6">
          <div className="relative flex h-full w-full flex-col gap-3">
            <div className="h-1/2 w-full overflow-hidden rounded-2xl bg-blue-500">
              <Image
                src="/images/projects/campus_cravings_hero.png"
                alt="campus cravings"
                className="fill h-full w-full"
                width={500}
                height={300}
              />
            </div>
            <div className="flex h-1/2 w-full flex-col gap-2">
              <div className="font-[mons] text-2xl text-white">
                {data.projects[0].name}
              </div>
              <p className="font-[outfit] text-lg text-white">
                {data.projects[0].description}
              </p>
            </div>

            <div>
              <div className="text-lg text-gray-400">
                {data.projects[0].techStack}
              </div>
            </div>

            <Link href="https://github.com/Saikrishna65/college-food-delivery">
              <div className="group absolute right-0 bottom-0 flex h-22 w-22 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-[#00CAFF]">
                <ArrowUpRight
                  strokeWidth={1.2}
                  size={75}
                  className="absolute transition-all duration-400 ease-out group-hover:translate-x-16 group-hover:-translate-y-16"
                />
                <ArrowUpRight
                  strokeWidth={1.2}
                  size={75}
                  className="absolute -translate-x-16 translate-y-16 transition-all duration-400 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="h-110 rounded-3xl bg-[#111111] p-6">
          <div className="relative flex h-full w-full flex-col gap-3">
            <div className="h-1/2 w-full overflow-hidden rounded-2xl bg-blue-500">
              <Image
                src="/images/projects/work_bridge_hero.png"
                alt="Work Bridge"
                className="fill h-full w-full"
                width={500}
                height={300}
              />
            </div>
            <div className="flex h-1/2 w-full flex-col gap-2">
              <div className="font-[mons] text-2xl text-white">
                {data.projects[1].name}
              </div>
              <p className="font-[outfit] text-lg text-white">
                {data.projects[1].description}
              </p>
            </div>

            <div>
              <div className="text-lg text-gray-400">
                {data.projects[1].techStack}
              </div>
            </div>

            <Link href="https://github.com/Saikrishna65/WorkBridge">
              <div className="group absolute right-0 bottom-0 flex h-22 w-22 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-[#00CAFF]">
                <ArrowUpRight
                  strokeWidth={1.2}
                  size={75}
                  className="absolute transition-all duration-400 ease-out group-hover:translate-x-16 group-hover:-translate-y-16"
                />
                <ArrowUpRight
                  strokeWidth={1.2}
                  size={75}
                  className="absolute -translate-x-16 translate-y-16 transition-all duration-400 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
            </Link>
          </div>
        </div>{" "}
        <div className="h-110 rounded-3xl bg-[#111111] p-6">
          <div className="relative flex h-full w-full flex-col gap-3">
            <div className="h-1/2 w-full overflow-hidden rounded-2xl bg-blue-500">
              <Image
                src="/images/projects/fight_club_hero.png"
                alt="Fight Club"
                className="fill h-full w-full"
                width={500}
                height={300}
              />
            </div>
            <div className="flex h-1/2 w-full flex-col gap-2">
              <div className="font-[mons] text-2xl text-white">
                {data.projects[2].name}
              </div>
              <p className="font-[outfit] text-lg text-white">
                {data.projects[2].description}
              </p>
            </div>

            <div>
              <div className="text-lg text-gray-400">
                {data.projects[2].techStack}
              </div>
            </div>
            <Link href="https://github.com/Saikrishna65/fight_club">
              <div className="group absolute right-0 bottom-0 flex h-22 w-22 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-[#00CAFF]">
                <ArrowUpRight
                  strokeWidth={1.2}
                  size={75}
                  className="absolute transition-all duration-400 ease-out group-hover:translate-x-16 group-hover:-translate-y-16"
                />
                <ArrowUpRight
                  strokeWidth={1.2}
                  size={75}
                  className="absolute -translate-x-16 translate-y-16 transition-all duration-400 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
            </Link>
          </div>
        </div>{" "}
        <div className="h-110 rounded-3xl bg-[#111111] p-6">
          <div className="relative flex h-full w-full flex-col gap-3">
            <div className="h-1/2 w-full overflow-hidden rounded-2xl bg-blue-500">
              <Image
                src="/images/projects/vertica_hero.png"
                alt="Vertica"
                className="fill h-full w-full"
                width={500}
                height={300}
              />
            </div>
            <div className="flex h-1/2 w-full flex-col gap-2">
              <div className="font-[mons] text-2xl text-white">
                {data.projects[3].name}
              </div>
              <p className="font-[outfit] text-lg text-white">
                {data.projects[3].description}
              </p>
            </div>

            <div>
              <div className="text-lg text-gray-400">
                {data.projects[3].techStack}
              </div>
            </div>
            <Link href="https://github.com/Saikrishna65/skyscraper">
              <div className="group absolute right-0 bottom-0 flex h-22 w-22 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-[#00CAFF]">
                <ArrowUpRight
                  strokeWidth={1.2}
                  size={75}
                  className="absolute transition-all duration-400 ease-out group-hover:translate-x-16 group-hover:-translate-y-16"
                />
                <ArrowUpRight
                  strokeWidth={1.2}
                  size={75}
                  className="absolute -translate-x-16 translate-y-16 transition-all duration-400 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
            </Link>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Projects;
