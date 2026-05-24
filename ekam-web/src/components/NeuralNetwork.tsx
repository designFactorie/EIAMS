"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Node = { x: number; y: number; r: number };

export function NeuralNetwork({ className = "" }: { className?: string }) {
  const { nodes, edges } = useMemo(() => {
    const seed = 7;
    const rand = mulberry32(seed);
    const N = 32;
    const nodes: Node[] = Array.from({ length: N }, () => ({
      x: rand() * 800,
      y: rand() * 600,
      r: 1.4 + rand() * 1.8,
    }));
    const edges: [number, number][] = [];
    for (let i = 0; i < N; i++) {
      const distances = nodes
        .map((n, j) => ({
          j,
          d: Math.hypot(nodes[i].x - n.x, nodes[i].y - n.y),
        }))
        .filter((e) => e.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 3);
      for (const { j } of distances) {
        if (!edges.some(([a, b]) => (a === i && b === j) || (a === j && b === i))) {
          edges.push([i, j]);
        }
      }
    }
    return { nodes, edges };
  }, []);

  return (
    <svg
      viewBox="0 0 800 600"
      className={`absolute inset-0 w-full h-full ${className}`}
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="node-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="1" />
          <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <motion.line
          key={`e-${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#edge-grad)"
          strokeWidth="0.6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2.4,
            delay: 0.6 + (i % 12) * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.g
          key={`n-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2 + (i % 16) * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <circle cx={n.x} cy={n.y} r={n.r * 4} fill="url(#node-grad)" opacity="0.25" />
          <circle cx={n.x} cy={n.y} r={n.r} fill="#5eead4" />
        </motion.g>
      ))}
    </svg>
  );
}

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
