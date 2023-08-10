import { useDispatch, useSelector } from "react-redux"
import { useRef } from 'react'
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from 'react-router-dom'
import pokedex from '../../public/pokedex.png'
import './styles/HomePage.css'

const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className='home-container'>
      <img className="home-image" src={pokedex}/>
      <h2 className="home-title">Hi trainer!</h2>
      <p className='home-p'>To start with the app, give your name</p>
      <form className='home-form' onSubmit={handleSubmit}>
        <input className='home-input' id='inputTrainer' placeholder='Write your name' ref={inputTrainer} type='text' />
        <button className='home-button'>Catch 'em all!</button>
      </form>
    </div>
  )
}

export default HomePage