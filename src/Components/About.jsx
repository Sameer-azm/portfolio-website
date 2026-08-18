import React from 'react'
import Sameer from '../assets/Sameer.png'
import Button from './Button'
import { motion } from "motion/react"
import { MapPin, GraduationCap, Briefcase, Globe } from "lucide-react"


const About = () => {
    return (
        <section
            id='about'
            className='w-full min-h-screen px-8% py-[50] overflow-hidden bg-black'
        >

            <div className='md:grid md:grid-cols-2  md:p-18 p-8'>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6, }}
                    className='md:hidden'>

                    <h1 className=' text-[clamp(2rem,6vw,5rem)] text-white font-Syne font-extrabold tracking-tighter mb-2'>
                        Full-Stack <span className='gradient-text '>MERN</span> Developer</h1>
                </motion.div>



                <div className='flex justify-center items-center cursor-pointer '>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className=' pt-0   md:p-3  md:border-2  md:border-amber-400  md:hover:border-amber-200 rounded-2xl '>
                        <img src={Sameer} className='object-cover h-60 w-full md:h-80 md:max-w-80 overflow-hidden' alt="" />
                    </motion.div>
                </div>



                <div className='px-2 mt:px-10 '>
                    <div className='hidden md:block'>
                        <motion.h1
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className='text-5xl text-white font-Syne font-extrabold'>Full-Stack <span className='gradient-text'>MERN</span> Developer</motion.h1></div>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.9 }}
                    ><p className='text-[#8395af] font-Syne  text-[clamp(0.8rem,2vw,1.1rem)] md:tracking-wider tracking-tighter mt-2 md:mt-6'>I'm Sam, a passionate MERN stack developer based in Karachi. I specialize in building scalable, high-performance web applications with clean, maintainable code.</p></motion.div>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.9 }}><p className='text-[#8395af] font-Syne text-[clamp(0.8rem,2vw,1.1rem)] md:tracking-wider tracking-tighter mt-2 md:mt-4'>From dynamic React frontends to robust Node/Express APIs and MongoDB schemas,I own the full stack. I'm obsessed with developer experience, performance, and design.</p></motion.div>

                    <div className='flex gap-4 items-center pt-4 justify-center'>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Button
                                text="Karachi, Pakistan" icon={<MapPin size={16}/>} />
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        > <Button
                                text="SE Undergrad" icon={<GraduationCap size={16}/>} />
                        </motion.div>

                    </div >


                    <div className='flex gap-4 items-center pt-3 justify-center'>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <Button text="Freelance & Remote" icon={<Briefcase size={16}/>} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <Button text=" English &  Urdu " icon={<Globe size={16}/>} />
                        </motion.div>


                    </div>
                </div>



            </div>

        </section>
    )
}

export default About