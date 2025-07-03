
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlayGameMultiPlayer from './pages/PlayGameMultiPlayer'

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/start' element={<StartGame/>} />
        <Route path='/play' element={<PlayGame/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/multiplayer' element={<PlayGameMultiPlayer/>} />

      </Routes>
        
    </ div>
  )
}

export default App
