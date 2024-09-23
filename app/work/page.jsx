'use client'


import { motion } from "framer-motion"
import React, { useState } from "react"
import Link from "next/link"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'


const projects = [
    {
        num: '01',
        category: "Font-End",
        title: "Project 1",
        description:
            'เป็นการฝึกแปลง figma design เป็น code html css javascript โดยใช้ Framework NextJs',
        stack: [{ name: "Javascript" }, { name: "NextJs" },],
        image: '/5.png',
        live: "https://echo-blond.vercel.app/",
        github: "https://github.com/Jommarn04/ECHO"
    },
    {
        num: '02',
        category: "Font-End",
        title: "Project 2",
        description:
            'เป็นการฝึกเขียน Responsive ',
        stack: [{ name: "Html5" }, { name: "Css3" }],
        image: '/6.png',
        live: "/work",
        github: "https://github.com/Jommarn04/responsive"
    },
    {
        num: '03',
        category: "Font-End",
        title: "Project 3",
        description:
            'เป็นการฝึกออกแบบเเละสร้างระบบ Login',
        stack: [{ name: "Html5" }, { name: "Css3" }],
        image: '/7.png',
        live: "/work",
        github: "https://github.com/Jommarn04/web-login"
    },
    {
        num: '04',
        category: "calculator",
        title: "Project 4",
        description:
            'เขียนโค้ดโปรแกรมคำนวนส่งครู ในระหว่างเรียนปี 1',
        stack: [{ name: "C#" }, { name: "Xaml" }],
        image: '/1.png',
        live: "/work",
        github: "https://github.com/Jommarn04/Calculator"
    },
    {
        num: '05',
        category: "โปรแกรมตัดเกรด",
        title: "Project 5",
        description:
            'เขียนโค้ดโปรแกรมตัดเกรดส่งครู ในระหว่างเรียนปี 1',
        stack: [{ name: "C#" }, { name: "Xaml" }],
        image: '/3.png',
        live: "/work",
        github: "https://github.com/Jommarn04/ProgramGrade"
    },
    {
        num: '06',
        category: "ระบบ Login",
        title: "Project 6",
        description:
            'เขียนโค้ดระบบ Login ส่งครู ในระหว่างเรียนปี 2 โดยใช้ภาษา C# เเละใช้ Access เป็นฐานข้อมูล',
        stack: [{ name: "C#" }, { name: "Xaml" }],
        image: '/2.png',
        live: "/work",
        github: "https://github.com/Jommarn04/Login"
    },
    {
        num: '07',
        category: "ระบบเพิ่ม ลบ เเละเเก้ไขข้อมูล",
        title: "Project 7",
        description:
            'เขียนโค้ดระบบเพิ่ม ลบ เเละเเก้ไขข้อมูล ส่งครู ในระหว่างเรียนปี 2 โดยใช้ภาษา C# เเละใช้ Access เป็นฐานข้อมูล',
        stack: [{ name: "C#" }, { name: "Xaml" }],
        image: '/4.png',
        live: "/work",
        github: "https://github.com/Jommarn04/CRUD"
    },
]

export default function WorkPage() {

    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index 
        const currentIndex = swiper.activeIndex;
        /// update project state based on current slide index
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: { delay:2.4, duration: 0.4, ease: "easeIn" }
             }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full flex flex-col order-2 xl:h-[460px] xl:w-[50%] xl:justify-between xl:order-none ">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline-num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project-category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">{project.category} </h2>
                            {/* project-description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                            {/* github-project-button */}
                            <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github-project-button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[620px] mb-0"
                            onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return(
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-auto relative group flex justify-center items-center bg-transparent">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-transparent z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <img src={project.image} fill="true" className="object-cover" alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}