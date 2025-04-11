'use client';

import { useState } from 'react';
import ColorPicker from '../components/ColorPicker';
import ScreenSize from '../components/ScreenSize';
import ImageGenerator from '../components/ImageGenerator';

function WallpaperGenerator() {
  const [selectedColor, setSelectedColor] = useState('rgb(0, 0, 0)');
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleScreenSizeChange = (width: number, height: number) => {
    setScreenWidth(width);
    setScreenHeight(height);
  };

  return (
    <div>
      <ColorPicker onColorChange={handleColorChange} />
      <ScreenSize onScreenSizeChange={handleScreenSizeChange} />
      <ImageGenerator color={selectedColor} screenWidth={screenWidth} screenHeight={screenHeight} />
    </div>
  );
}

export default WallpaperGenerator;
