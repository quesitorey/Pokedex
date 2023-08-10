import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

const SelectType = ({setSelectValue}) => {

  const url = 'https://pokeapi.co/api/v2/type'

  const [ types, getTypes ] = useFetch(url)

  useEffect(() => {
    getTypes()
  }, [])

  const handleChange = e => {
    setSelectValue(e.target.value)
  }
  
  return(
    <select className='select' onChange={handleChange}>
      <option value='allPokemons'>All Pokemons</option>
      {
        types?.results.map(type => (
          <option key={type.url} value={type.url}>{type.name.toUpperCase()}</option>
        ))
      }
    </select>
  )
}

export default SelectType