import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  color?: string;
  delay?: number;
  className?: string;
  image?: string;
  imageSize?: 'small' | 'large';
}

const SkillCard = ({
  title,
  description,
  icon,
  color = 'portfolioPurple',
  delay = 0,
  className,
  image,
  imageSize = 'small'
}: SkillCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle intersection observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl w-64 h-96 transition-all duration-700",
        "transform hover:scale-105 hover:z-10",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={cn(
        "bg-black/70 border border-portfolioPurple/30 rounded-xl w-64 h-96 p-6 text-center flex flex-col justify-center transition-colors duration-300"
      )}>
        <div className="relative z-10">
          {/* Image */}
          {image && (
            <img
              src={image}
              alt={title}
              className={cn(
                "object-contain mx-auto mb-4 rounded-md",
                imageSize === 'small' ? "w-20 h-20" : "w-40 h-40"
              )}
            />
          )}
          {/* Icon */}
          {icon && !image && (
            <div className={cn(
              "w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-portfolioPurple/10 text-portfolioPurple mx-auto"
            )}>
              {icon}
            </div>
          )}

          {/* Content */}
          <h3 className="text-lg font-semibold text-portfolioPurple mb-2">{title}</h3>

          {description && (
            <p className="text-gray-300 relative z-10">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
