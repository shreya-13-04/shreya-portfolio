"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full backdrop-blur-md bg-white/80 shadow-sm z-50"
    >
      <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Shreya<span className="text-purple-600">.</span>
        </Link>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </motion.header>
  );
}
