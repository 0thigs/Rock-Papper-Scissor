"use client"

import Image from "next/image";
import React, { useState } from 'react'

export default function Circle({ img, size, top, left, color, value, getUserChoice }) {

  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  const circleStyle = {
    position: "absolute",
    top: top,
    left: left,
    border: `13px solid ${color}`,
    width: `${size}px`,
    height: `${size}px`,
    background: "linear-gradient(to top, #F2F1F2, #DCDCDC)",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transform: isHover ? "scale(1)" : "scale(0.98)",
    transition: 'transform  0.3s ease',
  };

  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button style={circleStyle} value={value} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={() => getUserChoice(value)}>
      <Image
        alt={`${value} image!`}
        width={35}
        src={img}
      />
    </button>
  );
}