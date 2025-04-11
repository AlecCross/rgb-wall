'use client';

import { useState, ChangeEvent } from 'react';

interface ColorPickerProps {
  onColorChange: (color: string) => void;
}

function ColorPicker({ onColorChange }: ColorPickerProps) {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div>
      <div>
        <label>Red: {red}</label>
        <input
          type="range"
          min="0"
          max="255"
          value={red}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setRed(parseInt(e.target.value));
            onColorChange(`rgb(${parseInt(e.target.value)}, ${green}, ${blue})`);
          }}
        />
      </div>
      <div>
        <label>Green: {green}</label>
        <input
          type="range"
          min="0"
          max="255"
          value={green}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setGreen(parseInt(e.target.value));
            onColorChange(`rgb(${red}, ${parseInt(e.target.value)}, ${blue})`);
          }}
        />
      </div>
      <div>
        <label>Blue: {blue}</label>
        <input
          type="range"
          min="0"
          max="255"
          value={blue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setBlue(parseInt(e.target.value));
            onColorChange(`rgb(${red}, ${green}, ${parseInt(e.target.value)})`);
          }}
        />
      </div>
      <div style={{ width: '100px', height: '100px', backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></div>
      <p>Колір: rgb({red}, {green}, {blue})</p>
    </div>
  );
}

export default ColorPicker;
