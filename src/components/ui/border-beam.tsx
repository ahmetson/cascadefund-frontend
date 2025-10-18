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
    colorFrom = '#8b82f6',
    colorTo = '#8b5cf6',
    children,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [currentSide, setCurrentSide] = useState(0); // 0: top, 1: right, 2: bottom, 3: left
    const [shapes, setShapes] = useState<Array<{ id: number, x: number, y: number, color: string, shape: string, direction: string }>>([]);
    const [lightPosition, setLightPosition] = useState(0); // 0-100% around the border
    const containerRef = useRef<HTMLDivElement>(null);
    const beamRef = useRef<HTMLDivElement>(null);
    const shapeIdRef = useRef(0);

    // Rainbow colors
    const rainbowColors = ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ff80', '#00ffff', '#0080ff', '#0000ff', '#8000ff', '#ff00ff', '#ff0080'];
    const shapesList = ['circle', 'square', 'triangle', 'diamond'];

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

    // Moving light effect when hovered
    useEffect(() => {
        if (isHovered) {
            const interval = setInterval(() => {
                setLightPosition(prev => (prev + 1) % 100);
            }, 50); // Move every 50ms for smooth movement

            return () => clearInterval(interval);
        }
    }, [isHovered]);

    // Generate shapes at beam position when hovered
    useEffect(() => {
        if (isHovered && isVisible) {
            const interval = setInterval(() => {
                const newShape = {
                    id: shapeIdRef.current++,
                    x: Math.random() * 100, // Random position along the beam
                    y: Math.random() * 100,
                    color: rainbowColors[Math.floor(Math.random() * rainbowColors.length)],
                    shape: shapesList[Math.floor(Math.random() * shapesList.length)],
                    direction: ['up', 'down', 'left', 'right'][Math.floor(Math.random() * 4)]
                };

                setShapes(prev => [...prev.slice(-8), newShape]); // Keep only last 8 shapes

                // Remove shape after animation
                setTimeout(() => {
                    setShapes(prev => prev.filter(shape => shape.id !== newShape.id));
                }, 2000);
            }, 300);

            return () => clearInterval(interval);
        }
    }, [isHovered, isVisible]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setShapes([]);
        // Restart animation after a short delay
        setTimeout(() => {
            setTimeout(() => {
                setIsVisible(true);
            }, 300);
        }, 100);
    };

    const getBeamStyle = () => {
        if (isHovered) {
            // Solid border when hovered
            return {
                position: 'absolute' as const,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: `2px solid ${colorFrom}`,
                borderRadius: '2px',
                boxShadow: `0 0 20px ${colorFrom}80, inset 0 0 5px ${colorTo}40`,
                animation: 'pulse 2s ease-in-out infinite',
            };
        }

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

    const renderShape = (shape: { id: number, x: number, y: number, color: string, shape: string, direction: string }) => {
        const shapeSize = Math.random() * 2 + 3; // 3-4 pixels
        const shapeStyle = {
            position: 'absolute' as const,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shapeSize}px`,
            height: `${shapeSize}px`,
            backgroundColor: shape.color,
            opacity: 0.8,
            animation: `flyOut${shape.direction} 2s ease-out forwards`,
            zIndex: 20,
        };

        switch (shape.shape) {
            case 'circle':
                return <div key={shape.id} style={{ ...shapeStyle, borderRadius: '50%' }} />;
            case 'square':
                return <div key={shape.id} style={shapeStyle} />;
            case 'triangle':
                return (
                    <div
                        key={shape.id}
                        style={{
                            ...shapeStyle,
                            width: 0,
                            height: 0,
                            backgroundColor: 'transparent',
                            borderLeft: `${shapeSize / 2}px solid transparent`,
                            borderRight: `${shapeSize / 2}px solid transparent`,
                            borderBottom: `${shapeSize}px solid ${shape.color}`,
                        }}
                    />
                );
            case 'diamond':
                return (
                    <div
                        key={shape.id}
                        style={{
                            ...shapeStyle,
                            transform: 'rotate(45deg)',
                        }}
                    />
                );
            default:
                return <div key={shape.id} style={shapeStyle} />;
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn('relative overflow-hidden', className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Single beam - one at a time */}
            {isVisible && (
                <div
                    ref={beamRef}
                    className="absolute"
                    style={getBeamStyle()}
                    onAnimationEnd={handleAnimationEnd}
                />
            )}

            {/* Flying geometric shapes on hover */}
            {isHovered && shapes.map(renderShape)}

            {/* Moving light around border when hovered */}
            {isHovered && (
                <div
                    className="absolute"
                    style={{
                        position: 'absolute',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${colorTo} 0%, ${colorFrom} 50%, transparent 100%)`,
                        boxShadow: `0 0 20px ${colorTo}, 0 0 40px ${colorFrom}`,
                        animation: `moveLight 5s linear infinite`,
                        transform: `translate(${lightPosition * 4}px, 0)`, // This will be overridden by CSS animation
                    }}
                />
            )}
            <div className="relative z-10">
                {children}
            </div>
            <style>{`
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

        @keyframes flyOutup {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(0, -32px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flyOutdown {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(0, 32px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flyOutleft {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(-32px, 0) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flyOutright {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(32px, 0) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0px #3b82f680, inset 0 0 0px #8b5cf640;
          }
          50% {
            box-shadow: 0 0 5px #3b82f6, inset 0 0 5px #8b5cf6;
          }
          100% {
            box-shadow: 0 0 1px #3b82f680, inset 0 0 1px #8b5cf640;
          }
        }

        @keyframes moveLight {
          0% {
            top: 0;
            left: 0;
            transform: translate(-4px, -4px);
          }
          25% {
            top: 0;
            left: 100%;
            transform: translate(-4px, -4px);
          }
          50% {
            top: 100%;
            left: 100%;
            transform: translate(-4px, -4px);
          }
          75% {
            top: 100%;
            left: 0;
            transform: translate(-4px, -4px);
          }
          100% {
            top: 0;
            left: 0;
            transform: translate(-4px, -4px);
          }
        }
      `}</style>
        </div>
    );
};

export default BorderBeam;
