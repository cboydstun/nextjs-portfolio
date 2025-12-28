"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

export default function AdvancedProjectCard({ 
    title, 
    description, 
    imgUrl, 
    gitUrl, 
    previewUrl, 
    tags = [] 
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group"
        >
            <div className="glass-morphism rounded-xl overflow-hidden hover-glow transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-52 md:h-64 overflow-hidden">
                    <Image
                        src={imgUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay on Hover */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent flex items-center justify-center gap-4"
                    >
                        {gitUrl && (
                            <motion.a
                                href={gitUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20"
                            >
                                <FaGithub className="text-white text-2xl" />
                            </motion.a>
                        )}
                        {previewUrl && (
                            <motion.a
                                href={previewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: -360 }}
                                transition={{ duration: 0.3 }}
                                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20"
                            >
                                <FaExternalLinkAlt className="text-white text-xl" />
                            </motion.a>
                        )}
                    </motion.div>

                    {/* Gradient Overlay Always */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:gradient-text transition-all">
                        {title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-4">
                        {description}
                    </p>

                    {/* Tags */}
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-purple-500/30 border-r-transparent" />
                </div>
            </div>
        </motion.div>
    );
}
