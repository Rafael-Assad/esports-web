import { MagnifyingGlassPlus } from "phosphor-react"

import "./css/main.css"

import logoImg from "./assets/logo-esports.svg"

import game1 from "./assets/game1.png"
import game2 from "./assets/game2.png"
import game3 from "./assets/game3.png"
import game4 from "./assets/game4.png"
import game5 from "./assets/game5.png"
import game6 from "./assets/game6.png"



function App() {

  const mockGames = [
    {img: game1, adsAmount: 4, name: "League of Legends"},
    {img: game2, adsAmount: 4, name: "Dota"},
    {img: game3, adsAmount: 4, name: "CS:GO"},
    {img: game4, adsAmount: 4, name: "Apex Legends"},
    {img: game5, adsAmount: 4, name: "Fortinite"},
    {img: game6, adsAmount: 4, name: "World of Warcraft"},
  ]

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center justify-center my-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-destakGradient text-transparent bg-clip-text">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-12 mt-16">
        {mockGames.map(game =>{
          return <a href="" className="relative rounded-lg overflow-hidden">
            <img src={game.img}/>

            <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
              <div className="font-bold text-white block">
              {game.name}
              </div>

              <div className="text-zinc-300 text-sm block">
                {game.adsAmount} Anúncios
              </div>
            </div>
          </a>
        })}
      </div>

      <div className="pt-1 bg-destakGradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>

            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar Anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
