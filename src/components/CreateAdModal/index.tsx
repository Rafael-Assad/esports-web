import { FormEvent, useState } from "react"
import axios from 'axios'
import * as Dialog from "@radix-ui/react-dialog"
import * as Checkbox from "@radix-ui/react-checkbox"
import * as Select from "@radix-ui/react-select"
import * as ToggleGroup from "@radix-ui/react-toggle-group"

import { Check, GameController } from "phosphor-react"

import { Input } from "../elements/Input"

interface Games {
  id: string
  title: string
}

interface Props {
  gameList: Games[]
}

export const CreateAdModal = ({gameList}:Props) =>{
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false)
  
  const handleAdCreation = async (event: FormEvent) =>{
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    const newAd = {
      ...data,
      yearsPlaying:Number(data.yearsPlaying) ,
      weekDays,
      useVoiceChannel
    }

    
    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, newAd)
      
      alert("Anuncio Criado com Sucesso!")
    } catch (error) {
      console.error(error)
      alert('erro ao criar anúncio!')
    }
  }

    return (
        <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content 
          className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg"
        >
          <Dialog.Title className="text-3xl font-black">
            Publique um Anúndio
          </Dialog.Title>

          <form onSubmit={handleAdCreation} className="mt-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game">Qual o Game?</label>
              {/* Usar Select do Radix*/}

              <select name="game" id="game"
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                defaultValue=''
              >
                <option disabled value=''>
                Selecione o game que deseja jogar
                </option>

                {gameList.map( game =>{
                  return (
                    <option key={game.id} value={game.id} >
                      {game.title}
                    </option>
                  )
                })}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome ou apelido</label>
              <Input  name="name" id="name" placeholder="Como te chamam dentro do game?" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2"> 
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input name="yearsPlaying" id="yearsPlaying" 
                type="number" 
                placeholder="Tudo bem ser ZERO"
                min={0}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual seu ID no Discord?</label>
                <Input name="discord" id="discord" placeholder="Usuário#0000"  />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Quando costuma jogar?</label>
                <ToggleGroup.Root 
                  type="multiple" 
                  className="grid grid-cols-4 gap-2"
                  onValueChange={setWeekDays}
                >
                  <ToggleGroup.Item value="0" 
                    title="Domingo"
                    className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-600':'bg-zinc-900'}`}
                  >
                    D
                  </ToggleGroup.Item>

                  <ToggleGroup.Item value="1" 
                    title="Segunda"
                    className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-600':'bg-zinc-900'}`}
                  >
                    S
                  </ToggleGroup.Item>

                  <ToggleGroup.Item value="2" 
                    title="Terça"
                    className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-600':'bg-zinc-900'}`}
                  >
                    T
                  </ToggleGroup.Item>

                  <ToggleGroup.Item value="3" 
                    title="Quarta"
                    className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-600':'bg-zinc-900'}`}
                  >
                    Q
                  </ToggleGroup.Item>

                  <ToggleGroup.Item value="4" 
                    title="Quinta"
                    className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-600':'bg-zinc-900'}`}
                  >
                    Q
                  </ToggleGroup.Item>

                  <ToggleGroup.Item value="5" 
                    title="Sexta"
                    className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-600':'bg-zinc-900'}`}
                  >
                    S
                  </ToggleGroup.Item>

                  <ToggleGroup.Item value="6" 
                    title="Sábado"
                    className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-600':'bg-zinc-900'}`}
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">Em quais horários?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input name="hourStart" id="hourStart" type="time" placeholder="De" />
                  <Input name="hourEnd" id="hourEnd" type="time" placeholder="Até" />
                </div>
              </div>
            </div>

            <label className="mt-2 flex items-center gap-2 text-sm">
              <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900 "
                onCheckedChange={checked =>{
                  if(typeof checked === 'boolean') setUseVoiceChannel(checked)
                }}
              >
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-emerald-400"/>
                </Checkbox.Indicator>
              </Checkbox.Root>
              
              Costumo me conectar ao chat de voz
            </label>

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                Cancelar
              </Dialog.Close>

              <button className="bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3"
              type="submit">
                <GameController size={24}/>
                Encontrar Duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    )

}