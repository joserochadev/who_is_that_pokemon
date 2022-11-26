import { useEffect, useState, FormEvent } from 'react'

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
  const [pokemons, setPokemon] = useState<PokeProps[]>([])
  const [randomPokemon, setRandomPokemon] = useState<PokeProps[]>([])
  const [input, setInput] = useState('')

  // console.log(input)

  // const img = pokemons.sprites.front_default

  async function loadSelectedPokemon(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon([...pokemons, data])
      })
  }

  function randomNumber() {
    return Math.floor(Math.random() * 10)
  }
  // randomNumber()

  async function loadRandomPokemon() {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setRandomPokemon([...randomPokemon, data])
        // console.log('>>>>', randomPokemon[0])
        // console.log(randomPokemon[0].name)
      })
  }

  function comparePokemon(key, value, index) {
    console.log(`${key} : ${value} : ${index}`)

    // if(randomPokemon[0].id === )
  }

  if (randomPokemon.length !== 0) {
    Object.entries(randomPokemon[0]).map((key, value, index) =>
      comparePokemon(key[0], key[1], value),
    )
  }

  useEffect(() => {
    loadRandomPokemon()
    // loadSelectedPokemon()
    // comparePokemon()
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

      <form
        onSubmit={(e) => loadSelectedPokemon(e)}
        className="max-w-[400px] w-full"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="max-w-[400px] w-full px-4 py-3 my-4 outline-none rounded-lg placeholder:text-purple-200 "
          placeholder="Escreva aqui..."
        />
      </form>
      <div className="flex flex-col gap-3 px-2 my-12 overflow-auto max-w-[685px] w-full max-h-[500px] h-fulls">
        {pokemons.map((pokemon) => (
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
