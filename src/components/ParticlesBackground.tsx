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
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: isDark ? '#8b5cf6' : '#ff6b35', // Match neon theme
      },
      links: {
        color: isDark ? '#67e8f9' : '#0f766e',
        distance: 150,
        enable: true,
        opacity: lineOpacity * 2,
        width: 1.5,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'top' as const, // Antigravity: move upwards
        random: true,
        straight: false,
        outModes: {
          default: 'out' as const,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: particleOpacity * 2,
      },
      shape: {
        type: 'triangle', // More techy shape
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), [isDark, particleOpacity, lineOpacity]);

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
