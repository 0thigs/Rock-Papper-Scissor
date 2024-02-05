import Image from "next/image";

export default function Circle({ img, size, top, right, color }) {
 // Definindo o estilo inline
 const circleStyle = {
    position: "absolute",
    top: `${top}`,
    right: `${right}`,
    border: `13px solid ${color}`,
    width: `${size}px`,
    height: `${size}px`,
    background: "linear-gradient(to top, slate-100, slate-400)",
    borderRadius: "50%",
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    inset: "0"
 };

 return (
    <button style={circleStyle}>
      <Image 
        src={img}
      />
    </button>
 );
}