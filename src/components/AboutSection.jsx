import React from 'react';
import { Mail, Server, Database, Layout, Settings } from 'lucide-react';

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

const LinkedinIcon = ({ className, size = 16 }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className, size = 16 }) => (
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
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function AboutSection() {
  const techStack = [
    {
      category: "Backend Development",
      icon: <Server size={20} className="text-electric-blue" />,
      skills: ["PHP (Laravel)", "Express", "MySQL", "PostgreSQL"]
    },
    {
      category: "Creative space",
      icon: <Database size={20} className="text-electric-blue" />,
      skills: ["Davinci Resolve", "Capcut", "Figma", "Adobe Family"]
    },
    {
      category: "Frontend Development",
      icon: <Layout size={20} className="text-electric-blue" />,
      skills: ["HTML5 & CSS3", "JavaScript", "Tailwind CSS", "React.js"]
    },
    {
      category: "Tools",
      icon: <Settings size={20} className="text-electric-blue" />,
      skills: ["SDLC (Waterfall/Agile)", "Git Version Control"]
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-canvas-white border-t border-storm-gray relative"
    >
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="font-mono text-[12px] uppercase tracking-wider text-dim-gray mb-2">Tentang Saya</span>
          <h2 className="font-pp-radio-grotesk font-semibold text-3xl md:text-4xl text-ink-black flex items-center gap-3">
            Kreativitas & Teknologi Digital
            <span className="w-8 h-[2px] bg-electric-blue hidden sm:inline-block"></span>
          </h2>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 text-left flex flex-col gap-6">
            <h3 className="font-pp-radio-grotesk text-xl font-medium text-ink-black">
              Siapa Aditya Herlambang?
            </h3>

            <p className="font-inter text-[15px] text-dim-gray leading-relaxed">
              Saya Aditya Herlambang, mahasiswa aktif Program Studi Bisnis dan Informatika  di Politeknik Negeri Banyuwangi. Saya memiliki ketertarikan besar di bidang kreatif dan teknologi, khususnya Software Development,Creative Media,& Procut Manager.
            </p>

            <p className="font-inter text-[15px] text-dim-gray leading-relaxed">
              Saya terbiasa bekerja dalam tim, mampu beradaptasi dengan lingkungan baru, dan selalu berusaha memberikan hasil kerja terbaik dalam setiap proyek yang dikerjakan. Selain aktif di dunia perkuliahan, saya juga terlibat dalam organisasi kampus pada bidang Medkominfo serta beberapa project kreatif dan digital.
            </p>

            {/* Data Diri Box */}
            <div className="bg-storm-gray/10 border border-storm-gray rounded-[6px] p-5 mt-2">
              <h4 className="font-pp-radio-grotesk text-sm font-semibold text-ink-black uppercase tracking-wider mb-3">Data Diri</h4>
              <ul className="flex flex-col gap-2 font-inter text-sm text-dim-gray">
                <li className="flex gap-2">
                  <span className="font-semibold text-ink-black w-36">Nama:</span>
                  <span>Aditya Purnama Herlambang</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-ink-black w-36">Status:</span>
                  <span>Mahasiswa Aktif</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-ink-black w-36">Kampus:</span>
                  <span>Politeknik Negeri Banyuwangi</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-ink-black w-36">Program Studi:</span>
                  <span>Bisnis dan Informatika (BI)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-ink-black w-36">Pendidikan Terakhir:</span>
                  <span>SMKN 1 Glagah Banyuwangi</span>
                </li>
              </ul>
            </div>

            {/* Social Links ("Mari Terkoneksi") */}
            <div className="mt-4 pt-6 border-t border-storm-gray">
              <h4 className="font-mono text-[12px] uppercase text-ink-black font-semibold mb-4">Mari Terkoneksi</h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Adityamewmew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-storm-gray rounded-[6px] text-ink-black font-inter text-sm font-medium hover:bg-ink-black hover:text-canvas-white hover:border-ink-black transition-all duration-200"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/adityamewtwo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-storm-gray rounded-[6px] text-ink-black font-inter text-sm font-medium hover:bg-ink-black hover:text-canvas-white hover:border-ink-black transition-all duration-200"
                >
                  <InstagramIcon size={16} />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-herlambang-57392729a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-storm-gray rounded-[6px] text-ink-black font-inter text-sm font-medium hover:bg-ink-black hover:text-canvas-white hover:border-ink-black transition-all duration-200"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
                <a
                  href="mailto:purnamaaditya939@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-storm-gray rounded-[6px] text-ink-black font-inter text-sm font-medium hover:bg-ink-black hover:text-canvas-white hover:border-ink-black transition-all duration-200"
                >
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {techStack.map((item, index) => (
              <div
                key={index}
                className="bg-canvas-white border border-storm-gray p-6 rounded-[6px] shadow-sm hover:border-ink-black transition-all duration-300 relative group"
              >
                {/* Visual marker inside card */}
                <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>

                <h4 className="font-pp-radio-grotesk text-[16px] font-semibold text-ink-black mb-4 pr-6">
                  {item.category}
                </h4>

                <div className="flex flex-col gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-dim-gray">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span>
                      <span className="font-mono text-[12px]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
