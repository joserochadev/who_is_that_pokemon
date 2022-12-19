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

interface pokeDataProps {
  name: string
  sprite: string
  types: {
    primary: {
      name: string
      isTypeOfPokemon: boolean
    }
    secondary: {
      name: string
      isTypeOfPokemon: boolean
    }
  }
  height: {
    value: number
    diference: 'low' | 'high' | 'exact'
    isHeightOfPokemon: boolean
  }
  weight: {
    value: number
    diference: 'low' | 'high' | 'exact'
    isWeightOfPokemon: boolean
  }
}

function App() {
  const [pokemons, setPokemon] = useState<PokeProps[]>([])
  const [randomPokemon, setRandomPokemon] = useState<PokeProps>()
  const [input, setInput] = useState('')
  const [sortedNumber, setSortedNumber] = useState(
    Math.floor(Math.random() * 10),
  )
  const [pokeCardInfo, setPokeCardInfo] = useState<pokeDataProps[]>([])
  pokemons.reverse()

  function comparePokemon() {
    const poke = pokemons[pokemons.length - 1]
    const pokeData: pokeDataProps = {
      name: '',
      sprite: '',
      types: {
        primary: {
          name: '',
          isTypeOfPokemon: false,
        },
        secondary: {
          name: '',
          isTypeOfPokemon: false,
        },
      },
      height: {
        value: 0,
        diference: 'low',
        isHeightOfPokemon: false,
      },
      weight: {
        value: 0,
        diference: 'low',
        isWeightOfPokemon: false,
      },
    }

    if (poke?.name !== undefined && poke?.name === randomPokemon?.name) {
      console.log('You Win!!', pokeCardInfo)
    } else if (poke?.name !== undefined && randomPokemon?.name !== undefined) {
      pokeData.name = poke.name
      pokeData.sprite = poke.sprites.front_default
      pokeData.height.value = poke.height
      pokeData.weight.value = poke.weight

      if (poke.types.length > 1) {
        pokeData.types.primary.name = poke.types[0].type.name
        pokeData.types.secondary.name = poke.types[1].type.name
      } else {
        pokeData.types.primary.name = poke.types[0].type.name
        pokeData.types.secondary.name = poke.types[0].type.name
      }

      if (poke.height > randomPokemon?.height) {
        pokeData.height.diference = 'low'
      } else if (poke.height < randomPokemon?.height) {
        pokeData.height.diference = 'high'
      } else {
        pokeData.height.diference = 'exact'
      }

      if (poke.weight > randomPokemon?.weight) {
        pokeData.weight.diference = 'low'
      } else if (poke.weight < randomPokemon?.weight) {
        pokeData.weight.diference = 'high'
      } else {
        pokeData.weight.diference = 'exact'
      }
    }

    setPokeCardInfo([...pokeCardInfo, pokeData])

    console.log(
      'randomPokemon:',
      randomPokemon?.name,
      'current:',
      pokemons[pokemons.length - 1]?.name,
      'pokedata',
      pokeData,
    )
  }

  async function loadSelectedPokemon(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon([...pokemons, data])
      })
    setInput('')
  }

  async function loadRandomPokemon() {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${sortedNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setRandomPokemon(data)
        // console.log('randomPokemon', randomPokemon)
      })
  }

  // if (randomPokemon.length !== 0) {
  //   Object.entries(randomPokemon[0]).map((key, value, index) =>
  //     comparePokemon(key[0], key[1], value),
  //   )
  // }
  useEffect(() => {
    loadRandomPokemon()
  }, [randomPokemon])

  useEffect(() => {
    comparePokemon()
  }, [pokemons])

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
