"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Circle from "@/components/circle";
import Footer from "@/components/footer";
import Triangle from "../../public/images/bg-triangle.svg";
import Header from "@/components/header";
import { getRandomInt } from "@/scripts/getRandomInt";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function Home() {
  const [winner, setWinner] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [cpuChoice, setCpuChoice] = useState("");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);
  const [isChoosing, setIsChoosing] = useState(true);
  const { width, height } = useWindowSize()

  const choices = ["rock", "papper", "scissor"];

  function getCpuChoice() {
    const random = getRandomInt(3);
    return choices[random];
  }

  function MakeMove(choice) {
    const userChoice = choice;
    const cpuChoice = getCpuChoice();

    const possibleMoves = [
      {
        name: "rock",
        wins: "scissor",
      },
      {
        name: "papper",
        wins: "rock",
      },
      {
        name: "scissor",
        wins: "papper",
      },
    ];

    const UserWinsIt = possibleMoves.find((move) => move.name === userChoice).wins;

    if (userChoice === cpuChoice) {
      setWinner("empate");
      setDraws(draws + 1);
    } else if (UserWinsIt === cpuChoice) {
      setWinner("user");
      setWins(wins + 1)
    } else {
      setWinner("cpu");
      setLosses(losses + 1)
    }

    setUserChoice(userChoice);
    setCpuChoice(cpuChoice);
    setIsChoosing(false);
  }

  useEffect(() => {
    console.log("User Choice: ", userChoice);
    console.log("Cpu Choice: ", cpuChoice);
    console.log("Winner: ", winner);
  }, [userChoice, cpuChoice, winner]);

  return (
    <section className="flex flex-col items-center justify-center gap-56">
      <Header wins={wins} losses={losses} draws={draws} />
      {isChoosing ? (
        // CHOICE STEP
        <main className="relative">
          <Image src={Triangle} width={200} alt="Pedra Papel ou Tesoura" className="select-none" />

          <button value={"papper"} onClick={() => MakeMove("papper")}>
            <Circle
              name={"papper"}
              classname={"absolute top-[-25%] left-[-25%]"}
            />
          </button>

          <button value={"scissor"} onClick={() => MakeMove("scissor")}>
            <Circle
              name={"scissor"}
              classname={"absolute top-[-25%] left-[75%]"}
            />
          </button>

          <button value={"rock"} onClick={() => MakeMove("rock")}>
            <Circle
              name={"rock"}
              classname={"absolute top-[65%] left-[24%]"}
            />
          </button>
        </main>
      ) : (
        // RESULT STEP
        <div className="flex items-center justify-center w-full gap-40 text-white h-7">
          {winner === "user" && <Confetti width={width} height={height} />}
          <div className={`animate-fade-in flex flex-col items-center justify-center gap-5 p-10 ${winner === "user" && "bg-gradient-to-t from-[#B38900] to-[#c6a434] rounded-md shadow-md"}`}>
            <h1 className="text-4xl font-bold text-center">
              YOU
            </h1>
            <Circle
              name={userChoice}
              classname={"top-[65%] animate-fade-in"}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold uppercase text-[50px]">
              {winner === "empate" && "DRAW"}
              {winner === "cpu" && "CPU WIN"}
              {winner === "user" && "YOU WIN"}
            </h1>
            <button
              onClick={() => setIsChoosing(true)}
              className="px-16 py-2 mt-2 text-[#33374A] font-bold transition duration-300 ease-in-out bg-[#E2E8EF] rounded-lg shadow-md hover:bg-[#99A8BC]"
            >
              Play Again
            </button>


          </div>
          <div className={`animate-fade-in flex flex-col items-center justify-center gap-5 p-10 ${winner === "cpu" && "bg-gradient-to-t from-[#B38900] to-[#c6a434] rounded-md shadow-md"}`}>
            <h1 className="text-4xl font-bold text-center">
              CPU
            </h1>
            <Circle
              name={cpuChoice}
              classname={"top-[65%] animate-fade-in"}
            />
          </div>
        </div>
      )}
      <Footer />
    </section>
  );
}
