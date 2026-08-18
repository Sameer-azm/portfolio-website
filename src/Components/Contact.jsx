import React, { useState } from 'react'
import Button from './Button'
import { socials } from '../data/data'
import { motion } from "motion/react"


const Contact = () => {
    const FORMSPREE_ID = "mkokzarq";
    const [status, setstatus] = useState('idle')
    const [Form, setForm] = useState({ name: '', email: "", message: '' })
    function handlechange(e) {
        setForm({ ...Form, [e.target.name]: e.target.value })
    }

    async function handlesubmit(e) {
        e.preventDefault();
        const name = Form.name.trim()
        const email = Form.email.trim()
        const message = Form.message.trim()
        if (!name) {
            alert("Please enter your name");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email");
            return;
        }
        if (!message) {
            alert("Please enter your message");
            return;
        }

        setstatus('loading')
        try {
            const Response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(Form),
                });
            if (Response.ok) {
                setstatus('sent')
                setForm({ name: '', email: "", message: '' })
                setTimeout(() => setstatus('idle'), 4000)
            }
            else {
                setstatus('error')
                setTimeout(() => setstatus('idle'), 4000)
            }

        } catch (error) {
            setstatus('error')
            setTimeout(() => setstatus('idle'), 4000)
            console.log(error)
        }
    }
    return (
        <section
            id='contact'
            className='w-full min-h-screen px-[8%] bg-black overflow-hidden mb-4 '
        >
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className='text-center pt-8 h-1/4'>
                <h1 className=' text-white font-Syne font-extrabold text-[clamp(2rem,6vw,4rem)] '>Lets <span className='gradient-text'>Connect</span></h1>
                <p className='text-normal font-Syne text-[#8395af]'>Got a project in mind? Looking to hire? Or just want to say hi? My inbox is always open.</p>
            </motion.div>

            <div className='flex gap-4 pt-8 justify-center flex-wrap  h-1/4 '>
                {socials.map((s, i) => (
                    <motion.div key={i}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 * i }}
                        viewport={{ once: true }}
                        className='text-white px-5 py-1  md:px-7 md:py-2 gap-3 rounded-2xl bg-[#33383f]  border-2 border-white/15 hover:border-[#fbbf24]'>
                        <a href={s.href} target='_blank' className='flex items-center gap-2' >
                            <span>{s.icon && <s.icon size={24} />}</span>
                            <span>{s.label}</span>
                        </a>
                    </motion.div>
                ))}
            </div>

            {
                status === 'sent' && (
                    <div className="mb-3 mt-3 p-3 rounded-lg border border-[#fbbf24] text-[#fbbf24] bg-teal-400/10 text-sm font-mono">
                        ✓ Message sent! I'll get back to you soon.</div>
                )}
            <div className='md:w-1/2 w-full m-auto p-6 mt-8 border h-2/4 md:max-h-76 rounded-3xl border-[#64748b]  overflow-hidden'>
                <motion.form
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
                    action=""
                    onSubmit={handlesubmit}
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-2 mb-4'>
                        <input
                            value={Form.name}
                            onChange={handlechange}
                            type="text" name='name' placeholder='Enter your Name' className='font-Syne text-white w-full py-3 p-2 rounded bg-[#33383f] border border-white/15 hover:border-[#fbbf24] outline-none ' />
                        <input
                            value={Form.email}
                            onChange={handlechange}
                            type="email" name='email' placeholder='Enter your email' className='font-Syne text-white w-full  p-2  py-3 bg-[#33383f] border border-white/15 hover:border-[#fbbf24] outline-none ' />
                    </div>
                    <textarea
                        value={Form.message}
                        onChange={handlechange}
                        name="message" id="" className='font-Syne text-white w-full py-3 h-52 md:h-32 rounded bg-[#33383f] p-2 border border-white/15 hover:border-[#fbbf24] outline-none mb-2' ></textarea>
                    <div className="mt-3">
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-max-24 bg-primary hover:bg-[#fbbf24] bg-[#fbbf24]
                         text-black font-semibold text-xs px-3 py-3 rounded-2xl 
                         transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </motion.form >
            </div>

        </section>
    )
}

export default Contact;