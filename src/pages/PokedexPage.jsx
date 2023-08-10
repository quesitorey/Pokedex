import { useSelector } from "react-redux"
import useFetch from '../hooks/useFetch'
import { useEffect, useState, useRef } from 'react'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/PokedexPage/SelectType'
import pokedex from '../../public/pokedex.png'
import './styles/PokedexPage.css'

const PokedexPage = () => {

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
  const [ pokemons, getPokemons, getPokemonsByType ] = useFetch(url)

  
  const [ selectValue, setSelectValue ] = useState('allPokemons')
  
  const [ inputValue, setInputValue ] = useState('')
  
  const trainer = useSelector( reducer => reducer.trainer )

  
  useEffect(() => {
    if(selectValue === 'allPokemons'){
      getPokemons()
    }else{
      getPokemonsByType(selectValue)
    }
  }, [selectValue])

  const inputSearch = useRef()
  
  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const cbFilter = poke => poke.name.includes(inputValue)

  
  return(
    <div>
      <div className='box-red'>
        <img className="page-image" src={pokedex}/>
      </div>
        <div className='box-black'></div>
      <p className="page-text"><span className="page-span">Welcome {trainer} </span>here you can find your favourite pokemon :D</p>
      <div className='page-h'>
        <form className='page-form' onSubmit={handleSubmit}>
        <input className='page-input' placeholder='Find a Pokemon' ref={inputSearch}/>
        <button className='page-button'>Search</button>
      </form>
      <SelectType
        setSelectValue={setSelectValue}
        />
      </div>
      
      <div className='pokecards'>
        {
          pokemons?.results.filter(cbFilter).map(pokemon => (
            <PokeCard 
              key={pokemon.url}
              url={pokemon.url}
              />
          ))
        }
      </div>
      
    </div>
  )
}

export default PokedexPage