
/*
 * @Description: 
 * @Author: jdchen
 * @Date: 2024-06-02 09:49:17
 * @LastEditors: jdchen
 * @LastEditTime: 2024-06-09 16:51:18
 */
"use client";
import React, { useEffect, useRef } from "react";
import CanvasIcon from "./canvasIcon";

const AboutPage: React.FC = () => {
  
  return (
    <div>
      <h1>About Us tsx</h1>
      <p>This is the about page.</p>

      {/* <canvas ref={canvasRef} width="500" height="500"></canvas> */}
      <CanvasIcon />
    </div>
  );
}
export default AboutPage;