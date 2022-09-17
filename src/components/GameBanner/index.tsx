

interface GameBannerProps {
  imgSrc: string
  name: string
  adsAmount: number
}

export const GameBanner = ({imgSrc ,name, adsAmount}: GameBannerProps) => {
    return (
    <a href="" className="relative rounded-lg overflow-hidden">
    <img src={imgSrc}/>

    <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
      <div className="font-bold text-white block">
      {name}
      </div>

      <div className="text-zinc-300 text-sm block">
        {adsAmount} Anúncios
      </div>
    </div>
  </a>
  )
}