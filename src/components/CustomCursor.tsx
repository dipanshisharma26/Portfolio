import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setHidden(false);
      const { clientX: x, clientY: y } = e;

      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }

      if (outlineRef.current) {
        // Animate the outline cursor
        outlineRef.current.animate(
          {
            left: `${x}px`,
            top: `${y}px`,
          },
          { duration: 250, fill: 'forwards' }
        );
      }
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, input, textarea, select, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Initial setup
    addHoverListeners();

    // Observe changes to attach hover listeners to new elements
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot hidden md:block ${
          hovered ? 'scale-150 !bg-white' : ''
        }`}
      />
      <div
        ref={outlineRef}
        className={`cursor-outline hidden md:block ${
          hovered ? 'scale-75 !border-purple-500 bg-purple-500/10' : ''
        }`}
      />
    </>
  );
};

export default CustomCursor;
