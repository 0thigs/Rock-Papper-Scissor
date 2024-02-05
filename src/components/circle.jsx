import Image from "next/image";

export default function Circle({ img, size, top, left, color }) {
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
 };

 return (
    <button style={circleStyle}>
      <Image 
        width={35}
        src={img}
      />
    </button>
 );
}