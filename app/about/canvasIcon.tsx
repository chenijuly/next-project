/*
 * @Description: 
 * @Author: jdchen
 * @Date: 2024-06-09 16:50:49
 * @LastEditors: jdchen
 * @LastEditTime: 2024-06-09 17:09:09
 */
"use client";

import React, { useRef, useEffect } from 'react';

const CanvasIcon: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Set the background color
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Define the text properties
        ctx.font = 'bold 280px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Draw the 'p' letter
        ctx.fillStyle = 'lightgreen';
        ctx.fillText('PB', 250, 250);

        // // Draw the 'b' letter
        // ctx.fillStyle = 'lightgreen';
        // ctx.fillText('B', canvas.width * 0.7, canvas.height * 0.8);
      }
    }
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <canvas ref={canvasRef} width={500} height={500} style={{ border: '0px solid black' }} />
    </div>
  );
};

export default CanvasIcon;
