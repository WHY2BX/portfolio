"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Bugtopia",
    subtitle: "Thesis",
    description: "Lorem Ipsum is simply dummy text.",
    image: "/cards/fool.png",
  },
  {
    title: "Project Two",
    subtitle: "Web App",
    description: "Second project description.",
    image: "/cards/wheel.png",
  },
  {
    title: "Project Three",
    subtitle: "Mobile",
    description: "Third project description.",
    image: "/cards/magician.png",
  },
  {
    title: "Project Four",
    subtitle: "Game",
    description: "Fourth project description.",
    image: "/cards/fool.png",
  },
  {
    title: "Project Five",
    subtitle: "AI",
    description: "Fifth project description.",
    image: "/cards/wheel.png",
  },
];

export default function ProjectsPage() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <main
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <button
        onClick={prev}
        style={{
          position: "absolute",
          left: 40,
          fontSize: 32,
          zIndex: 200,
        }}
      >
        ←
      </button>

      <div
  style={{
    position: "relative",
    width: "100%",
    maxWidth: "1100px",
    height: "500px",
    margin: "0 auto",
  }}
>
  {projects.map((project, i) => {
    let offset = i - index;

    if (offset > projects.length / 2) offset -= projects.length;
    if (offset < -projects.length / 2) offset += projects.length;

    if (Math.abs(offset) > 2) return null;

    const isCenter = offset === 0;

    return (
      <motion.div
        key={project.title}
        onClick={() => setIndex(i)}
        animate={{
          x: `calc(-50% + ${offset * 260}px)`,
          y: "-50%",
          scale: isCenter ? 1 : 0.8,
          opacity: 1,
          zIndex: 100 - Math.abs(offset),
        }}
        transition={{ type: "spring", stiffness: 220, damping: 25 }}
        style={{
          position: "absolute",
          background: "rgb(30, 32, 38)",
          width: 260,
          height: 400,
          left: "50%",
          top: "50%",
          cursor: "pointer",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: isCenter
            ? "0 30px 60px rgba(0,0,0,0.6)"
            : "0 15px 30px rgba(0,0,0,0.3)",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: 16,
            background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
            color: "white",
          }}
        >
          <h3>{project.title}</h3>
          <p style={{ fontSize: 12 }}>{project.subtitle}</p>
        </div>
      </motion.div>
    );
  })}
</div>

      <button
        onClick={next}
        style={{
          position: "absolute",
          right: 40,
          fontSize: 32,
          zIndex: 200,
        }}
      >
        →
      </button>
    </main>
  );
}