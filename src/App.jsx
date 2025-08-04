
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlayGameMultiPlayer from './pages/PlayGameMultiPlayer'
import { GameOver } from './pages/GameOver'
import  NextLevel  from './pages/NextLevel'
import NextLevelMultiPlayer from './pages/NextLevelMultiplayer'

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/start' element={<StartGame/>} />
        <Route path='/play' element={<PlayGame/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/multiplayer' element={<PlayGameMultiPlayer/>} />
        <Route path='/gameover' element={<GameOver/>} />
        <Route path="/nextlevel" element={<NextLevel />} />
        <Route path="/nextlevelmulti" element={<NextLevelMultiPlayer />} />
      </Routes>
        
    </ div>
  )
}

export default App
