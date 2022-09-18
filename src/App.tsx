import { useState, useEffect } from "react"
import axios from 'axios'
import * as Dialog from "@radix-ui/react-dialog"

import "./css/main.css"

import logoImg from "./assets/logo-esports.svg"

import { GameGalery, GameGaleyProps } from "./components/GameGalery"
import { AdBar } from "./components/AdBar"
import { CreateAdModal } from "./components/CreateAdModal"



function App() {
  const [games, setGames] = useState<GameGaleyProps[]>([])

  useEffect(() =>{
    axios("http://localhost:3333/games")
      .then(response => setGames(response.data))
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center justify-center my-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-destakGradient text-transparent bg-clip-text">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-12 mt-16">
        <GameGalery games={games}/>
      </div>

    <Dialog.Root>
      <AdBar/>

      <CreateAdModal gameList={games} />
    </Dialog.Root>
    </div>
  )
}

export default App
