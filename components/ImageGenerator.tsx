'use client';

import { useState } from 'react';

function createImage(color: string, width: number, height: number): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    return canvas.toDataURL();
  }
  return '';
}

function downloadImage(dataUrl: string, filename: string) {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

interface ImageGeneratorProps {
  color: string;
  screenWidth: number;
  screenHeight: number;
}

function ImageGenerator({ color, screenWidth, screenHeight }: ImageGeneratorProps) {
  const handleDownload = () => {
    const dataUrl = createImage(color, screenWidth, screenHeight);
    downloadImage(dataUrl, 'wallpaper.png');
  };

  return <button onClick={handleDownload}>Завантажити шпалери</button>;
}

export default ImageGenerator;
