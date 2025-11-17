"use client";

import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm Shreya —  
            <span className="text-purple-600"> Developer & Researcher</span>
          </h1>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            I build production-ready web apps, 3D experiences,  
            and computer vision + ML systems.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-5 py-2 rounded-lg bg-purple-600 text-white shadow hover:bg-purple-700"
            >
              View Projects
            </a>

            <a
              href="/Shreya_Resume.pdf"
              className="px-5 py-2 rounded-lg border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <div className="h-80 md:h-full">
          <Hero3D />
        </div>

      </div>
    </section>
  );
}
