
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Effect } from './Effect';

interface ParticleBackgroundProps {
  onEffectReady?: (effect: Effect) => void;
}

const ParticleBackground = ({ onEffectReady }: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const effectRef = useRef<Effect | null>(null);
  const animationFrameRef = useRef<number>();
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isMobile) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      if (effectRef.current) {
        effectRef.current = new Effect(canvas.width, canvas.height, ctx);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (effectRef.current) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        effectRef.current.mouse.x = x;
        effectRef.current.mouse.y = y;
        effectRef.current.mouse.lastMoveTime = Date.now();
      }
    };
    
    const handleMouseLeave = () => {
      if (effectRef.current) {
        // When mouse leaves, set x to negative to indicate it's off page
        effectRef.current.mouse.x = -100;
        effectRef.current.mouse.y = -100;
      }
    };

    handleResize();
    effectRef.current = new Effect(canvas.width, canvas.height, ctx);
    
    // Notify parent component when effect is ready
    if (onEffectReady && effectRef.current) {
      onEffectReady(effectRef.current);
    }

    const animate = () => {
      if (effectRef.current) {
        effectRef.current.update();
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile, onEffectReady]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        position: 'absolute',
        top: 0,
        left: 0
      }}
    />
  );
};

export default ParticleBackground;
