import React, { useEffect } from "react";
import * as utils from "./utils";

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

const Canvas = (props) => {
  const canvasRef = React.useRef(null);
  const colors = ["#FFF", "#60ecf1", "#e63946", "#457b9d", "#FCA311"];
  let particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let requestId;

    document.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    document.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    const init = () => {
      for (let i = 0; i < 300; i++) {
        const radius = utils.randomIntFromRange(0.2, 1);
        let color = utils.randomColor(colors);

        particles.push(
          new Particle(canvas.width / 2, canvas.height / 2, radius, color)
        );
      }
    };

    init();

    const render = () => {
      // c.clearRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = "rgba(0,0,0, .35)";
      // c.fillStyle = "rgba(255,255,255, 0.05)";
      // c.globalAlpha = 0.9;
      c.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update(c);
      });

      requestId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return <canvas ref={canvasRef}></canvas>;
};

class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = 0.2;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.distanceFromCenter = utils.randomIntFromRange(
      50,
      window.innerWidth / 2 + 200
    );
    this.velocity = 0.003;
    this.lastMouse = {
      x: x,
      y: y,
    };

    this.opacity = 0.7;
  }

  draw(c, lastPoint) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.strokeStyle = this.color;
    c.globalAlpha = this.opacity;
    c.lineWidth = this.radius;
    c.moveTo(lastPoint.x, lastPoint.y);
    c.lineTo(this.x, this.y);
    c.stroke();
    c.closePath();
  }

  update(c) {
    const lastPoint = {
      x: this.x,
      y: this.y,
    };

    // move these points over time
    this.radians += this.velocity;

    // circular motion
    this.x =
      this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y =
      this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;

    // mouse collision detection
    if (utils.distance(mouse.x, mouse.y, this.x, this.y) < 150) {
      if (this.radius < 1) {
        this.radius += 0.5;
        this.opacity += 0.5;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 0.5;
      this.opacity -= 0.5;
    }

    this.draw(c, lastPoint);
  }
}

export default Canvas;
