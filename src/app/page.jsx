"use client"
import { useState } from "react";
import Image from "next/image";
import Circle from "@/components/circle";
import Logo from "../../public/images/logo.svg";
import Triangle from "../../public/images/bg-triangle.svg";
import Papper from "../../public/images/icon-paper.svg";
import Scissor from "../../public/images/icon-scissors.svg";
import Rock from "../../public/images/icon-rock.svg";
import { getRandomInt } from "@/scripts/getRandomInt";

export default function Home() {
  const [componentKey, setComponentKey] = useState('');

  const size = 110

  const choices = [
    'rock',
    'papper',
    'scissor'
  ]


  function getCpuChoice() {
    const random = getRandomInt(3)
    const cpu_choice = choices[random]
    return cpu_choice
  }
  const cpu_choice = getCpuChoice()

  function getKey(key) {
    setComponentKey(key);
    console.log(Circle)
  }

  return (

    < section className="flex flex-col items-center justify-center gap-56" >
      <header className="flex justify-between p-3 border-2 border-gray-600 rounded-lg w-96 min-w-72 lg:w-[500px]">
        <div className="flex flex-col items-center justify-center ">
          <Image
            src={Logo}
            width={80}
            alt="Pedra Papel ou Tesoura"
            className="lg:w-24"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-full px-6 py-2 text-center rounded-lg shadow-lg bg-gradient-to-t from-slate-400 to-slate-100">
          <h1 className="text-xs font-semibold tracking-wider font-barlow text-blue-start">
            SCORE
          </h1>
          <p className="text-5xl font-extrabold tracking-[-5px] font-barlow text-gray-700">
            0
          </p>
        </div>
      </header>

      <main className="relative">
        <Image src={Triangle} width={200} alt="Pedra Papel ou Tesoura" />

        <Circle
          img={Papper}
          size={size}
          color={"#4A67F5"}
          top={"-25%"}
          left={"-25%"}
          key={"papper"}
          onKeyReceived={getKey}
        />

        <Circle
          img={Scissor}
          size={size}
          color={"#ECA822"}
          top={"-25%"}
          left={"75%"}
          key={"scissor"}
          onKeyReceived={getKey}
        />

        <Circle
          img={Rock}
          size={size}
          color={"#DA425F"}
          top={"65%"}
          left={"24%"}
          key={"rock"}
          onKeyReceived={getKey}
        />
      </main>

      <footer>

      </footer>
    </ section>
  );
}

//CONTINUAR: CRIAR O RULES MODAL
