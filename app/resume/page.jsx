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

///////////// about data ////////////// 
const about = {
    title: "About me",
    description:
        "ข้อมูลส่วนตัว",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Phichitphong Tamsuntai",
        },
        {
            fieldName: "Phone",
            fieldValue: "065-486-9639",
        },
        {
            fieldName: "Experience",
            fieldValue: "2+ Years",
        },
        {
            fieldName: "Skype",
            fieldValue: "Film.01",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Thai",
        },
        {
            fieldName: "Email",
            fieldValue: "Tamsuntai123@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
    ]
}


/////// experience ///////////
const experience = {
    title: "My Experience",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore",
    items: [
        {
            company: "Tech Solutions Inc",
            position: "Full Stack Deverloper",
            duration: "2022 - present"
        },
        {
            company: "Web Design Studio",
            position: "Programming Course Intern",
            duration: "Summer - 2021"
        },
        {
            company: "E-commerce Startup",
            position: "Freelance Web Deverloper",
            duration: "2020 - 2021"
        },
        {
            company: "Tech Academy",
            position: "Texching Assistant",
            duration: "2019 - 2020"
        },
        {
            company: "Digital Agency",
            position: "UX/UI Designer",
            duration: "2018 - 2019"
        },
        {
            company: "Software Development Firm",
            position: "Junior Developer",
            duration: "2017 - 2018"
        },
    ]
}

/////// education ///////////
const education = {
    title: "My Education",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore",
    items: [
        {
            institution: "Online Course Plat",
            position: "Full Stack Deverloper Bootcamp",
            duration: "2023"
        },

        {
            institution: "codecademy",
            position: "Font-End Track",
            duration: "2022"
        },
        {
            institution: "Online Course",
            position: "Programming Course",
            duration: "2020-2021"
        },
        {
            institution: "Tech Institute",
            position: "Certified Web Developer",
            duration: "2019"
        },
        {
            institution: "Design School",
            position: "Diploma in Graphic Design",
            duration: "2016-2018"
        },

    ]
}


///////////// skills data /////////
const skills = {
    title: "My Skills",
    description:
        "ทักษะเเละสกิลที่ถนัดที่ตอนนี้",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5',
        },
        {
            icon: <FaCss3 />,
            name: 'css 3',
        },
        {
            icon: <FaJs />,
            name: 'Javascript',
        },
        {
            icon: <FaReact />,
            name: 'React.js',
        },
        {
            icon: <SiNextdotjs />,
            name: 'next.js',
        },
        {
            icon: <SiTailwindcss />,
            name: 'tailwend.css',
        },
        {
            icon: <FaNodeJs />,
            name: 'node.js',
        },
        {
            icon: <FaFigma />,
            name: 'Figma',
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
                    defaultValue='experince'
                    className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto gap-6 xl:mx-0'>
                        {/* <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger> */}
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className='flex flex-col justify-center items-center px-10 py-6 bg-[#232329] h-[184px]'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className='flex flex-col justify-center items-center px-10 py-6 bg-[#232329] h-[184px]'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>                        
                        </TabsContent>
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
                                    {about.info.map((item, index) => {
                                        return(
                                            <li className='flex justify-center items-center gap-4 xl:justify-start'>
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