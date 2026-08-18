import React from 'react'
import { motion } from "motion/react"
import DockNav from './DockNav'
const Footer = () => {
    return (
        <section
            id='footer'
            className='w-full h- md:h-28 py-2 px-[8%] bg-gray-800 overflow-hidden mb-4'
        >
            <div className='flex flex-col md:flex-row justify-start md:justify-between items-center py-3'>
                <motion.div
                    initial={{ opacity: 0, x: 3 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3  }}
                    viewport={{ once: true }}
                    className='font-Syne font-bold text-[#00f5d4]'>
                    {"<sam/>"}
                </motion.div>

{/* <div className=' flex gap-2'>
    <a href="#">Home</a><a href='about'>About</a><a href="projects">Projects</a><a href="contact">Contact</a>
</div> */}
<DockNav/>

                <motion.div 
                  initial={{ opacity: 0, x: 3 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9  }}
                    viewport={{ once: true }}
                  
                className='md:hidden font-Syne font-medium text-xs text-white'>
                    © 2025 · Built with React + TailwindCSS + Framermotion     
 </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 3 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6  }}
                    viewport={{ once: true }} className='font-Syne font-bold text-[#00f5d4]'>
                    Developed by Sam
                </motion.div>
           </div>
        </section>
    )
}

export default Footer