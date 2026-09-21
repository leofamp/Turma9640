import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar"
import Home from './components/home'
import Guilds from './components/guilds'
import Members from './components/members'
import GuildForm from './components/guildForm'   // <-- novo
import MemberForm from './components/memberForm' // <-- novo

const App = () => (
  <Router>
    <div className='bg-[#ECEAE0] w-screen h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/guilds' element={<Guilds />} />
        <Route path='/members' element={<Members />} />
        <Route path='/guilds/:guildId' element={<GuildForm />} />   {/* <-- novo */}
        <Route path='/members/:memberId' element={<MemberForm />} /> {/* <-- novo */}
      </Routes>
    </div>
  </Router>
)

export default App