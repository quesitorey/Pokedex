import { Link } from 'react-router-dom'

const Page404 = () => {
  return(
    <div>
      <h2>Page Not Found Err 404 </h2>
      <p>Please return to home</p>
      <button><Link to='/'>Home</Link></button>
    </div>
  )
}

export default Page404