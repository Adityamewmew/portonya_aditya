import React, { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Send, Check } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer id="contact" className="w-full flex flex-col mt-24">
      
      {/* Contact Section (Light Theme, stark layout) */}
      <div className="w-full py-24 bg-canvas-white border-t border-storm-gray">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 text-left flex flex-col gap-8">
            <div>
              <span className="font-mono text-[12px] uppercase tracking-wider text-dim-gray mb-2 block">Hubungi Saya</span>
              <h2 className="font-pp-radio-grotesk font-semibold text-3xl md:text-4xl text-ink-black">
                Mulai Kolaborasi <br />
                Dengan Saya
              </h2>
            </div>
            
            <p className="font-inter text-sm text-dim-gray leading-relaxed max-w-[400px]">
              Apakah Anda memiliki proyek menarik, peluang kerja, atau sekadar ingin berdiskusi? Jangan ragu untuk mengirim pesan. Saya akan berusaha membalas secepat mungkin.
            </p>

            <div className="flex flex-col gap-4 mt-4 font-inter text-sm text-ink-black">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-storm-gray flex items-center justify-center text-electric-blue">
                  <Mail size={14} />
                </div>
                <a href="mailto:purnamaaditya939@gmail.com" className="hover:text-electric-blue transition-colors">
                  purnamaaditya939@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-storm-gray flex items-center justify-center text-electric-blue">
                  <MapPin size={14} />
                </div>
                <span>Banyuwangi, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-left w-full">
              {/* Input: Nama */}
              <div className="flex flex-col gap-2 border-b border-storm-gray pb-2 focus-within:border-electric-blue transition-colors">
                <label htmlFor="name" className="font-pp-radio-grotesk text-xs font-semibold text-ink-black uppercase tracking-wider">
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none text-ink-black placeholder-whisper-gray py-2 focus:outline-none font-inter text-[15px]"
                />
              </div>

              {/* Input: Email */}
              <div className="flex flex-col gap-2 border-b border-storm-gray pb-2 focus-within:border-electric-blue transition-colors">
                <label htmlFor="email" className="font-pp-radio-grotesk text-xs font-semibold text-ink-black uppercase tracking-wider">
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none text-ink-black placeholder-whisper-gray py-2 focus:outline-none font-inter text-[15px]"
                />
              </div>

              {/* Input: Pesan */}
              <div className="flex flex-col gap-2 border-b border-storm-gray pb-2 focus-within:border-electric-blue transition-colors">
                <label htmlFor="message" className="font-pp-radio-grotesk text-xs font-semibold text-ink-black uppercase tracking-wider">
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="3"
                  placeholder="Tulis detail proyek atau pesan Anda di sini..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none text-ink-black placeholder-whisper-gray py-2 focus:outline-none font-inter text-[15px] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSent}
                className="self-start inline-flex items-center justify-center gap-2 bg-electric-blue text-canvas-white px-8 py-4 rounded-[6px] font-inter text-[15px] font-semibold hover:bg-opacity-95 active:scale-98 transition-all disabled:bg-green-600 disabled:cursor-not-allowed"
              >
                {isSent ? (
                  <>
                    <Check size={16} />
                    Pesan Terkirim
                  </>
                ) : (
                  <>
                    Kirim Pesan
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Footer Footer (Dark Theme) */}
      <div className="w-full bg-gradient-to-b from-[#191919] to-ink-black py-16 text-canvas-white border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="font-pp-radio-grotesk font-bold text-xl tracking-tight text-canvas-white flex items-center gap-1.5">
              <span>ADITYA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span>
            </a>
            <span className="font-mono text-[10px] text-whisper-gray uppercase tracking-widest">
              KREATIF & PENGEMBANGAN DIGITAL
            </span>
          </div>

          {/* Quick Navigation links */}
          <div className="flex items-center gap-6 font-pp-radio-grotesk text-sm">
            <a href="#home" className="text-whisper-gray hover:text-canvas-white transition-colors">Beranda</a>
            <a href="#about" className="text-whisper-gray hover:text-canvas-white transition-colors">Tentang Saya</a>
            <a href="#projects" className="text-whisper-gray hover:text-canvas-white transition-colors">Project</a>
          </div>

          {/* Copyright text */}
          <div className="font-mono text-[11px] text-dim-gray">
            © 2025 Aditya Purnama Herlambang. All rights reserved.
          </div>

        </div>
      </div>

    </footer>
  );
}
