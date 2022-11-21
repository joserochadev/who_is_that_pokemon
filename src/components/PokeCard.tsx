import { ArrowCircleDown } from 'phosphor-react'

interface PokeProps {
  name: string
  sprites: string
  types: Array<string>
  height: number
  weight: number
}

export function PokeCard({ name, sprites, types, height, weight }: PokeProps) {
  const pokeTypePrimary = types[0].type.name
  const pokeTypeSecondary =
    types.length > 1 ? types[1].type.name : types[0].type.name

  return (
    <div className="bg-gray-200 max-w-[685px] w-full h-24 rounded-lg flex items-center justify-between px-2">
      <div className="flex items-center">
        <img src={sprites} alt="imagem do pokémon" />
        <span className="text-purple-900 font-semibold text-xl">{name}</span>
      </div>
      <div className="flex gap-3">
        <div className="bg-red w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center ">
          <img
            className="w-9 h-9"
            src={`${pokeTypePrimary}.svg`}
            alt="pokémon tipo elétrico"
          />
          <p className="text-white font-bold text-xs">{pokeTypePrimary}</p>
        </div>

        <div className="bg-green w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center">
          <img
            className="w-9 h-9"
            src={`${pokeTypeSecondary}.svg`}
            alt="pokémon tipo elétrico"
          />
          <p className="text-white font-bold text-xs">{pokeTypeSecondary}</p>
        </div>

        <div className="bg-green w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center relative">
          <div className="bg-gray-100 rounded-full absolute right-1 top-[-6px]">
            <ArrowCircleDown
              size={20}
              className="text-purple-900 font-medium"
            />
          </div>
          <span className="text-white font-bold text-xl">
            {(height * 10) / 100}
          </span>
          <p className="text-white font-bold text-md">M</p>
        </div>

        <div className="bg-green w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center relative">
          <div className="bg-gray-100 rounded-full absolute right-1 top-[-6px]">
            <ArrowCircleDown
              size={20}
              className="text-purple-900 font-medium"
            />
          </div>
          <span className="text-white font-bold text-xl">
            {(weight * 10) / 100}
          </span>
          <p className="text-white font-bold text-md">Kg</p>
        </div>
      </div>
    </div>
  )
}
