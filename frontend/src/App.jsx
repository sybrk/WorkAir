import { NavLink, Routes, Route } from 'react-router-dom'
import AddAirportFrom from './components/AddAirportForm'
import './App.css'
import Airports from './components/Airports'
import PersonnelList from './components/personnel/PersonnelList'
import PersonnelForm from './components/personnel/PersonnelForm'
import PlaneForm from './components/planes/PlaneForm'
import PlaneList from './components/planes/PlaneList'

function App() {


  return (
    <>
      <div className="navbar bg-base-100">
        <NavLink className="btn btn-ghost text-xl" to="/airports">Airports</NavLink>
        <NavLink className="btn btn-ghost text-xl" to="/personnels">Personnels</NavLink>
        <NavLink className="btn btn-ghost text-xl" to="/planes">Planes</NavLink>
      </div>
      <Routes>
        <Route path="/airports" element={<Airports />}>

        </Route>
        <Route path="/personnels" element={<PersonnelList />}>

        </Route>
        <Route path="/planes" element={<PlaneList />}>

        </Route>

        <Route path="/addairport" element={<AddAirportFrom />}>

        </Route>
        <Route path="/addpersonnel" element={<PersonnelForm />}>

        </Route>
        <Route path="/addplane" element={<PlaneForm />}>

        </Route>
      </Routes>
    </>
  )
}


export default App
