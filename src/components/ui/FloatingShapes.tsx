"use client";

import { motion } from "framer-motion";

interface Shape {
  type: "circle" | "ring" | "dot";
  size: number;
  x: string;
  y: string;
  color: string;
  delay: number;
  duration: number;
}

interface FloatingShapesProps {
  variant?: "light" | "dark";
  density?: "low" | "medium" | "high";
}

const lightShapes: Shape[] = [
  { type: "circle", size: 180, x: "5%", y: "10%", color: "bg-primary-200/30", delay: 0, duration: 20 },
  { type: "ring", size: 120, x: "85%", y: "15%", color: "border-primary-300/25", delay: 2, duration: 25 },
  { type: "dot", size: 8, x: "15%", y: "70%", color: "bg-primary-400/40", delay: 1, duration: 15 },
  { type: "dot", size: 6, x: "90%", y: "60%", color: "bg-tint/30", delay: 3, duration: 18 },
  { type: "circle", size: 100, x: "75%", y: "75%", color: "bg-primary-100/40", delay: 1.5, duration: 22 },
  { type: "ring", size: 60, x: "40%", y: "5%", color: "border-tint/20", delay: 4, duration: 20 },
  { type: "dot", size: 10, x: "60%", y: "85%", color: "bg-primary-300/30", delay: 2.5, duration: 16 },
  { type: "dot", size: 5, x: "30%", y: "40%", color: "bg-success/20", delay: 0.5, duration: 14 },
  { type: "circle", size: 60, x: "50%", y: "50%", color: "bg-primary-200/20", delay: 3.5, duration: 24 },
];

const darkShapes: Shape[] = [
  { type: "circle", size: 200, x: "10%", y: "10%", color: "bg-primary-500/10", delay: 0, duration: 20 },
  { type: "ring", size: 140, x: "80%", y: "20%", color: "border-primary-400/15", delay: 2, duration: 25 },
  { type: "dot", size: 8, x: "20%", y: "65%", color: "bg-primary-400/25", delay: 1, duration: 15 },
  { type: "dot", size: 6, x: "88%", y: "55%", color: "bg-tint/20", delay: 3, duration: 18 },
  { type: "circle", size: 120, x: "70%", y: "80%", color: "bg-primary-600/10", delay: 1.5, duration: 22 },
  { type: "ring", size: 80, x: "45%", y: "8%", color: "border-tint/10", delay: 4, duration: 20 },
  { type: "dot", size: 10, x: "55%", y: "90%", color: "bg-primary-300/15", delay: 2.5, duration: 16 },
  { type: "dot", size: 5, x: "35%", y: "35%", color: "bg-primary-400/10", delay: 0.5, duration: 14 },
];

export function FloatingShapes({ variant = "light", density = "medium" }: FloatingShapesProps) {
  const shapes = variant === "dark" ? darkShapes : lightShapes;
  const visibleShapes = density === "low" ? shapes.slice(0, 4) : density === "medium" ? shapes.slice(0, 7) : shapes;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {visibleShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          animate={{
            y: [0, -20, 0, 15, 0],
            x: [0, 10, 0, -10, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.type === "circle" && (
            <div
              className={`rounded-full ${shape.color} blur-2xl`}
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === "ring" && (
            <div
              className={`rounded-full border-2 ${shape.color}`}
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === "dot" && (
            <div
              className={`rounded-full ${shape.color}`}
              style={{ width: shape.size, height: shape.size }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
