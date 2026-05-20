import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Briefcase } from 'lucide-react';
import profilePhoto from '../assets/foto-profil-compressed.webp';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-canvas-white relative overflow-hidden"
    >
      {/* Decorative High-Contrast Grid Background (Subtle digital print) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 z-0"></div>

      <div className="max-w-[1200px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Column: Teks */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[80px] bg-storm-gray/50 border border-storm-gray text-ink-black font-mono text-[12px] uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
            Halo Saya
          </motion.div>

          {/* Main Title / Name */}
          <motion.h1
            variants={itemVariants}
            className="font-pp-radio-grotesk font-semibold text-[44px] md:text-[54px] lg:text-[60px] leading-[1.1] tracking-[-0.01em] text-ink-black mb-4"
          >
            Aditya Purnama <br className="hidden md:inline" />
            <span className="text-electric-blue">Herlambang</span>
          </motion.h1>

          {/* Job Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-ink-black text-canvas-white font-mono text-sm mb-6"
          >
            <Briefcase size={16} className="text-electric-blue" />
            <span>Mahasiswa Aktif & Developer</span>
          </motion.div>

          {/* Subtitle / Description */}
          <motion.p
            variants={itemVariants}
            className="font-inter text-[16px] md:text-[18px] text-dim-gray leading-[1.6] tracking-[-0.02em] max-w-[560px] mb-10"
          >
            Mahasiswa Program Studi Bisnis dan Informatika (BI) di Politeknik Negeri Banyuwangi. Memiliki ketertarikan besar di bidang kreatif dan teknologi, serta pengembangan digital.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-electric-blue text-canvas-white px-8 py-4 rounded-[6px] font-inter text-[15px] font-semibold hover:bg-opacity-95 hover:shadow-lg active:scale-98 transition-all"
            >
              <Mail size={18} />
              Hubungi Saya
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-ink-black border border-storm-gray px-8 py-4 rounded-[6px] font-inter text-[15px] font-semibold hover:bg-storm-gray/30 hover:border-ink-black/30 transition-all"
            >
              Lihat Project
              <ArrowDown size={18} className="animate-bounce" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Picture */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.25, delay: 0.3 }}
        >
          {/* Backing Graphic (Electric Blue Blob/Circle and High Contrast Shapes) */}
          <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-electric-blue/10 blur-3xl z-0"></div>

          <div className="relative w-[280px] h-[340px] md:w-[340px] md:h-[400px] z-10 flex items-center justify-center">
            {/* Geometric Accent Borders */}
            <div className="absolute -inset-4 border border-dashed border-storm-gray rounded-[12px] pointer-events-none"></div>
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-electric-blue"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-electric-blue"></div>

            {/* Main Picture Container */}
            <div className="w-full h-full rounded-[6px] overflow-hidden border-2 border-ink-black bg-muted-gray shadow-md relative group">
              <img
                src={profilePhoto}
                alt="Aditya Purnama Herlambang"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
              />
              {/* Overlay grid accent */}
              <div className="absolute inset-0 bg-[radial-gradient(#004dff_1px,transparent_1.5px)] bg-[size:16px_16px] opacity-10 pointer-events-none"></div>
            </div>

            {/* Tech Badges floating around */}
            <div className="absolute -bottom-2 -left-6 bg-canvas-white border border-storm-gray shadow-sm rounded-[6px] px-3 py-1.5 flex items-center gap-2 font-mono text-[11px] text-ink-black animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <span>Ready For Everything</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
