import React, { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';

const FluidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    try {
      WebGLFluid(canvasRef.current, {
        IMMEDIATE: true,
        TRIGGER: 'hover',
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 2.5, // Faster dissipation for readability of text
        VELOCITY_DISSIPATION: 1.2,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        SPLAT_RADIUS: 0.25,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 8,
        PAUSED: false,
        BACK_COLOR: { r: 10, g: 10, b: 12 }, // Match the #0a0a0c bg color
        TRANSPARENT: false,
        BLOOM: true,
        BLOOM_ITERATIONS: 6,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.6,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 0.8,
      });
    } catch (error) {
      console.error("Failed to initialize WebGL Fluid simulation:", error);
    }
  }, []);

  // Forward all mouse/touch events from the window to the underlying z-index canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const eventTypes = [
      'mousemove',
      'mousedown',
      'mouseup',
      'touchstart',
      'touchmove',
      'touchend'
    ];

    const activeHandlers: { type: string; handler: (e: any) => void }[] = [];

    eventTypes.forEach(type => {
      const handler = (e: any) => {
        if (e.target === canvas) return;
        
        let canvasEvent: Event;
        if (e instanceof MouseEvent) {
          canvasEvent = new MouseEvent(type, {
            clientX: e.clientX,
            clientY: e.clientY,
            screenX: e.screenX,
            screenY: e.screenY,
            button: e.button,
            buttons: e.buttons,
            bubbles: true,
            cancelable: true,
          });
        } else if (typeof TouchEvent !== 'undefined' && e instanceof TouchEvent) {
          canvasEvent = new TouchEvent(type, {
            touches: Array.from(e.touches),
            targetTouches: Array.from(e.targetTouches),
            changedTouches: Array.from(e.changedTouches),
            bubbles: true,
            cancelable: true,
          });
        } else {
          canvasEvent = new Event(type, {
            bubbles: true,
            cancelable: true,
          });
        }

        canvas.dispatchEvent(canvasEvent);
      };

      window.addEventListener(type, handler, { passive: true });
      activeHandlers.push({ type, handler });
    });

    return () => {
      activeHandlers.forEach(({ type, handler }) => {
        window.removeEventListener(type, handler);
      });
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 w-screen h-screen overflow-hidden bg-background">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default FluidBackground;
