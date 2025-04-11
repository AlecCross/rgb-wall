'use client';

import { useState, useEffect } from 'react';

interface ScreenSizeProps {
  onScreenSizeChange: (width: number, height: number) => void;
}

function ScreenSize({ onScreenSizeChange }: ScreenSizeProps) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = screen.width;
      const screenHeight = screen.height;
      setWidth(screenWidth);
      setHeight(screenHeight);
      onScreenSizeChange(screenWidth, screenHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onScreenSizeChange]);

  return (
    <div>
      <p>Ширина дисплея: {width}px</p>
      <p>Висота дисплея: {height}px</p>
    </div>
  );
}

export default ScreenSize;
