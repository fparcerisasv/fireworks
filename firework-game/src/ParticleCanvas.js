// src/components/ParticleCanvas.js

import React, { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const gravity = 0.02;
  const friction = 0.99;

  class Particle {
    constructor(x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = {
        x: velocity.x,
        y: velocity.y,
      };
      this.opacity = 1;
    }

    draw(c) {
      c.save();
      c.globalAlpha = this.opacity;
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
      c.restore();
    }

    update(c) {
      this.draw(c);
      this.velocity.x *= friction;
      this.velocity.y *= friction;
      this.velocity.y += gravity;
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.opacity -= 0.01;
    }
  }

  const handleResize = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const handleClick = (event) => {
    mouse.current.x = event.clientX;
    mouse.current.y = event.clientY;

    const particleCount = 300;
    const power = 6;
    let radians = (Math.PI * 2) / particleCount;

    for (let i = 0; i < particleCount; i++) {
      particles.current.push(
        new Particle(
          mouse.current.x,
          mouse.current.y,
          3,
          `hsl(${Math.random() * 360}, 50%, 50%)`,
          {
            x: Math.cos(radians * i) * (Math.random() * power),
            y: Math.sin(radians * i) * (Math.random() * power),
          }
        )
      );
    }
  };

  const animate = (c) => {
    requestAnimationFrame(() => animate(c));
    c.fillStyle = 'rgba(0,0,0,0.05)';
    c.fillRect(0, 0, c.canvas.width, c.canvas.height);

    particles.current.forEach((particle, i) => {
      if (particle.opacity > 0) {
        particle.update(c);
      } else {
        particles.current.splice(i, 1);
      }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    handleResize(); // Set initial canvas size

    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleClick);

    animate(c);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ParticleCanvas;
