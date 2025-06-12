
import React, { useState, useEffect } from 'react';

type TypeWriterProps = {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenStrings?: number;
  className?: string;
};

const TypeWriter: React.FC<TypeWriterProps> = ({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenStrings = 1500,
  className = '',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current string to work with
      const currentString = strings[currentIndex];
      
      if (isDeleting) {
        // Delete one character
        setCurrentText(currentString.substring(0, currentText.length - 1));
        
        // If all characters deleted, move to next string
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % strings.length);
        }
      } else {
        // Add one character
        setCurrentText(currentString.substring(0, currentText.length + 1));
        
        // If full string typed, start deleting after delay
        if (currentText === currentString) {
          setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenStrings);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentText, 
    currentIndex, 
    isDeleting, 
    strings, 
    typingSpeed, 
    deletingSpeed, 
    delayBetweenStrings
  ]);

  return (
    <div className="inline-block">
      <span className={`${className} border-r-4 border-portfolioPurple animate-cursor-blink pr-1`}>
        {currentText}
      </span>
    </div>
  );
};

export default TypeWriter;
