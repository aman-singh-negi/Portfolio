import { useCallback, useMemo, useContext } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ThemeContext } from '../context/ThemeContext';

const ParticlesBackground = () => {
  const { theme } = useContext(ThemeContext);
  
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const isDark = theme === 'dark';
  const particleColor = isDark ? '#ffffff' : '#000000';
  const lineColor = isDark ? '#ffffff' : '#000000';
  const particleOpacity = isDark ? 0.2 : 0.08;
  const lineOpacity = isDark ? 0.08 : 0.05;

  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: 0 },
    background: {
      color: {
        value: 'transparent',
      },
      // Removed laggy CSS blobs, using this optimized canvas overlay
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: particleColor,
      },
      links: {
        color: lineColor,
        distance: 140,
        enable: true,
        opacity: lineOpacity,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: 'none' as const,
        random: true,
        straight: false,
        outModes: {
          default: 'bounce' as const,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 70, // Kept low for performance
      },
      opacity: {
        value: particleOpacity,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  }), [isDark, particleColor, lineColor, particleOpacity, lineOpacity]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="w-full h-full"
      />
      {/* Subtle overlay gradient to blend edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background z-10 pointer-events-none" />
    </div>
  );
};

export default ParticlesBackground;
