import { useEffect, useState } from 'react'

import logo from './assets/logo.png'

import { PokeCard } from './components/PokeCard'

interface PokeProps {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: string[]
  height: number
  weight: number
}

function App() {
  const [randomPokemon, setRandomPokemon] = useState<PokeProps[]>([])

  // const img = randomPokemon.sprites.front_default

  async function loadRandomPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/6`)
      .then((response) => response.json())
      .then((data) => {
        setRandomPokemon([...randomPokemon, data])
      })
  }

  useEffect(() => {
    loadRandomPokemon()
  }, [])

  return (
    <div className="bg-purple-900 w-screen h-screen flex flex-col justify-start items-center">
      <img
        className="w-[220px] my-16"
        src={logo}
        alt="logo onde está escrito who's that pokémon?"
      />

      <h1 className="text-gray-200 font-semibold text-2xl">
        Qual é o Pokémon?
      </h1>

      <input
        className="max-w-[400px] w-full px-4 py-3 my-4 outline-none rounded-lg placeholder:text-purple-200 "
        placeholder="Escreva aqui..."
      />
      <div className="flex flex-col gap-3 px-2 my-12 overflow-auto max-w-[685px] w-full max-h-[500px] h-fulls">
        {randomPokemon.map((pokemon) => (
          <PokeCard
            key={pokemon.id}
            name={pokemon.name}
            sprites={pokemon.sprites.front_default}
            types={pokemon.types}
            height={pokemon.height}
            weight={pokemon.weight}
          />
        ))}
      </div>
    </div>
  )
}

export default App
