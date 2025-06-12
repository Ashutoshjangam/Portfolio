
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certification', href: '#certification' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id') || '';
        
        if (sectionTop <= 100) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <span className="text-white">Ashutosh</span> <span className="text-portfolioPurple">Jangam</span>
          </h1>
          
          <button 
            className="block md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18"></path><path d="M6 6L18 18"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
        
        <nav className={cn(
          "flex-col items-center md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0",
          menuOpen ? "flex" : "hidden md:flex"
        )}>
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={cn(
                "text-md transition-all hover:text-portfolioPurple",
                activeSection === item.href.substring(1) ? 
                  "text-portfolioPurple border-b border-portfolioPurple" : 
                  "text-gray-100"
              )}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
