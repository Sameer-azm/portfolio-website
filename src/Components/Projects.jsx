import React from 'react'
import { PROJECTS } from '../data/data'
import { motion } from "motion/react"

const Projects = () => {
  return (
    <section
      id='projects'
      className='w-full min-h-screen px-[8%] bg-black overflow-hidden'
    >
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6,delay:0.5 }}
        viewport={{ once: true }}
      >
        <h2 className='text-white text-center text-[clamp(2rem,6vw,4rem)] font-Syne font-extrabold'>Featured <span className='gradient-text'>Projects</span> </h2>
      </motion.div>

      <div className='pt-3 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6'>
        {PROJECTS.map((p,i) => (
          <motion.div
           initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration:0.5, delay: 0.3*i }}
        viewport={{once:true}}
      
            key={i}
            className='flex flex-col gap-3 h-90 bg-[#111111] border border-white/80 rounded-2xl p-5 hover:border-amber-400 transition-all duration-300 group'
            style={{ fontFamily: "'Syne', sans-serif" }}
          >

            <div className='text-3xl'>{p.icon}</div>

            <h3 className='text-white font-bold text-lg leading-tight tracking-tight'>
              {p.title}
            </h3>

            <p className='text-white/50 text-sm tracking-normal flex-1'>
              {p.desc}
            </p>
            <div className='flex flex-wrap gap-3'>
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-4 py-1 cursor-pointer  bg-transparent ${p.textcolor} font-medium border-2 border-${p.textcolor} rounded-full text-center`}
                >
                  {tag}
                </span>
              ))}
            </div>


            <div className='flex gap-3 pt-1'>
              <a
                href={p.link}
                target='_blank'
                rel='noreferrer'
                className='flex-1 text-center text-sm font-semibold py-2 rounded-lg bg-transparent text-[#fbbf24] border-amber-400 hover:border-amber-600 border transition-colors duration-200'>
                Live ↗
              </a>
              <a
                href={p.repo}
                target='_blank'
                rel='noreferrer'
                className='flex-1 text-center text-sm font-semibold py-2 rounded-lg border  text-white border-white/80 hover:border-white/40 hover:text-white transition-colors duration-200'
              >
                Repo
              </a>
            </div>
          </motion.div>
        ))}
      </div>



    </section>
  )
}

export default Projects