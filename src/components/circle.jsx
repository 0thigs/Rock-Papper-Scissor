"use client"

import Image from "next/image";
import React, { useState } from 'react'
import Papper from "../../public/images/icon-paper.svg";
import Scissor from "../../public/images/icon-scissors.svg";
import Rock from "../../public/images/icon-rock.svg";

export default function Circle({ name, top, left, classname }) {

  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);
  let color = null
  let img = null


  if (name == "papper") {
    color = "#4A67F5"
    img = Papper
  }
  else if (name == "scissor") {
    color = "#ECA822"
    img = Scissor
  }
  else if (name == "rock") {
    color = "#DA425F"
    img = Rock
  }

  const circleStyle = {
    top: top,
    left: left,
    border: `13px solid ${color}`,
    width: `110px`,
    height: `110px`,
    background: "linear-gradient(to top, #F2F1F2, #DCDCDC)",
    borderRadius: "50%",
    display: "flex",
    cursor: "pointer",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transform: isHover ? "scale(1.02)" : "scale(0.98)",
    transition: 'transform  0.3s ease',
  };

  return (
    <div style={circleStyle} className={classname} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Image
        alt={`image!`}
        width={35}
        src={img}
      />
    </div>
  );
}