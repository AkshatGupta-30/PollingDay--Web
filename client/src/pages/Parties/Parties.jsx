import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import RouteCard from '../../components/RouteCard/RouteCard'
import "./Parties.scss"
import { Registration, PartiesNSymbols, Constitutions, Guidelines } from "../../components/Icons/PartiesIcon"

const Parties = () => {
  return (
    <div className='PartiesPage'>
      <Navbar active="0"/>
      <main>
          <div className="heading">Parties</div>
          <div className="group">
            <RouteCard route={"/parties/registration"} Icon={Registration} label={"Political Party Registration"}>
              Registration of new political parties under section 29 A of Representation of the People Act, 1951
            </RouteCard>
            {/* //TODO: Add Route */}
            <RouteCard route={"/"} Icon={PartiesNSymbols} label={"Political parties & Election Symbol"}>
              Allotment of reserved symbols under para 10, 10A, para 10B and Misc. Orders reg. Election Symbols and Symbol orders
            </RouteCard>
            {/* //TODO: Add Route */}
            <RouteCard route={"/"} Icon={Constitutions} label={"Constitutions of Political Parties"}>
              See the Constitutions of Recognized Political Parties
            </RouteCard>
            {/* //TODO: Add Route */}
            <RouteCard route={"/"} Icon={Guidelines} label={"Guidelines for political parties"}>
              Guidelines on transparency and accountbility in party
            </RouteCard>
          </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Parties
