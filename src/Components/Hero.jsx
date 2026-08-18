import React from 'react'


import TypeWriter from './Typewriter'
import FloatingCube from './FloatingCube'
import { motion } from "motion/react"


const onscroll = (id) => {
   document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const Hero = () => {
   return (
      <section
         id='home'
         className='relative min-h-screen w-full px-[6%] bg-black overflow-hidden pt-8 md:pt-24'
      >
         <div className='md:grid md:grid-cols-2 pt-20 md:pt-0 w-full h-auto overflow-hidden'>

            <motion.div
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.4 }}
               className='flex flex-col px-3 justify-center  '>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }} className='font-extrabold md:text-6xl text-5xl text-white tracking-wider font-Syne'  >
                  <h1>HI I'm
                     <span className='gradient-text'> Sam</span>
                  </h1>
               </motion.div>

               <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className='mt-6 font-bold md:font-medium md:text-4xl text-2xl text-amber-300' >
                  <TypeWriter
                     words={["MERN Stack Developer", "Full-Stack Engineer", "React Specialist", "MongoDB Expert"]}
                  />
               </motion.h2>

               <motion.div 
                 initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 1.2 }}
               className='mt-6'>
                  <p className='font-light md:w-1/2  text-[#8395af] md:tracking-widest  font-Syne'>
                     I craft high-performance web applications end-to-end from pixel-perfect
                     React interfaces to robust Node/MongoDB backends. Let's build something
                     extraordinary.
                  </p>
               </motion.div>

               <div className='relative flex items-center justify-center md:justify-end-safe pt-12 pb-12  md:hidden'>
                  <div className="animate-float relative z-1"
                  >

                     <FloatingCube />
                     <div style={{
                        position: "absolute", top: "50%", left: "50%",
                        transform: "translate(-50%,-50%)",
                        width: 1800, height: 180,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(0,245,212,0.12) 0%, transparent 70%)",
                        filter: "blur(24px)",
                        zIndex: -1,
                     }} />
                  </div>
               </div>


               <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1 }}
                  className='flex flex-col md:flex-row gap-6 mt-8 '>
                  <button className='px-1.5 md:px-9 py-3 text-black bg-amber-400 hover:bg-amber-300  rounded font-SpaceMono'
                     onClick={() => {
                        onscroll('projects');
                     }}
                  >VIEW WORK</button>
                  <button className='px-1.5 md:px-9  py-3 bg-transparent text-white border border-amber-50 hover:border-amber-400 font-SpaceMono rounded'
                     onClick={() => {
                        onscroll('contact');
                     }}
                  >CONTACT ME</button>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.2 }}
                  className='flex gap-6 mt-6 md:mt-9  justify-center md:justify-start'>
                  <div >
                     <h2 className='text-3xl text-amber-200 font-extrabold font-SpaceMono pb-2'>1+</h2>
                     <p className='text-[#64748b] text-1xl'>Years Exp</p>
                  </div>
                  <div >
                     <h2 className='text-3xl text-amber-200 font-extrabold font-SpaceMono pb-2'>6+</h2>
                     <p className='text-[#64748b] text-1xl' >Projects</p>
                  </div>
                  <div >
                     <h2 className='text-3xl text-amber-200 font-extrabold font-SpaceMono pb-2'>50%</h2>
                     <p className='text-[#64748b] text-1xl'>Graduate</p>
                  </div>
               </motion.div>
            </motion.div>


            <motion.div
               initial={{ opacity: 0, y: 80 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 1.2 }}
               className='relative items-center justify-center hidden md:flex '>
               <div className="animate-float relative z-10"
               >

                  <FloatingCube />
                  <div style={{
                     position: "absolute", top: "50%", left: "50%",
                     transform: "translate(-50%,-50%)",
                     width: 200, height: 200,
                     borderRadius: "50%",
                     background: "radial-gradient(circle, rgba(0,245,212,0.12) 0%, transparent 70%)",
                     filter: "blur(24px)",
                     zIndex: -1,
                  }} />

               </div>

            </motion.div>

         </div>

      </section>
   )
}

export default Hero