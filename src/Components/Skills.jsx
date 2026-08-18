import React from 'react';
import { motion } from "motion/react";
import { TECH_ICONS } from '../data/data';

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full px-[8%] bg-black min-h-[90%] py-20 overflow-hidden"
    >

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center pt-8"
      >
        <h1 className="text-white font-Syne font-extrabold text-[clamp(2rem,6vw,4rem)]">
          Skills <span className="gradient-text">&</span> Technologies
        </h1>
      </motion.div>

   
      <div className="flex flex-wrap gap-4 justify-center items-center pt-12 pb-16">
        {TECH_ICONS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * i }}
            viewport={{ once: true }}
            className="flex flex-col justify-center border-2 border-[#64748b] w-20 h-20 rounded-2xl text-center transition-all ease-out hover:shadow-lg"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.08)";
              e.currentTarget.style.border = "2px solid #fbbf24";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.border = "2px solid #64748b";
            }}
          >
            <span className="text-3xl flex justify-center">{t.icon && <t.icon size={28} color="#fbbf24" />}</span>
            <span className="text-xs text-white/65 font-Syne font-extralight mt-1">
              {t.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8,delay:0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-8"
      >
        <div className="border border-[#64748b] rounded-3xl p-8 md:p-12 bg-white/5">
          <h3 className="text-cyan-400 text-sm font-mono tracking-widest mb-4">
            SPECIALIZATION
          </h3>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
            Full-Stack <span className="gradient-text">MERN</span> Developer
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-400">
            <ul className="space-y-4 text-[15px]">
              <li className="flex gap-3"><span className="text-cyan-400">{'->'}</span> Scalable Web Applications</li>
              <li className="flex gap-3"><span className="text-cyan-400">{'->'}</span> REST  APIs</li>
              <li className="flex gap-3"><span className="text-cyan-400">{'->'}</span> Database Architecture</li>
              <li className="flex gap-3"><span className="text-cyan-400">{'->'}</span> Performance Optimization</li>
            </ul>
            <ul className="space-y-4 text-[15px]">
              <li className="flex gap-3"><span className="text-cyan-400">{'->'}</span> Modern Frontend (React )</li>
              <li className="flex gap-3"><span className="text-cyan-400">{'->'}</span> State Management (Redux )</li>
              <li className="flex gap-3"><span className="text-cyan-400">{'->'}</span>Authentication  </li>
              <li className="flex gap-3"><span className="text-cyan-400">{'->'}</span> Clean & Maintainable Code</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;