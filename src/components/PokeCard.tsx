import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

import { PokeDataProps } from '../App'

export function PokeCard({
  name,
  sprite,
  types,
  height,
  weight,
}: PokeDataProps) {
  return (
    <div className="bg-gray-200 max-w-[685px] w-full h-24 rounded-lg flex items-center justify-between px-2">
      <div className="flex items-center">
        <img src={sprite} alt="imagem do pokémon" />
        <span className="text-purple-900 font-semibold text-xl">{name}</span>
      </div>
      <div className="flex gap-3">
        <div
          className={` ${
            types.primary.isTypeOfPokemon ? 'bg-green' : 'bg-red'
          } w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center `}
        >
          <img
            className="w-9 h-9"
            src={`${types.primary.name}.svg`}
            alt="pokémon tipo elétrico"
          />
          <p className="text-white font-bold text-xs">{types.primary.name}</p>
        </div>

        <div
          className={`${
            types.secondary.isTypeOfPokemon ? 'bg-green' : 'bg-red'
          } w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center`}
        >
          <img
            className="w-9 h-9"
            src={`${types.secondary.name}.svg`}
            alt="pokémon tipo elétrico"
          />
          <p className="text-white font-bold text-xs">{types.secondary.name}</p>
        </div>

        <div
          className={`${
            height.diference !== 'exact' ? 'bg-red' : 'bg-green'
          } w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center relative`}
        >
          <div className="bg-gray-100 rounded-full absolute right-1 top-[-6px]">
            {height.diference === 'low' ? (
              <ArrowCircleDown
                size={20}
                className="text-purple-900 font-medium"
              />
            ) : (
              <ArrowCircleUp
                size={height.diference === 'exact' ? 0 : 20}
                className="text-purple-900 font-medium"
              />
            )}
          </div>
          <span className="text-white font-bold text-xl">
            {(height.value * 10) / 100}
          </span>
          <p className="text-white font-bold text-md">M</p>
        </div>

        <div
          className={`${
            weight.diference !== 'exact' ? 'bg-red' : 'bg-green'
          } w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center relative`}
        >
          <div className="bg-gray-100 rounded-full absolute right-1 top-[-6px]">
            {weight.diference === 'low' ? (
              <ArrowCircleDown
                size={20}
                className="text-purple-900 font-medium"
              />
            ) : (
              <ArrowCircleUp
                size={weight.diference === 'exact' ? 0 : 20}
                className="text-purple-900 font-medium"
                visibility="false"
              />
            )}
          </div>
          <span className="text-white font-bold text-xl">
            {(weight.value * 10) / 100}
          </span>
          <p className="text-white font-bold text-md">Kg</p>
        </div>
      </div>
    </div>
  )
}
