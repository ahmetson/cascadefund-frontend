import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface BorderBeamProps {
    className?: string;
    size?: number;
    duration?: number;
    colorFrom?: string;
    colorTo?: string;
    children?: React.ReactNode;
}

const BorderBeam: React.FC<BorderBeamProps> = ({
    className,
    size = 48, // 3rem = 48px
    duration = 2,
    colorFrom = '#3b82f6',
    colorTo = '#8b5cf6',
    children,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [currentSide, setCurrentSide] = useState(0); // 0: top, 1: right, 2: bottom, 3: left
    const containerRef = useRef<HTMLDivElement>(null);
    const beamRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const startAnimation = () => {
            const timer = setTimeout(() => {
                if (!isHovered) {
                    setIsVisible(true);
                }
            }, Math.floor(Math.random() * 100));
            return timer;
        };

        const timer = startAnimation();
        return () => clearTimeout(timer);
    }, [isHovered, currentSide]);

    const handleAnimationEnd = () => {
        setIsVisible(false);
        if (!isHovered) {
            // Move to next side
            setCurrentSide((prev) => (prev + 1) % 4);

            // Restart animation with constant delay
            setTimeout(() => {
                if (!isHovered) {
                    setIsVisible(true);
                }
            }, 200); // Small constant delay between sides
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsVisible(false);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Restart animation after a short delay
        setTimeout(() => {
            setTimeout(() => {
                setIsVisible(true);
            }, 300);
        }, 100);
    };

    const getBeamStyle = () => {
        const baseStyle = {
            animationDuration: `${duration}s`,
            filter: 'blur(0.5px)',
        };

        // Create airy gradient with shining center
        const createGradient = (direction: string) => {
            return `linear-gradient(${direction}, 
        transparent 0%, 
        transparent 20%, 
        ${colorFrom}40 30%, 
        ${colorTo}80 50%, 
        ${colorFrom}40 70%, 
        transparent 80%, 
        transparent 100%
      )`;
        };

        switch (currentSide) {
            case 0: // Top
                return {
                    ...baseStyle,
                    position: 'absolute' as const,
                    top: 0,
                    left: 0,
                    width: `${size}px`,
                    height: '3px',
                    background: createGradient('90deg'),
                    animation: 'beamTop 10s ease-in-out',
                    boxShadow: `0 0 8px ${colorFrom}60, 0 0 16px ${colorTo}40`,
                };
            case 1: // Right
                return {
                    ...baseStyle,
                    position: 'absolute' as const,
                    top: 0,
                    right: 0,
                    width: '3px',
                    height: `${size}px`,
                    background: createGradient('180deg'),
                    animation: 'beamRight 4s ease-in-out',
                    boxShadow: `0 0 8px ${colorFrom}60, 0 0 16px ${colorTo}40`,
                };
            case 2: // Bottom
                return {
                    ...baseStyle,
                    position: 'absolute' as const,
                    bottom: 0,
                    right: 0,
                    width: `${size}px`,
                    height: '3px',
                    background: createGradient('270deg'),
                    animation: 'beamBottom 8s ease-in-out',
                    boxShadow: `0 0 8px ${colorFrom}60, 0 0 16px ${colorTo}40`,
                };
            case 3: // Left
                return {
                    ...baseStyle,
                    position: 'absolute' as const,
                    bottom: 0,
                    left: 0,
                    width: '3px',
                    height: `${size}px`,
                    background: createGradient('0deg'),
                    animation: 'beamLeft 4s ease-in-out',
                    boxShadow: `0 0 8px ${colorFrom}60, 0 0 16px ${colorTo}40`,
                };
            default:
                return baseStyle;
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn('relative overflow-hidden', className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}

            {/* Single beam - one at a time */}
            {isVisible && (
                <div
                    ref={beamRef}
                    className="absolute z-10"
                    style={getBeamStyle()}
                    onAnimationEnd={handleAnimationEnd}
                />
            )}

            <style jsx>{`
        @keyframes beamTop {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }
        
        @keyframes beamRight {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes beamBottom {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(-100vw);
            opacity: 0;
          }
        }
        
        @keyframes beamLeft {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
};

export default BorderBeam;
