import type { NextPage } from 'next'
import { BiAlbum } from "react-icons/bi";
import NavBar from '../components/NavBar';

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
     <h1 className='text-6xl text-yellow-500'>Hola</h1>
    <BiAlbum className='text-9xl'/>
    </div>
  )
}

export default Home
