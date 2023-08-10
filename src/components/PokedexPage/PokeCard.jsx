import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import './styles/PokeCard.css'

const PokeCard = ({url}) => {
  
  const [ pokemon, getSinglePokemon ] = useFetch(url)

  useEffect( () => {
    getSinglePokemon()
  }, [])

  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }
  const firstType = pokemon?.types[0].type.name
  return(
    <article className={`pokecard ${firstType}-border`} onClick={handleClick}>
      <header className={`pokecard-header ${firstType}-gradient`}>
        <img className='pokecard-image' src={pokemon?.sprites.other['official-artwork'].front_default}/>
      </header>
      <section className="pokecard-body">
        <h3 className={`pokecard-name ${firstType}-color`}>{pokemon?.name}</h3>
        <ul className='pokecard-types'>
          {
            pokemon?.types.map( poke => (
              <li className="pokecard-typename" key={poke.type.url}>{poke.type.name}</li>
            ))
          }
        </ul>
        <hr className='pokecard-hr'/>
        <ul className='pokecard-stats'>
          {
            pokemon?.stats.map( pokeInfo => (
              <li className='pokecard-stat' key={pokeInfo.stat.url}>
                  <h4 className='pokecard-statname'>{pokeInfo.stat.name}</h4>
                <span className={`pokecard-statvalue ${firstType}-color`}>{pokeInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
          
      </section>
    </article>
  )
}

export default PokeCard