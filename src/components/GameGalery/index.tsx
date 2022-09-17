
import { GameBanner } from "../GameBanner"

import game1 from "../../assets/game1.png"
import game2 from "../../assets/game2.png"
import game3 from "../../assets/game3.png"
import game4 from "../../assets/game4.png"
import game5 from "../../assets/game5.png"
import game6 from "../../assets/game6.png"


export interface GameGaleyProps {
  id: string
  title: string
  bannerUrl: string
  _count: {
    Ads: number
  }
}

interface GameList{
  games: GameGaleyProps[]
}

export const GameGalery = ({games}:GameList) =>{

  return (
    <>
    {games.map(game =>{
          return (
            <GameBanner 
              key={game.id}
              imgSrc={game.bannerUrl}
              name={game.title}
              adsAmount={game._count.Ads}
            />
          )
        })}
    </>
  )
}