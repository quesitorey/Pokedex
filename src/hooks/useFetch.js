import { useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {

  const [ infoApi, setInfoApi ] = useState()  

  const getApi = () => {
    axios.get(url)
      .then(resp => setInfoApi(resp.data))
      .catch(err => console.error(err))
  }

  const getTypeApi = urlType => {
    axios.get(urlType)
      .then(resp => {
        const obj = {
          results: resp.data.pokemon.map( e => e.pokemon )
        }
        setInfoApi(obj)
      })
      .catch(err => console.error(err))
  }
  
  return [ infoApi, getApi, getTypeApi ]
}

export default useFetch