'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs
} from 'react-icons/fa'

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

///////////// skills data /////////
const skills = {
    title: "My Skills",
    description:
      "ทักษะเเละสกิลที่ถนัดที่ตอนนี้",
    skillList: [
      {
        index: 1,
        icon: <FaHtml5 />,
        name: 'html 5',
      },
      {
        index: 2,
        icon: <FaCss3 />,
        name: 'css 3',
      },
      {
        index: 3,
        icon: <FaJs />,
        name: 'Javascript',
      },
      {
        index: 4,
        icon: <FaReact />,
        name: 'React.js',
      },
      {
        index: 5,
        icon: <SiNextdotjs />,
        name: 'next.js',
      },
      {
        index: 6,
        icon: <SiTailwindcss />,
        name: 'tailwend.css',
      },
      {
        index: 7,
        icon: <FaNodeJs />,
        name: 'node.js',
      },
      {
        index: 8,
        icon: <FaFigma />,
        name: 'Figma',
      },
    ]
  }
  
  ///////////// about data ////////////// 
  const about = {
    title: "About me",
    description:
      "ข้อมูลส่วนตัว",
    info: [
      {
        index: 1,
        fieldName: "Name",
        fieldValue: "Phichitphong Tamsuntai",
      },
      {
        index: 2,
        fieldName: "Phone",
        fieldValue: "065-486-9639",
      },
      {
        index: 3,
        fieldName: "Experience",
        fieldValue: "2+ Years",
      },
      {
        index: 4,
        fieldName: "Skype",
        fieldValue: "Film.01",
      },
      {
        index: 5,
        fieldName: "Nationality",
        fieldValue: "Thai",
      },
      {
        index: 6,
        fieldName: "Email",
        fieldValue: "Tamsuntai123@gmail.com",
      },
      {
        index: 7,
        fieldName: "Freelance",
        fieldValue: "Available",
      },
    ]
  }

export default function ResumePage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' }
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <Tabs
                    defaultValue='skills'
                    className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto gap-6 xl:mx-0'>

                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* skills */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold '>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                                    {skills.skillList.map((item, index) => {
                                        return(
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}> 
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{item.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* about me */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] mx-auto text-white/60 xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item) => {
                                        return(
                                            <li key={item.index} className='flex justify-center items-center gap-4 xl:justify-start'>
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-md'>{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}