"use client";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/samsung 244.webp",
    "/images/6.jpg",
    "/images/abi.webp",
    "/images/new ban5.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
        borderRadius: "12px",
      }}
    >
      {images.map((src, index) => (
        <Box
          key={index}
          component="img"
          src={src}
          alt={`Slide ${index + 1}`}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 1s",
            opacity: currentIndex === index ? 1 : 0,
          }}
        />
      ))}
    </Box>
  );
}
