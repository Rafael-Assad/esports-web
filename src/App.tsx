import { useState, useEffect } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { GameController } from "phosphor-react"

import "./css/main.css"

import logoImg from "./assets/logo-esports.svg"

import { GameGalery, GameGaleyProps } from "./components/GameGalery"
import { AdBar } from "./components/AdBar"
import { Input } from "./components/elements/Input"



function App() {
  const [games, setGames] = useState<GameGaleyProps[]>([])

  useEffect(() =>{
    fetch("http://localhost:3333/games")
      .then(response => response.json())
      .then(data => setGames(data))
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

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content 
          className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg"
        >
          <Dialog.Title className="text-3xl font-black">
            Publique um Anúndio
          </Dialog.Title>

          <form className="mt-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Qual o Game?</label>
              <Input id="title" placeholder="Selecione o game que deseja jogar" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome ou apelido</label>
              <Input id="name" placeholder="Como te chamam dentro do game?" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2"> 
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO"  />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual seu ID no Discord?</label>
                <Input id="discord" placeholder="Usuário#0000"  />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Quando costuma jogar?</label>
                <div className="grid grid-cols-4 gap-2">
                  <button title="Domingo"
                    className="w-8 h-8 rounded bg-zinc-900">
                    D
                  </button>

                  <button title="Segunda"
                    className="w-8 h-8 rounded bg-zinc-900">
                    S
                  </button>

                  <button title="Terça"
                    className="w-8 h-8 rounded bg-zinc-900">
                    T
                  </button>

                  <button title="Quarta"
                    className="w-8 h-8 rounded bg-zinc-900">
                    Q
                  </button>

                  <button title="Quinta"
                    className="w-8 h-8 rounded bg-zinc-900">
                    Q
                  </button>

                  <button title="Sexta"
                    className="w-8 h-8 rounded bg-zinc-900">
                    S
                  </button>

                  <button title="Sábado"
                    className="w-8 h-8 rounded bg-zinc-900">
                    S
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">Em quais horários?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input id="hourStart" type="time" placeholder="De" />
                  <Input id="hourEnd" type="time" placeholder="Até" />
                </div>
              </div>
            </div>

            <div className="mt-2 flex gap-2 text-sm">
              <Input type="checkbox" />
              Costumo me conectar ao chat de voz
            </div>

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                Cancelar
              </Dialog.Close>

              <Dialog.Close className="bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3">
                <GameController size={24}/>
                Encontrar Duo
              </Dialog.Close>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </div>
  )
}

export default App
