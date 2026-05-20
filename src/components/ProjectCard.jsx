import React from 'react';
import { ArrowUpRight, Cpu, Terminal, Play } from 'lucide-react';

// Extract thumbnail URL from YouTube or Google Drive video URL
const getVideoThumbnail = (videos) => {
  if (!videos || videos.length === 0) return null;
  const url = videos[0].url;

  // YouTube
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`;

  // Google Drive
  const gdMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (gdMatch) return `https://drive.google.com/thumbnail?id=${gdMatch[1]}&sz=w1280`;

  return null;
};

export default function ProjectCard({ project, onOpenDetails }) {
  const thumbnail = project.image || getVideoThumbnail(project.videos);

  const renderAbstractGraphic = (id) => {
    // If the project has an image or auto-thumbnail, render it
    if (thumbnail) {
      return (
        <div className="w-full h-full relative group bg-muted-gray">
          <img 
            src={thumbnail} 
            alt={project.title} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.style.display = 'none';
            }}
          />
          {/* Overlay grid accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#004dff_1px,transparent_1.5px)] bg-[size:16px_16px] opacity-10 pointer-events-none mix-blend-overlay"></div>
          {/* Play button overlay for video projects */}
          {project.videos && project.videos.length > 0 && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-14 h-14 rounded-full bg-ink-black/70 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 shadow-lg">
                <Play size={22} className="text-white ml-1" fill="white" />
              </div>
            </div>
          )}
        </div>
      );
    }

    switch (id) {
      case 1:
        return (
          <div className="w-full h-full bg-gradient-to-br from-ink-black to-dim-gray relative flex items-center justify-center p-6 overflow-hidden">
            {/* Grid elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-5"></div>
            {/* Abstract capsule/card */}
            <div className="relative w-4/5 h-2/3 bg-canvas-white border border-storm-gray rounded-[6px] shadow-sm p-4 flex flex-col justify-between z-10">
              <div className="flex justify-between items-center border-b border-storm-gray pb-2">
                <div className="w-12 h-2.5 bg-ink-black rounded-[2px]"></div>
                <div className="w-4 h-4 rounded-full bg-electric-blue"></div>
              </div>
              <div className="flex flex-col gap-2 py-2">
                <div className="w-full h-2 bg-storm-gray rounded-[2px]"></div>
                <div className="w-3/4 h-2 bg-storm-gray rounded-[2px]"></div>
                <div className="w-1/2 h-2 bg-storm-gray rounded-[2px]"></div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="w-8 h-3 bg-storm-gray rounded-[2px]"></div>
                <div className="w-12 h-3 bg-electric-blue rounded-[2px]"></div>
              </div>
            </div>
            {/* Decorative electric glow */}
            <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-electric-blue blur-2xl opacity-40"></div>
          </div>
        );
      case 2: // Telegram Bot
        return (
          <div className="w-full h-full bg-gradient-to-br from-ink-black via-dim-gray to-ink-black relative flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#004dff_1px,transparent_1.5px)] bg-[size:12px_12px] opacity-10"></div>
            {/* Terminal outline */}
            <div className="relative w-5/6 h-3/4 bg-ink-black border border-storm-gray rounded-[6px] p-4 flex flex-col font-mono text-[9px] text-storm-gray z-10">
              <div className="flex gap-1 mb-2 pb-1 border-b border-storm-gray/20">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 flex flex-col gap-1.5 text-left text-green-400">
                <span>$ telegram-bot --start</span>
                <span className="text-white">&gt; connection established</span>
                <span className="text-electric-blue">&gt; setoran_realtime: received (OK)</span>
                <span className="text-yellow-400">&gt; push_notification: 200 OK</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-electric-blue/15 rounded-full blur-2xl"></div>
          </div>
        );
      case 3: // Phone Service
        return (
          <div className="w-full h-full bg-gradient-to-tr from-dim-gray to-canvas-white relative flex items-center justify-center p-6 overflow-hidden border-b border-storm-gray">
            {/* Abstract phone frame */}
            <div className="relative w-[120px] h-[200px] border-4 border-ink-black bg-canvas-white rounded-[12px] p-3 flex flex-col justify-between shadow-md z-10">
              <div className="w-12 h-1 bg-ink-black mx-auto rounded-full mb-2"></div>
              <div className="flex-1 flex flex-col gap-3 py-1">
                <div className="h-6 w-full border border-storm-gray rounded-[4px] flex items-center px-1">
                  <div className="w-8 h-1 bg-storm-gray rounded-full"></div>
                </div>
                <div className="flex-1 border border-dashed border-electric-blue rounded-[4px] flex flex-col gap-1.5 p-1.5 justify-center">
                  <div className="w-full h-1 bg-electric-blue/30 rounded-full"></div>
                  <div className="w-2/3 h-1 bg-electric-blue/30 rounded-full"></div>
                  <div className="w-1/2 h-1 bg-electric-blue rounded-full"></div>
                </div>
              </div>
              <div className="w-6 h-6 border border-storm-gray rounded-full mx-auto flex items-center justify-center text-[8px] font-bold">
                OK
              </div>
            </div>
            <div className="absolute top-4 right-4 w-16 h-16 border border-dashed border-storm-gray rounded-full"></div>
          </div>
        );
      case 4: // E-Learning
        return (
          <div className="w-full h-full bg-gradient-to-tr from-ink-black to-electric-blue relative flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1.5px,transparent_1.5px)] bg-[size:3rem_3rem] opacity-5"></div>
            {/* E-Learning visual dashboard */}
            <div className="relative w-11/12 h-2/3 bg-canvas-white border border-storm-gray rounded-[6px] p-3 flex gap-3 z-10">
              {/* Sidebar */}
              <div className="w-1/4 border-r border-storm-gray pr-2 flex flex-col gap-2">
                <div className="w-full h-3 bg-storm-gray rounded-[2px]"></div>
                <div className="w-3/4 h-2 bg-storm-gray/50 rounded-[2px]"></div>
                <div className="w-2/3 h-2 bg-storm-gray/50 rounded-[2px]"></div>
              </div>
              {/* Main content */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="w-full h-2/3 bg-ink-black rounded-[4px] relative flex items-center justify-center">
                  {/* Play button */}
                  <div className="w-6 h-6 rounded-full bg-electric-blue flex items-center justify-center text-white">
                    <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-canvas-white border-b-[4px] border-b-transparent translate-x-[1px]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-12 h-2 bg-storm-gray rounded-[2px]"></div>
                  <div className="w-8 h-2 bg-electric-blue rounded-[2px]"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/10 rounded-full blur-xl"></div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-storm-gray to-canvas-white flex items-center justify-center">
            <Cpu className="text-dim-gray" size={32} />
          </div>
        );
    }
  };

  return (
    <div className="bg-canvas-white border border-storm-gray rounded-[6px] overflow-hidden flex flex-col group hover:border-ink-black transition-all duration-300">

      {/* Decorative Programmatic Header */}
      <div className="h-[180px] w-full border-b border-storm-gray relative overflow-hidden">
        {renderAbstractGraphic(project.id)}

        {/* Category Label Overlay */}
        <span className="absolute top-3 left-3 bg-canvas-white/90 backdrop-blur-sm border border-storm-gray/80 px-2 py-0.5 rounded-[80px] font-mono text-[9px] uppercase tracking-wider text-ink-black z-20">
          {project.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col items-start text-left">

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="bg-storm-gray/30 text-ink-black font-mono text-[10px] px-2.5 py-1 rounded-[80px] border border-storm-gray/40"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-transparent text-dim-gray font-mono text-[10px] px-1 py-1">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="font-pp-radio-grotesk text-xl font-bold text-ink-black mb-1 group-hover:text-electric-blue transition-colors">
          {project.title}
        </h3>

        {/* Project Subtitle */}
        <span className="font-mono text-[11px] text-dim-gray mb-3 uppercase tracking-wider block">
          {project.subtitle}
        </span>

        {/* Description */}
        <p className="font-inter text-sm text-dim-gray leading-relaxed mb-6 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Action Link */}
        <button
          onClick={() => onOpenDetails(project)}
          className="mt-auto inline-flex items-center gap-1.5 font-pp-radio-grotesk text-sm font-semibold text-ink-black hover:text-electric-blue transition-colors relative py-1 group/btn"
        >
          Lihat Detail
          <ArrowUpRight size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-electric-blue transition-all duration-300 group-hover/btn:w-full"></span>
        </button>

      </div>
    </div>
  );
}
