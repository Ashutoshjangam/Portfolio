import React from 'react';
import { cn } from '@/lib/utils';

type SocialIconsProps = {
  className?: string;
};

const SocialIcons: React.FC<SocialIconsProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <a
        href="mailto:ashutoshjangam2k@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-black/20 border border-portfolioPurple flex items-center justify-center text-white hover:bg-portfolioPurple transition-colors"
        aria-label="Email"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/ashutoshjangam1/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-black/20 border border-portfolioPurple flex items-center justify-center text-white hover:bg-portfolioPurple transition-colors"
        aria-label="LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>

      <a
        href="https://github.com/Ashutoshjangam"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-black/20 border border-portfolioPurple flex items-center justify-center text-white hover:bg-portfolioPurple transition-colors"
        aria-label="GitHub"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      </a>

      <a
        href="https://leetcode.com/u/Ashutosh_Jangam/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-black/20 border border-portfolioPurple flex items-center justify-center text-white hover:bg-portfolioPurple transition-colors"
        aria-label="Dribbble"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.06"></path>
          <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
          <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;
