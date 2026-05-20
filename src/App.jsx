import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-canvas-white min-h-screen selection:bg-electric-blue selection:text-white overflow-hidden">
      {/* Navigation Header */}
      <Navbar />
      
      {/* Page Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Portfolio / Project Grid & Details Modal */}
        <ProjectSection />
      </main>
      
      {/* Contact and Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
