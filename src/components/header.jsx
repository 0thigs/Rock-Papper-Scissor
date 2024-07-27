import React from 'react';
import Logo from "../../public/images/logo.svg";
import Image from 'next/image';

export default function Header({ wins, losses, draws }) {
    return (
        <header className="select-none flex justify-between p-3 border-2 border-gray-600 rounded-lg w-96 min-w-72 lg:w-[500px]">
            <div className="flex flex-col items-center justify-center ">
                <Image
                    src={Logo}
                    width={80}
                    alt="Pedra Papel ou Tesoura"
                    className="lg:w-24"
                />
            </div>
            <div className="relative flex flex-col items-center justify-center h-full px-6 py-2 text-center rounded-lg shadow-lg group bg-gradient-to-t from-slate-400 to-slate-100">
                <h1 className="text-xs font-semibold tracking-wider font-barlow text-blue-start">
                    SCORE
                </h1>
                <p className="text-5xl font-extrabold tracking-[-5px] font-barlow text-gray-700">
                    {wins}
                </p>
                <div className='absolute p-3 font-semibold transition duration-200 scale-0 bg-white rounded-lg opacity-0 text-start w-max group-hover:opacity-100 group-hover:scale-100'>
                    <p>🏆Wins: {wins}</p>
                    <p>❌Losses: {losses}</p>
                    <p>🖊Draws: {draws}</p>
                </div>
            </div>
        </header>
    );
}
