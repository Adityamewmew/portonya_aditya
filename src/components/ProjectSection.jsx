import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, TrendingUp, ChevronLeft, ChevronRight, ZoomIn, Play } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const GithubIcon = ({ className, size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const categories = ['All', 'Web App', 'Video Creative'];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  useEffect(() => {
    if (selectedProject) {
      setCurrentImageIndex(0);
    }
  }, [selectedProject]);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e) => {
    if (!lightboxOpen || !selectedProject) return;
    if (e.key === 'ArrowRight') {
      setCurrentImageIndex(prev => prev === selectedProject.images.length - 1 ? 0 : prev + 1);
    } else if (e.key === 'ArrowLeft') {
      setCurrentImageIndex(prev => prev === 0 ? selectedProject.images.length - 1 : prev - 1);
    } else if (e.key === 'Escape') {
      setLightboxOpen(false);
    }
  }, [lightboxOpen, selectedProject]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openModal = (p) => {
    setSelectedProject(p);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Helper: convert YouTube/GDrive URL to embed URL
  const getEmbedUrl = (url) => {
    if (!url) return null;
    // YouTube
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?rel=0`;
    // Google Drive
    const gdMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (gdMatch) return `https://drive.google.com/file/d/${gdMatch[1]}/preview`;
    // Already an embed URL
    if (url.includes('/embed/') || url.includes('preview')) return url;
    return null;
  };

  const hasImages = selectedProject?.images && selectedProject.images.length > 0;
  const hasVideos = selectedProject?.videos && selectedProject.videos.length > 0;

  return (
    <section
      id="projects"
      className="py-24 bg-canvas-white border-t border-storm-gray"
    >
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <span className="font-mono text-[12px] uppercase tracking-wider text-dim-gray mb-2">Portfolio</span>
            <h2 className="font-pp-radio-grotesk font-semibold text-3xl md:text-4xl text-ink-black flex items-center gap-3">
              Karya & Project Pilihan
              <span className="w-8 h-[2px] bg-electric-blue hidden sm:inline-block"></span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 bg-storm-gray/30 p-1.5 rounded-[8px] border border-storm-gray/50 w-fit self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-[6px] font-pp-radio-grotesk text-xs font-semibold uppercase tracking-wider transition-all ${activeTab === cat
                  ? 'bg-canvas-white text-ink-black shadow-sm'
                  : 'text-dim-gray hover:text-ink-black hover:bg-canvas-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  onOpenDetails={openModal}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ─── Details Modal ─── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-ink-black/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-[1000px] max-h-[95vh] overflow-y-auto bg-canvas-white border border-storm-gray rounded-[12px] shadow-2xl z-10 flex flex-col p-6 md:p-10"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full border border-storm-gray bg-canvas-white hover:bg-storm-gray/30 hover:border-ink-black transition-colors z-20"
                aria-label="Close modal"
              >
                <X size={20} className="text-ink-black" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 text-left mt-2">

                {/* Left Column */}
                <div className="lg:col-span-8 flex flex-col gap-8">

                  {/* ── Image Slider ── */}
                  {hasImages && (
                    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[380px] bg-muted-gray rounded-[8px] overflow-hidden border border-storm-gray group shadow-sm">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={selectedProject.images[currentImageIndex]}
                          alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover cursor-zoom-in"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          onClick={() => setLightboxOpen(true)}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23e5e7eb'%3E%3Crect width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' fill='%23aaa' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </AnimatePresence>

                      {/* Zoom hint overlay */}
                      <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-zoom-in bg-ink-black/10"
                        onClick={() => setLightboxOpen(true)}
                      >
                        <div className="bg-ink-black/60 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-white text-xs font-mono">
                          <ZoomIn size={14} />
                          Klik untuk perbesar
                        </div>
                      </div>

                      {/* Prev / Next */}
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === 0 ? selectedProject.images.length - 1 : prev - 1); }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-ink-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-electric-blue transition-all backdrop-blur-sm"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === selectedProject.images.length - 1 ? 0 : prev + 1); }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-ink-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-electric-blue transition-all backdrop-blur-sm"
                          >
                            <ChevronRight size={20} />
                          </button>
                          {/* Dots */}
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                            {selectedProject.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`h-1.5 rounded-full transition-all ${currentImageIndex === idx ? 'bg-electric-blue w-5' : 'bg-white/60 hover:bg-white w-1.5'}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* ── Video Embeds ── */}
                  {hasVideos && (
                    <div className="flex flex-col gap-4">
                      <h4 className="font-pp-radio-grotesk text-[15px] font-semibold text-ink-black uppercase tracking-wider flex items-center gap-2">
                        <Play size={16} className="text-electric-blue" />
                        Preview Video
                      </h4>
                      <div className="flex flex-col gap-4">
                        {selectedProject.videos.map((vid, idx) => {
                          const embedUrl = getEmbedUrl(vid.url);
                          return (
                            <div key={idx} className="flex flex-col gap-2">
                              {vid.label && <p className="font-mono text-xs text-dim-gray uppercase tracking-wider">{vid.label}</p>}
                              {embedUrl ? (
                                <div className="relative w-full aspect-video rounded-[8px] overflow-hidden border border-storm-gray shadow-sm bg-ink-black">
                                  <iframe
                                    src={embedUrl}
                                    title={vid.label || `Video ${idx + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                  />
                                </div>
                              ) : (
                                <a
                                  href={vid.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-2 text-electric-blue font-inter text-sm underline"
                                >
                                  <Play size={14} /> Tonton Video
                                </a>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <span className="font-mono text-[11px] bg-electric-blue/10 text-electric-blue border border-electric-blue/20 px-3 py-1.5 rounded-[80px] uppercase tracking-wider font-semibold inline-block mb-4">
                        {selectedProject.category}
                      </span>
                      <h3 className="font-pp-radio-grotesk text-3xl md:text-4xl font-bold text-ink-black leading-tight">
                        {selectedProject.title}
                      </h3>
                      <p className="font-mono text-sm text-dim-gray uppercase tracking-wider mt-2">
                        {selectedProject.subtitle}
                      </p>
                    </div>

                    {selectedProject.longDescription && (
                      <div className="flex flex-col gap-3">
                        <h4 className="font-pp-radio-grotesk text-[15px] font-semibold text-ink-black uppercase tracking-wider">Deskripsi Project</h4>
                        <p className="font-inter text-[15px] text-dim-gray leading-relaxed">{selectedProject.longDescription}</p>
                      </div>
                    )}

                    {selectedProject.features && selectedProject.features.length > 0 && (
                      <div className="flex flex-col gap-4">
                        <h4 className="font-pp-radio-grotesk text-[15px] font-semibold text-ink-black uppercase tracking-wider">Fitur & Fungsionalitas Utama</h4>
                        <ul className="flex flex-col gap-3.5">
                          {selectedProject.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[15px] text-dim-gray">
                              <CheckCircle2 size={18} className="text-electric-blue mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Meta & Actions */}
                <div className="lg:col-span-4 flex flex-col gap-8 lg:border-l border-storm-gray lg:pl-10">
                  {selectedProject.technologies && (
                    <div className="flex flex-col gap-4">
                      <h4 className="font-pp-radio-grotesk text-sm font-semibold text-ink-black uppercase tracking-wider">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-storm-gray/20 text-ink-black font-mono text-[12px] px-3 py-1.5 rounded-[80px] border border-storm-gray/50 shadow-sm transition-colors hover:border-electric-blue/50 hover:bg-electric-blue/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.stats && (
                    <div className="flex flex-col gap-5 bg-storm-gray/10 p-5 rounded-[8px] border border-storm-gray/40">
                      <div className="flex items-center gap-2.5 text-ink-black pb-3 border-b border-storm-gray/30">
                        <TrendingUp size={18} className="text-electric-blue" />
                        <h4 className="font-pp-radio-grotesk text-sm font-semibold uppercase tracking-wider">Key Metrics</h4>
                      </div>
                      <div className="flex flex-col gap-4">
                        {selectedProject.stats.map((stat, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="font-pp-radio-grotesk text-xl font-bold text-electric-blue leading-none mb-1">{stat.value}</span>
                            <span className="font-inter text-xs text-dim-gray font-medium uppercase tracking-wider">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-storm-gray">
                    {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-electric-blue text-canvas-white w-full py-3.5 rounded-[6px] font-inter text-[15px] font-semibold hover:bg-opacity-95 transition-all shadow-sm">
                        Live Demo <ArrowUpRight size={18} />
                      </a>
                    )}
                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-transparent text-ink-black border border-storm-gray w-full py-3.5 rounded-[6px] font-inter text-[15px] font-semibold hover:bg-storm-gray/30 hover:border-ink-black transition-all">
                        <GithubIcon size={18} /> Source Code
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── Fullscreen Lightbox ─── */}
      <AnimatePresence>
        {lightboxOpen && selectedProject && hasImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-black/95 backdrop-blur-md"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            >
              <X size={22} />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-xs text-white/60 z-20">
              {currentImageIndex + 1} / {selectedProject.images.length}
            </div>

            {/* Image */}
            <motion.img
              key={currentImageIndex}
              src={selectedProject.images[currentImageIndex]}
              alt={`Fullscreen ${currentImageIndex + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="max-w-[92vw] max-h-[88vh] object-contain rounded-[6px] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Prev / Next */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === 0 ? selectedProject.images.length - 1 : prev - 1); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-electric-blue text-white flex items-center justify-center transition-all backdrop-blur-sm"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === selectedProject.images.length - 1 ? 0 : prev + 1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-electric-blue text-white flex items-center justify-center transition-all backdrop-blur-sm"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Thumbnail strip */}
            {selectedProject.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" onClick={(e) => e.stopPropagation()}>
                {selectedProject.images.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-12 h-8 rounded-[4px] overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-electric-blue' : 'border-white/20 hover:border-white/50'}`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
