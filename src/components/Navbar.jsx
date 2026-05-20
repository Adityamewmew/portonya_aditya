import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Saya', href: '#about' },
    { name: 'Project', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-canvas-white/80 backdrop-blur-md border-b border-storm-gray py-4 shadow-sm' 
        : 'bg-canvas-white py-6'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a 
          href="#home" 
          className="font-pp-radio-grotesk font-bold text-2xl tracking-tight text-ink-black flex items-center gap-2 group"
        >
          <span>ADITYA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-electric-blue group-hover:scale-150 transition-transform"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-pp-radio-grotesk text-[15px] font-medium text-ink-black hover:text-electric-blue transition-colors duration-200 py-2 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-electric-blue text-canvas-white px-5 py-2.5 rounded-[6px] font-inter text-sm font-semibold hover:bg-opacity-95 active:scale-95 transition-all shadow-sm hover:shadow-md"
          >
            Hubungi Saya
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-ink-black hover:text-electric-blue transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-canvas-white border-b border-storm-gray py-6 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-pp-radio-grotesk text-lg font-medium text-ink-black hover:text-electric-blue transition-colors py-2 border-b border-storm-gray/30"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-electric-blue text-canvas-white px-5 py-3 rounded-[6px] font-inter text-base font-semibold hover:bg-opacity-95 transition-all shadow-sm"
            >
              Hubungi Saya
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
