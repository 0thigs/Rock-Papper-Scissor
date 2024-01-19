import Image from "next/image"
import Logo from '../../public/images/logo.svg'

export default function Home() {
  return (
    <>
      <header className="flex justify-between p-3 border-2 border-gray-600 rounded-lg w-96 lg:w-[500px]">
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
          12
          </p>
        </div>
      </header>
    </>
  )
}