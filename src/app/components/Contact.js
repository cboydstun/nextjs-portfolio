"use client"

import React, { useState } from "react";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {

    const [mail, setMail] = useState({ email: "", subject: "", message: "" })

    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState("")

    const sendEmail = async () => {
        setLoading(true)

        if (!mail.email) {
            setMsg("Email is required")
            setLoading(false)
            return
        }

        if (!mail.subject) {
            setMsg("Subject is required")
            setLoading(false)
            return
        }

        if (mail.message.length === 0) {
            setMsg("Message is required")
            setLoading(false)
            return
        }

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mail)
            })
            const data = await res.json()

            if (data.code !== 200) {
                setMsg("An error ocurred, please try again.")
            } else {
                setMsg("Your message has been sent.")
            }
        } catch (error) {
            console.log(error);
            setMsg("An error ocurred, please try again.")
        }
        setLoading(false)
    }

    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
            <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best
                    to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/cboydstun">
                        <Image src={GithubIcon} alt="Github Logo" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/chris-boydstun/">
                        <Image src={LinkedinIcon} alt="LinkedIn Logo" />
                    </Link>
                </div>
            </div>
            <div>
                <form>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-white"
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setMail({ ...mail, email: e.target.value })}
                            value={mail.email}
                            className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                            placeholder="Your Email Address"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-white"
                        >
                            Subject:
                        </label>
                        <input
                            type="text"
                            id="subject"
                            onChange={(e) => setMail({ ...mail, subject: e.target.value })}
                            value={mail.subject}
                            className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                            placeholder="Email Title"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-white"
                        >
                            Message:
                        </label>
                        <textarea
                            id="message"
                            onChange={(e) => setMail({ ...mail, message: e.target.value })}
                            value={mail.message}
                            className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <div className="mb-6">
                        <button
                            onClick={sendEmail}
                            disabled={loading}
                            type="button"
                            className="bg-blue-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            {(loading) ? 'Sending' : 'Send Email'}
                        </button>
                        {
                            msg && (
                                <div className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                                    <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <div>
                                        {msg}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </form>
            </div>
        </section>
    );
};