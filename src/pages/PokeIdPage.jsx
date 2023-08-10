import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import './styles/PokeIdPage.css'
import '../components/PokedexPage/styles/PokeCard.css'

const PokeIdPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  const [ singlePokemon, getSinglePokemon ] = useFetch(url)

  const type = singlePokemon?.types[0].type.name
  
  useEffect(() => {
    getSinglePokemon()
  }, [])
  console.log(singlePokemon)
  return(
    <article className='pokeid'>
      <header className={`pokeid-header ${type}-gradient`}>
        <img className='pokeid-img' src={singlePokemon?.sprites.other['official-artwork'].front_default}/>
      </header>
        <h2 className={`pokeid-name ${type}-color`}>{singlePokemon?.name}</h2>
      <section className='pokeid-section'>
        <div className='pokeid-infobox'>
          <div className='pokeid-i'>
            <p className='pokeid-info'>Weight</p>
            {singlePokemon?.weight}
          </div>
          <div className='pokeid-i'>
            <p className='pokeid-info'>Height</p>
            {singlePokemon?.height}
          </div>
        </div>
        
        <div className='pokeid-box'>
          <div className='pokeid-typebox'>
            <h3 className='pokeid-typename name'>Types</h3>
            <div className='pokeid-g'>
              {
                singlePokemon?.types.map(type => (
                  <div className={`pokeid-typeinfo ${type}-border`} key={type.type.url}><p>{type?.type.name}</p></div>
                ))
              }
            </div>
          </div>
          <div className='pokeid-abilitybox'>
            <h3 className='pokeid-abilityname name'>Abilities</h3>
            <div className='pokeid-g'>
              {
                singlePokemon?.abilities.map(ability => (
                 <p className='pokeid-abilityinfo' key={ability.ability.url}>{ability?.ability.name}</p>
                ))
              }
            </div>
          </div>
        </div>

        <div className='pokeid-statsbox'>
          <h2>Stats</h2>
            {
              singlePokemon?.stats.map( stat => (
                <div className='pokeid-statsinfo'>
                    <div className='pokeid-statsdata'>
                      <p className='pokeid-statsname' key={stat.url}>{stat?.stat.name}</p>
                      <p className='pokeid-statsnum'>{stat?.base_stat}</p>
                    </div>
                      <div className='pokeid-statsbar'></div>
                </div>
                
              ))
            }
        </div>
      </section>
    </article>
  )
}

export default PokeIdPage